import { Search, Plus, Trophy, BadgeCheck, Lightbulb, Brain, Terminal, Database } from 'lucide-react';

const RecruiterDashboard = () => {
    
    // Custom Trend Squiggle SVG exactly matching the upward step pattern
    const TrendSquiggle = () => (
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 opacity-80">
            <path d="M1 9.5 L5 9.5 L8 3.5 L12 7.5 L16 3.5 L20 3.5 M20 3.5 L18 1.5 M20 3.5 L18 5.5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const candidateData = [
        { 
            name: "Alex Johnson", 
            uni: "Stanford University", 
            major: "...", 
            tag: "Python Sprint Winner", 
            tagColor: "text-[#d97706] bg-[#fef3c7]", 
            icon: Trophy, 
            iconColor: "#d97706",
            img: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJ&backgroundColor=f8eddb&top=shortHair&hairColor=brown" 
        },
        { 
            name: "Priya Sharma", 
            uni: "IIT Bombay", 
            major: "AI Research Int...", 
            tag: "React Master", 
            tagColor: "text-[#3b28cc] bg-[#f0edff]", 
            icon: BadgeCheck, 
            iconColor: "#3b28cc",
            img: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaS&backgroundColor=e6e6fa&top=longHair&hairColor=black" 
        },
        { 
            name: "Marcus Chen", 
            uni: "MIT", 
            major: "Cybersecurity F...", 
            tag: "Top Hackathon Rank", 
            tagColor: "text-[#059669] bg-[#d1fae5]", 
            icon: Trophy, 
            iconColor: "#059669",
            img: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusC&backgroundColor=d1fae5&top=shortHair&hairColor=black" 
        },
    ];

    const emergingSkills = [
        { name: "PyTorch / ML", growth: "+24% this month", iconColor: "text-[#3b28cc]", bgColor: "bg-[#f0edff]", icon: Brain },
        { name: "Rust", growth: "+18% this month", iconColor: "text-[#ea580c]", bgColor: "bg-[#ffedd5]", icon: Terminal },
        { name: "Vector DBs", growth: "+12% this month", iconColor: "text-[#059669]", bgColor: "bg-[#d1fae5]", icon: Database },
    ];

    const activities = [
        { user: "Alex", action: "topped the", subject: "React Challenge", time: "2 hours ago", ring: "bg-[#e0e7ff]", dot: "bg-[#3b28cc]" },
        { action: "Interview accepted by", subject: "Priya", time: "5 hours ago • Technical Round", ring: "bg-[#d1fae5]", dot: "bg-[#10b981]" },
        { action: "New application:", subject: "Marcus Chen", time: "Yesterday • Cyber Specialist", ring: "bg-[#fef3c7]", dot: "bg-[#f59e0b]" },
        { action: "Vacancy published:", subject: "AI Research Associate", time: "2 days ago", ring: "bg-[#e2e8f0]", dot: "bg-[#94a3b8]" },
    ];

    return (
        <div className="w-full max-w-[1300px] mx-auto pt-10 px-6 md:px-10 pb-20 font-display text-slate-800">
            {/* Header Row */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-[28px] md:text-[32px] font-[900] tracking-tight text-slate-900 leading-tight">Welcome back, Sudhanshu!</h1>
                    <p className="text-[14px] text-slate-500 font-medium mt-1">Latest update on your student recruitment pipeline.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-full sm:w-[320px]">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 size-[18px]" strokeWidth={2.5} />
                        <input 
                            type="text" 
                            placeholder="Search candidates, skills..." 
                            className="w-full h-[52px] pl-[46px] pr-4 fill-slate-50 bg-[#f4f6f8] border border-transparent hover:bg-slate-200/50 focus:bg-white focus:border-[#3b28cc]/20 focus:ring-4 focus:ring-[#3b28cc]/5 rounded-full text-[14.5px] font-[600] transition-all outline-none text-slate-800 placeholder:text-slate-400"
                        />
                    </div>
                    <button className="h-[52px] px-[28px] bg-[#3b28cc] hover:bg-[#3120be] text-white rounded-full flex items-center justify-center font-[800] text-[14.5px] shadow-[0_8px_20px_-6px_rgba(59,40,204,0.3)] transition-all w-full sm:w-auto flex-shrink-0 group">
                        <div className="size-[22px] rounded-full bg-white flex items-center justify-center mr-2.5">
                            <Plus className="size-[14px] text-[#3b28cc]" strokeWidth={4} />
                        </div>
                        Post New Vacancy
                    </button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                    { label: "Active Vacancies", val: "24", trend: "+12%" },
                    { label: "Pipeline Students", val: "1.2k", trend: "+5%" },
                    { label: "Interviews Scheduled", val: "42", trend: "+8%" },
                    { label: "Total Hires", val: "85", trend: "+15%" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-[24px] p-7 border border-[#eaedf3] shadow-[0_4px_24px_-8px_rgba(15,23,42,0.04)]">
                        <h3 className="text-[13px] font-[600] text-slate-500/90 mb-3">{stat.label}</h3>
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-[34px] font-[900] text-slate-900 leading-none">{stat.val}</span>
                            <div className="flex items-center text-[12px] font-[800] text-[#10b981] bg-[#ecfdf5] px-2.5 py-1 rounded-full leading-none -mt-1 shadow-sm shadow-emerald-100/50">
                                {stat.trend}
                                <TrendSquiggle />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Left Column (Takes up 2/3) */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Connect with Talent */}
                    <div className="bg-white rounded-[24px] border border-[#eaedf3] shadow-[0_4px_24px_-8px_rgba(15,23,42,0.04)] overflow-hidden">
                        <div className="px-8 py-6 flex justify-between items-center border-b border-[#eaedf3]">
                            <h2 className="text-[17px] font-[800] text-slate-900 tracking-tight">Connect with Talent</h2>
                            <a href="#" className="text-[13px] font-[800] text-[#3b28cc] hover:underline">View All</a>
                        </div>
                        <div className="flex flex-col">
                            {candidateData.map((cand, i) => {
                                const Icon = cand.icon;
                                return (
                                    <div key={i} className={`px-8 py-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors ${i !== candidateData.length - 1 ? 'border-b border-[#eaedf3]' : ''}`}>
                                        <div className="flex items-center gap-5 flex-1 min-w-0">
                                            <div className="size-[52px] rounded-full overflow-hidden bg-slate-50 flex-shrink-0">
                                                <img src={cand.img} alt={cand.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-[15.5px] font-[800] text-slate-900 leading-tight truncate">{cand.name}</h3>
                                                <p className="text-[13px] font-[500] text-slate-500 mt-1 truncate">{cand.uni} • {cand.major}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto justify-between xl:justify-end">
                                            <div className={`px-3 py-1.5 rounded-[8px] text-[11px] font-[800] flex items-center gap-1.5 ${cand.tagColor}`}>
                                                <Icon size={14} strokeWidth={2.5} color={cand.iconColor} />
                                                {cand.tag}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="h-[38px] px-[22px] bg-white border border-[#e2e8f0] text-slate-700 hover:bg-slate-50 rounded-full text-[13px] font-[800] transition-all">Profile</button>
                                                <button className="h-[38px] px-[24px] bg-[#3b28cc] hover:bg-[#281b99] text-white rounded-full text-[13px] font-[800] transition-all shadow-[0_4px_12px_-4px_rgba(59,40,204,0.4)]">Invite</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Heatmap Mockup */}
                        <div className="bg-white rounded-[24px] border border-[#eaedf3] shadow-[0_4px_24px_-8px_rgba(15,23,42,0.04)] p-7 flex flex-col h-[340px]">
                            <h2 className="text-[16px] font-[800] text-slate-900 mb-6">Skill Availability Heatmap</h2>
                            
                            {/* Graphic Mockup Area */}
                            <div className="flex-1 w-full bg-[#f8fafc] rounded-3xl relative overflow-hidden flex flex-col justify-end border border-slate-100">
                                {/* SVG Plus Grid Background specifically creating plusses instead of simple dots */}
                                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="heatmap-plus-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                                            <path d="M12 9 L12 15 M9 12 L15 12" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#heatmap-plus-grid)" />
                                </svg>
                                
                                {/* Deep Hotspot Glows mimicking geographical tech density */}
                                <div className="absolute left-[30%] top-[40%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-[#6366f1] rounded-full mix-blend-multiply blur-[60px] opacity-[0.25]"></div>
                                <div className="absolute right-[25%] bottom-[35%] w-[140px] h-[140px] bg-[#4338ca] rounded-full mix-blend-multiply blur-[50px] opacity-[0.22]"></div>
                                
                                {/* Regional Map Labels */}
                                <div className="relative z-10 flex justify-between w-full text-[9px] font-[800] text-slate-500 uppercase tracking-widest px-6 pb-5">
                                    <span>North America</span>
                                    <span>Europe</span>
                                    <span>Asia</span>
                                </div>
                            </div>
                            
                            {/* Legend Context */}
                            <div className="flex items-center gap-5 mt-5 text-[12px] font-[700] text-slate-500 px-1">
                                <div className="flex items-center gap-2"><div className="size-3.5 rounded-[3px] bg-[#c7d2fe]"></div> Low</div>
                                <div className="flex items-center gap-2"><div className="size-3.5 rounded-[3px] bg-[#818cf8]"></div> Med</div>
                                <div className="flex items-center gap-2"><div className="size-3.5 rounded-[3px] bg-[#3730a3]"></div> High</div>
                            </div>
                        </div>

                        {/* Top Emerging Skills */}
                        <div className="bg-white rounded-[24px] border border-[#eaedf3] shadow-[0_4px_24px_-8px_rgba(15,23,42,0.04)] p-7 flex flex-col h-[340px]">
                            <h2 className="text-[16px] font-[800] text-slate-900 mb-6">Top Emerging Skills</h2>
                            <div className="flex flex-col gap-4 flex-1 justify-center">
                                {emergingSkills.map((skill, i) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div key={i} className="bg-[#f8fafc] rounded-2xl p-4 flex items-center justify-between gap-4 w-full">
                                            <div className="flex items-center gap-4">
                                                <div className={`size-11 rounded-full ${skill.bgColor} flex items-center justify-center flex-shrink-0`}>
                                                    <Icon size={18} strokeWidth={2.5} className={skill.iconColor} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[14px] font-[800] text-slate-900 leading-tight">{skill.name}</h3>
                                                    <p className="text-[12px] font-[500] text-slate-500 mt-[2px]">{skill.growth}</p>
                                                </div>
                                            </div>
                                            {/* Green upward slanting zigzag exact replica */}
                                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                                <path d="M1 9.5 L5 9.5 L8 3.5 L12 7.5 L16 3.5 L20 3.5 M20 3.5 L18 1.5 M20 3.5 L18 5.5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Takes up 1/3) */}
                <div className="lg:col-span-1 flex flex-col gap-8">
                    
                    {/* Glowing AI Hiring Tip Box */}
                    <div className="bg-[#f2f0ff] border border-[#e5e1fc] rounded-[24px] p-8 text-[#3b28cc] shadow-sm relative overflow-hidden h-fit">
                        <div className="flex items-start gap-4 relative z-10 w-full pr-4">
                            <div className="mt-1 flex-shrink-0 bg-white size-[32px] rounded-full flex items-center justify-center shadow-sm">
                                <Lightbulb className="text-[#3b28cc] size-[18px]" fill="currentColor" strokeWidth={0.5} />
                            </div>
                            <div className="space-y-[6px]">
                                <h3 className="text-[15.5px] font-[800] text-[#3b28cc]">AI Hiring Tip</h3>
                                <p className="text-[13.5px] font-[500] text-[#3b28cc]/90 leading-[1.6]">
                                    "Candidates like <strong>Alex</strong> are most responsive between 4 PM and 6 PM. Try messaging now to increase response rates by 40%."
                                </p>
                            </div>
                        </div>
                        {/* Blob mimicking the image's right-aligned purple glow */}
                        <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#e0d9fc] rounded-full blur-[35px] -translate-y-1/3 translate-x-1/3"></div>
                    </div>

                    {/* Timeline Tracker */}
                    <div className="bg-white rounded-[24px] border border-[#eaedf3] shadow-[0_4px_24px_-8px_rgba(15,23,42,0.04)] p-8 flex flex-col flex-1 pb-10">
                        <h2 className="text-[16px] font-[800] text-slate-900 mb-8">Recent Activity</h2>
                        
                        <div className="relative pl-3 space-y-7 before:absolute before:left-[19.5px] before:top-3 before:bottom-3 before:w-[2px] before:bg-[#f1f5f9] flex-1">
                            {activities.map((act, i) => (
                                <div key={i} className="relative flex items-start gap-6 pt-1">
                                    <div className="absolute left-[-2px] top-[4px] size-[23px] rounded-full bg-white flex items-center justify-center z-10">
                                        <div className={`size-[22px] rounded-full ${act.ring} flex items-center justify-center`}>
                                           <div className={`size-[8px] rounded-full ${act.dot}`}></div>
                                        </div>
                                    </div>
                                    <div className="pl-8 w-full mt-[-2px]">
                                        <p className="text-[13.5px] text-slate-800 leading-snug">
                                            {act.user ? <span className="font-[800] text-slate-900">{act.user} </span> : null}
                                            <span className={!act.subject && !act.user ? "font-[800] text-slate-900" : "font-[400]"}>{act.action}</span>
                                            {act.subject && !act.user ? <span className="font-[800] text-slate-900"> {act.subject}</span> : null}
                                            {act.subject && act.user ? <span className="font-[800] text-[#3b28cc]"> {act.subject}</span> : null}
                                        </p>
                                        <p className="text-[12px] font-[500] text-slate-400 mt-[4px]">{act.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full h-[46px] bg-[#f8fafc] hover:bg-slate-100 text-slate-700 rounded-[14px] font-[800] text-[13px] transition-colors mt-8 shadow-sm">
                            Show All Notifications
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RecruiterDashboard;
