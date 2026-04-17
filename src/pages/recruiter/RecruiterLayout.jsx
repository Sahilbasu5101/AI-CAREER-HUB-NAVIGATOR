import { Outlet } from 'react-router-dom';
import RecruiterSidebar from '../../components/recruiter/RecruiterSidebar';

const RecruiterLayout = () => {
    return (
        <div className="flex bg-[#F8FAFC] min-h-screen w-full font-display text-slate-800 overflow-x-hidden">
            {/* Sidebar Container */}
            <div className="hidden md:block w-[260px] flex-shrink-0">
                <RecruiterSidebar />
            </div>

            {/* Main Content Wrapper */}
            <main className="flex-1 min-w-0 min-h-screen flex flex-col">
                <div className="flex-1 w-full pb-12">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default RecruiterLayout;
