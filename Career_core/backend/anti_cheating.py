import cv2
import numpy as np
import base64
import time
from flask import Flask, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Use gevent or eventlet if available, fallback to threading
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')

# Load OpenCV Haar Cascades
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

# Session management
sessions = {}

class AntiCheatSession:
    def __init__(self, user_id):
        self.user_id = user_id
        self.score = 0
        self.threshold = 20
        self.last_face_time = time.time()
        self.violations = []
        self.terminated = False
        self.looking_away_count = 0

    def add_violation(self, reason, points):
        if self.terminated:
            return
        self.score += points
        self.violations.append({"reason": reason, "points": points, "timestamp": time.time()})
        print(f"Violation [{self.user_id}]: {reason} (+{points}) | Total Score: {self.score}")
        
        emit('violation_update', {
            'reason': reason,
            'score': self.score,
            'points_added': points
        })

        if self.score >= self.threshold:
            self.terminated = True
            emit('terminate_test', {'reason': 'Threshold exceeded'})

@socketio.on('connect')
def handle_connect():
    print("Client connected")

@socketio.on('start_session')
def handle_start_session(data):
    user_id = data.get('userId', 'anonymous')
    sessions[request.sid] = AntiCheatSession(user_id)
    print(f"Session started for user: {user_id}")

@socketio.on('process_frame')
def handle_process_frame(data):
    sid = request.sid
    if sid not in sessions or sessions[sid].terminated:
        return

    session = sessions[sid]
    
    try:
        # Decode base64 image
        encoded_data = data['frame'].split(',')[1]
        nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if frame is None:
            return

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # 1. Face Detection
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)
        face_count = len(faces)

        if face_count == 0:
            # Let's be more lenient: increment score only after 10s of absence
            if time.time() - session.last_face_time > 10:
                session.add_violation("No face detected for > 10s", 5)
                session.last_face_time = time.time() 
        elif face_count > 1:
            session.add_violation(f"Multiple faces detected ({face_count})", 10)
        else:
            session.last_face_time = time.time()
            (x, y, w, h) = faces[0]
            roi_gray = gray[y:y+h, x:x+w]
            
            # 2. Faster Gaze Check
            # penalty: 5 points. trigger after ~2s (10 frames at 5 FPS)
            eyes = eye_cascade.detectMultiScale(roi_gray)
            if len(eyes) < 1: 
                session.looking_away_count += 1
                if session.looking_away_count > 10: 
                    session.add_violation("Looking away from screen", 5)
                    session.looking_away_count = 0
            else:
                session.looking_away_count = 0

    except Exception as e:
        print(f"Error processing frame: {e}")

@socketio.on('report_tab_event')
def handle_tab_event(data):
    sid = request.sid
    if sid in sessions:
        session = sessions[sid]
        reason = data.get('reason', 'tab_switch')
        session.add_violation(f"Focus lost: {reason}", 5)

@socketio.on('disconnect')
def handle_disconnect():
    if request.sid in sessions:
        del sessions[request.sid]
    print("Client disconnected")

if __name__ == '__main__':
    # Use port 5001 to avoid common conflicts
    socketio.run(app, host='0.0.0.0', port=5001, debug=True, use_reloader=False, allow_unsafe_werkzeug=True)
