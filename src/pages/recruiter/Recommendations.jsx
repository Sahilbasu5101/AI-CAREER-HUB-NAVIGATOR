import { Sparkles, X, Check, Bookmark, MoreHorizontal, Mail, Video, ChevronDown } from 'lucide-react';

const Recommendations = () => {
    return (
        <div className="w-full flex-1 max-w-[1400px] mx-auto px-8 pt-10 pb-32 font-display relative">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
                
                {/* Left Column: Filters (No background, sits right on layout) */}
                <div className="flex flex-col gap-10">
                    
                    {/* Match Score */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[12px] font-[800] text-slate-400 tracking-widest uppercase">Match Score</h3>
                            <span className="text-[14px] font-[900] text-[#3b28cc]">70% - 100%</span>
                        </div>
                        <div className="relative w-full h-[6px] bg-slate-200 rounded-full mt-4">
                            {/* Active track */}
                            <div className="absolute left-[70%] right-[0%] h-full bg-[#3b28cc] rounded-full"></div>
                            {/* Thumbs */}
                            <div className="absolute left-[70%] top-1/2 -translate-y-1/2 -translate-x-1/2 size-[14px] bg-[#3b28cc] rounded-full shadow-md border-2 border-white cursor-pointer"></div>
                            <div className="absolute left-[100%] top-1/2 -translate-y-1/2 -translate-x-1/2 size-[14px] bg-[#3b28cc] rounded-full shadow-md border-2 border-white cursor-pointer"></div>
                        </div>
                        <div className="flex justify-between mt-3 text-[11px] font-[800] text-slate-400">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                        </div>
                    </div>

                    {/* Required Skills */}
                    <div>
                        <h3 className="text-[12px] font-[800] text-slate-400 tracking-widest uppercase mb-4">Required Skills</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {/* Active Skills */}
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0edff] text-[#3b28cc] rounded-[8px] text-[12px] font-[800] cursor-pointer hover:bg-[#e6e2fd] transition-colors">
                                Python <X className="size-3 mt-[1px]" strokeWidth={3} />
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0edff] text-[#3b28cc] rounded-[8px] text-[12px] font-[800] cursor-pointer hover:bg-[#e6e2fd] transition-colors">
                                React <X className="size-3 mt-[1px]" strokeWidth={3} />
                            </span>
                            {/* Inactive Skills */}
                            <span className="px-3 py-1.5 bg-[#f1f5f9] text-slate-600 rounded-[8px] text-[12px] font-[800] cursor-pointer hover:bg-[#e2e8f0] transition-colors">
                                SQL
                            </span>
                            <span className="px-3 py-1.5 bg-[#f1f5f9] text-slate-600 rounded-[8px] text-[12px] font-[800] cursor-pointer hover:bg-[#e2e8f0] transition-colors">
                                Node.js
                            </span>
                        </div>
                    </div>

                    {/* University Tier */}
                    <div>
                        <h3 className="text-[12px] font-[800] text-slate-400 tracking-widest uppercase mb-5">University Tier</h3>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="size-5 rounded-full bg-[#3b28cc] flex items-center justify-center flex-shrink-0">
                                    <Check className="size-3 text-white" strokeWidth={4} />
                                </div>
                                <span className="text-[14.5px] font-[600] text-slate-800">Tier 1 (Ivy League / Elite)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="size-5 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center flex-shrink-0 group-hover:border-slate-400 transition-colors"></div>
                                <span className="text-[14.5px] font-[600] text-slate-600 group-hover:text-slate-800 transition-colors">Tier 2 (Highly Selective)</span>
                            </label>
                        </div>
                    </div>

                    {/* AI Insight Box */}
                    <div className="bg-[#eef0ff] rounded-[20px] p-6 text-[#3b28cc]">
                        <div className="flex items-center gap-2.5 mb-3.5">
                            <Sparkles className="size-[15px] fill-current" strokeWidth={2} />
                            <h4 className="text-[14px] font-[900]">AI Insight</h4>
                        </div>
                        <p className="text-[13px] font-[500] text-[#3b28cc]/80 leading-[1.6]">
                            Recommendations are prioritized based on verified technical skill assessments, real-world project contributions, and top 5% performance in recent coding challenges.
                        </p>
                    </div>

                </div>

                {/* Right Column: Recommendation Cards */}
                <div className="flex flex-col gap-6">
                    
                    {/* Card 1 */}
                    <div className="bg-white rounded-[24px] border border-[#eaedf3] shadow-sm p-8 flex flex-col gap-6">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="size-[64px] rounded-full bg-slate-100 overflow-hidden">
                                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alexandra&backgroundColor=e2e8f0" alt="Alexandra" className="w-full h-full object-cover scale-110 pt-2" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 size-4 bg-[#10b981] rounded-full border-2 border-white"></div>
                                </div>
                                {/* Info */}
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-[22px] font-[900] text-slate-900 tracking-tight leading-tight">Alexandra Chen</h2>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#3b28cc] text-white rounded-full text-[12px] font-[800] leading-none h-[26px]">
                                            <Sparkles className="size-[12px]" strokeWidth={2.5} />
                                            98% Match
                                        </div>
                                    </div>
                                    <p className="text-[14.5px] text-slate-500 font-[500] mt-1">Stanford University • Computer Science</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2.5 py-1 bg-[#fef3c7] text-[#d97706] rounded-md text-[10px] font-[900] uppercase tracking-wider">Hackathon Winner</span>
                                        <span className="px-2.5 py-1 bg-[#dbeafe] text-[#2563eb] rounded-md text-[10px] font-[900] uppercase tracking-wider">Top 1% React</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Actions */}
                            <div className="flex gap-2">
                                <button className="size-10 rounded-full bg-[#f8fafc] hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
                                    <Bookmark className="size-5 fill-slate-400 border-none" strokeWidth={0} />
                                </button>
                                <button className="size-10 rounded-full bg-[#f8fafc] hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
                                    <MoreHorizontal className="size-5" strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* Why Recommended Quote block */}
                        <div className="bg-[#fcfcff] border border-[#ece9ff] rounded-[16px] p-5 flex items-start gap-4">
                            <div className="size-8 rounded-full bg-[#f0edff] text-[#3b28cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Sparkles className="size-4 fill-current" strokeWidth={2} />
                            </div>
                            <p className="text-[14px] text-slate-600 font-[500] leading-relaxed">
                                <strong className="font-[800] text-[#3b28cc]">Why Recommended:</strong> Alexandra outperformed 450+ students in the Advanced Python Challenge and has demonstrated strong full-stack experience through a 6-month open-source contribution to a high-traffic React framework.
                            </p>
                        </div>

                        {/* Info details */}
                        <div className="flex gap-16">
                            <div>
                                <p className="text-[10px] font-[900] text-slate-400 uppercase tracking-widest mb-1.5">Location</p>
                                <p className="text-[14.5px] font-[800] text-slate-900">Palo Alto, CA (Remote)</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-[900] text-slate-400 uppercase tracking-widest mb-1.5">Availability</p>
                                <p className="text-[14.5px] font-[800] text-slate-900">June 2024</p>
                            </div>
                        </div>

                        {/* Buttons bottom */}
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="text-[14.5px] font-[800] text-slate-700 hover:text-slate-900 ml-2">View Full Profile</a>
                            <div className="flex-1"></div>
                            <button className="h-[46px] px-6 bg-[#f8fafc] hover:bg-slate-100 text-slate-900 rounded-[12px] font-[800] text-[14px] flex items-center gap-2.5 transition-colors border border-transparent hover:border-slate-200">
                                <Mail className="size-4" strokeWidth={2.5} />
                                Message
                            </button>
                            <button className="h-[46px] px-6 bg-[#3b28cc] hover:bg-[#3120be] text-white rounded-[12px] font-[800] text-[14px] flex items-center gap-2.5 transition-colors shadow-sm">
                                <Video className="size-4" strokeWidth={2.5} />
                                Invite to Interview
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[24px] border border-[#eaedf3] shadow-sm p-8 flex flex-col gap-6 relative">
                        
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="size-[64px] rounded-full bg-slate-100 overflow-hidden">
                                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Jordan&backgroundColor=0f172a" alt="Jordan" className="w-full h-full object-cover scale-110 pt-2" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 size-4 bg-[#10b981] rounded-full border-2 border-white"></div>
                                </div>
                                {/* Info */}
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-[22px] font-[900] text-slate-900 tracking-tight leading-tight">Jordan Miller</h2>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#f0edff] text-[#3b28cc] rounded-full text-[12px] font-[800] leading-none h-[26px]">
                                            <Sparkles className="size-[12px] fill-[#3b28cc]" strokeWidth={2.5} />
                                            94% Match
                                        </div>
                                    </div>
                                    <p className="text-[14.5px] text-slate-500 font-[500] mt-1">MIT • EE & Computer Science</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2.5 py-1 bg-[#faf5ff] text-[#9333ea] rounded-md text-[10px] font-[900] uppercase tracking-wider">Algorithm Specialist</span>
                                        <span className="px-2.5 py-1 bg-[#ecfdf5] text-[#10b981] rounded-md text-[10px] font-[900] uppercase tracking-wider">Stripe Alumnus</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Actions */}
                            <div className="flex gap-2">
                                <button className="size-10 rounded-full bg-[#f8fafc] hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
                                    <Bookmark className="size-5 fill-slate-400 border-none" strokeWidth={0} />
                                </button>
                                <button className="size-10 rounded-full bg-[#f8fafc] hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
                                    <MoreHorizontal className="size-5" strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* Why Recommended Quote block */}
                        <div className="bg-[#fcfcff] border border-[#ece9ff] rounded-[16px] p-5 flex items-start gap-4">
                            <div className="size-8 rounded-full bg-[#f0edff] text-[#3b28cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Sparkles className="size-4 fill-current" strokeWidth={2} />
                            </div>
                            <p className="text-[14px] text-slate-600 font-[500] leading-relaxed">
                                <strong className="font-[800] text-[#3b28cc]">Why Recommended:</strong> Jordan ranked in the 99th percentile for system design and has practical experience scaling high-load payment infrastructure. Highly proficient in Go and SQL.
                            </p>
                        </div>

                        {/* Info details */}
                        <div className="flex gap-16">
                            <div>
                                <p className="text-[10px] font-[900] text-slate-400 uppercase tracking-widest mb-1.5">Location</p>
                                <p className="text-[14.5px] font-[800] text-slate-900">Cambridge, MA</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-[900] text-slate-400 uppercase tracking-widest mb-1.5">Availability</p>
                                <p className="text-[14.5px] font-[800] text-slate-900">May 2024</p>
                            </div>
                        </div>

                        {/* Buttons bottom */}
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="text-[14.5px] font-[800] text-slate-700 hover:text-slate-900 ml-2">View Full Profile</a>
                            <div className="flex-1"></div>
                            <button className="h-[46px] px-6 bg-[#f8fafc] hover:bg-slate-100 text-slate-900 rounded-[12px] font-[800] text-[14px] flex items-center gap-2.5 transition-colors border border-transparent hover:border-slate-200">
                                <Mail className="size-4" strokeWidth={2.5} />
                                Message
                            </button>
                            <button className="h-[46px] px-6 bg-[#3b28cc] hover:bg-[#3120be] text-white rounded-[12px] font-[800] text-[14px] flex items-center gap-2.5 transition-colors shadow-sm">
                                <Video className="size-4" strokeWidth={2.5} />
                                Invite to Interview
                            </button>
                        </div>
                        
                        {/* Floating Notifications Popover Mock (Attached near Jordan card based on image) */}
                        <div className="absolute bottom-[80px] left-[45%] h-[56px] px-6 bg-[#0f172a] rounded-xl shadow-2xl flex items-center gap-4 text-white z-20 whitespace-nowrap">
                            <Sparkles className="size-4 text-[#8b5cf6] fill-[#8b5cf6]" strokeWidth={0} />
                            <span className="text-[14px] font-[600]">12 new matches based on updated filters.</span>
                            <button className="text-[12px] font-[800] text-slate-400 hover:text-white uppercase tracking-widest ml-4 transition-colors">Dismiss</button>
                        </div>

                    </div>

                    {/* Load More Block */}
                    <button className="mt-4 w-full h-[72px] rounded-[16px] border-2 border-dashed border-[#eaedf3] hover:border-[#ced3e1] bg-[#f8fafc] hover:bg-[#f1f5f9] flex flex-col items-center justify-center transition-all group">
                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-600 font-[800]">
                            <ChevronDown className="size-4" strokeWidth={3} />
                            <span className="text-[15px]">Load 10 More AI Recommendations</span>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Recommendations;
