import { NavLink } from 'react-router-dom';
import { LayoutDashboard, UserSearch, Sparkles, ChevronsUpDown } from 'lucide-react';

const RecruiterSidebar = () => {
    const links = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/recruiter' },
        { icon: UserSearch, label: 'Talent Hunt', path: '/recruiter/talent-hunt' },
        { icon: Sparkles, label: 'Recommendations', path: '/recruiter/recommendations' },
    ];

    return (
        <aside className="sticky top-0 left-0 h-screen w-full bg-white border-r border-[#f1f5f9] flex flex-col z-40 font-display transition-colors duration-300">
            {/* Logo Area */}
            <div className="p-8 mb-4 flex items-center gap-3 w-full">
                <div className="flex justify-center text-[#3b28cc]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.5C12 2.5 10 4.5 9 6.5C8 8.5 7.5 11 7.5 13.5C7.5 16 8.5 17.5 10 18.5C11.5 19.5 13.5 19.5 15 18.5C16.5 17.5 17.5 16 17.5 13.5C17.5 11 17 8.5 16 6.5C15 4.5 12 2.5 12 2.5Z" fill="currentColor"/>
                        <circle cx="12" cy="11" r="1.5" fill="white"/>
                    </svg>
                </div>
                <h1 className="text-[20px] font-[900] tracking-tight text-slate-900 leading-none">CareerTech</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto w-full text-slate-500">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === '/recruiter'}
                        className={({ isActive }) => `
                            flex items-center gap-4 px-6 py-3.5 rounded-full w-full transition-all duration-300 font-bold
                            ${isActive
                                ? 'bg-[#f4f2ff] text-[#3b28cc]' 
                                : 'hover:bg-slate-50 hover:text-slate-900'
                            }
                        `}
                    >
                        {({ isActive }) => {
                            const Icon = link.icon;
                            return (
                                <>
                                    <Icon className={`size-[20px] ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                                    <span className="text-[14px]">{link.label}</span>
                                </>
                            );
                        }}
                    </NavLink>
                ))}
            </nav>

            {/* Bottom Profile Section */}
            <div className="p-4 border-t border-slate-100 mt-auto mb-2">
                <div className="flex items-center gap-3 px-3 py-2 w-full hover:bg-slate-50 rounded-xl cursor-pointer transition-colors group">
                    <img 
                        src="https://api.dicebear.com/7.x/notionists/svg?seed=Sudhanshu&backgroundColor=eef2ff" 
                        alt="Sudhanshu Profile" 
                        className="size-9 rounded-full bg-[#f4f2ff]"
                    />
                    <div className="flex flex-col flex-1">
                        <span className="text-[13px] font-bold text-slate-900 leading-none">Sudhanshu</span>
                        <span className="text-[11px] font-medium text-slate-500 mt-1.5">Senior Recruiter</span>
                    </div>
                    <ChevronsUpDown className="size-[16px] text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
            </div>
        </aside>
    );
};

export default RecruiterSidebar;
