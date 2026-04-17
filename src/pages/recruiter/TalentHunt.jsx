import { Search, Bell, Settings, Plus, Map, Sparkles, Check, ChevronDown, Eye, Bookmark, ChevronLeft, ChevronRight, SlidersHorizontal, MapPin } from 'lucide-react';

const TalentHunt = () => {
    const candidates = [
        {
            name: "Arjun Sharma",
            uni: "IIT Delhi",
            major: "Computer Science",
            readiness: "94",
            skills: ["PYTHON", "REACT"],
            quote: '"Strong React projects, top 3% in UI challenge. Excellent performance in scalable backend architecture."',
            img: "https://api.dicebear.com/7.x/notionists/svg?seed=Arjun&backgroundColor=f1f5f9"
        },
        {
            name: "Priya Patel",
            uni: "BITS Pilani",
            major: "Data Science",
            readiness: "89",
            skills: ["SQL", "PANDAS"],
            quote: '"Challenge Winner: Global Data Visualization Hackathon. Highly proficient in predictive modeling pipelines."',
            img: "https://api.dicebear.com/7.x/notionists/svg?seed=PriyaP&backgroundColor=f1f5f9"
        },
        {
            name: "Kabir Verma",
            uni: "VIT Vellore",
            major: "Cybersecurity",
            readiness: "91",
            skills: ["GO", "DOCKER"],
            quote: '"Outstanding CTF participant. Specialist in container security and cloud-native infrastructure automation."',
            img: "https://api.dicebear.com/7.x/notionists/svg?seed=KabirV&backgroundColor=f1f5f9"
        }
    ];

    return (
        <div className="w-full flex flex-col font-display text-slate-800 bg-[#f8fafc] min-h-screen relative pb-32">
            
            {/* Top Navigation Bar specific to Talent Hunt */}
            <div className="w-full h-[72px] bg-white border-b border-[#eaedf3] flex items-center justify-between px-8 sticky top-0 z-30 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.02)]">
                <div className="flex items-center gap-3 w-full max-w-[480px]">
                    <Search className="size-5 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search talent, skills, or institutions..." 
                        className="w-full h-10 bg-transparent outline-none text-[14px] font-[500] placeholder:text-slate-400 text-slate-800"
                    />
                </div>
                
                <div className="flex items-center gap-6">
                    <div className="relative cursor-pointer">
                        <Bell className="size-[20px] text-slate-600 hover:text-slate-900 transition-colors" strokeWidth={2.5} />
                        <div className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white translate-x-1/3 -translate-y-1/3"></div>
                    </div>
                    <Settings className="size-[20px] text-slate-600 hover:text-slate-900 transition-colors cursor-pointer" strokeWidth={2.5} />
                    
                    <div className="w-[1px] h-6 bg-slate-200"></div>
                    
                    <button className="h-[40px] px-6 bg-[#3b28cc] hover:bg-[#3120be] text-white rounded-lg text-[13px] font-[800] transition-colors shadow-sm">
                        Post Job
                    </button>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="w-full max-w-[1400px] mx-auto px-8 pt-8 grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
                
                {/* Left Panel: Filters */}
                <div className="xl:col-span-1 flex flex-col gap-6">
                    
                    {/* Primary Filters Card */}
                    <div className="bg-white rounded-[20px] border border-[#eaedf3] p-6 shadow-sm flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[15px] font-[800] text-slate-900 tracking-tight">Filters</h2>
                            <button className="text-[12px] font-[800] text-[#3b28cc] hover:text-[#281b99] uppercase tracking-wider">Reset</button>
                        </div>

                        {/* Readiness Slider */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-[800] text-slate-500 uppercase tracking-widest">Readiness</span>
                                <span className="text-[12px] font-[900] text-[#3b28cc]">80+</span>
                            </div>
                            <div className="w-full h-1 bg-slate-100 rounded-full relative">
                                <div className="absolute left-0 top-0 h-full w-[80%] bg-[#ccd3ff] rounded-full"></div>
                                <div className="absolute left-[80%] top-1/2 -translate-y-1/2 size-4 bg-[#3b28cc] rounded-full shadow-md border-2 border-white flex items-center justify-center cursor-pointer"></div>
                            </div>
                        </div>

                        {/* Target Skills */}
                        <div className="space-y-3">
                            <span className="text-[11px] font-[800] text-slate-500 uppercase tracking-widest">Target Skills</span>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg border border-[#e0ddfc] bg-[#f4f2ff] text-[#3b28cc] text-[11px] font-[800] flex items-center gap-1.5 cursor-pointer">
                                    Python <Plus className="size-3 rotate-45" strokeWidth={3} />
                                </span>
                                <span className="px-3 py-1.5 rounded-lg border border-[#e0ddfc] bg-[#f4f2ff] text-[#3b28cc] text-[11px] font-[800] flex items-center gap-1.5 cursor-pointer">
                                    React <Plus className="size-3 rotate-45" strokeWidth={3} />
                                </span>
                                <button className="px-3 py-1.5 rounded-lg border border-dashed border-slate-300 text-slate-500 hover:text-slate-700 hover:bg-slate-50 text-[11px] font-[800] flex items-center gap-1.5 transition-colors">
                                    <Plus className="size-3" strokeWidth={3} /> Add
                                </button>
                            </div>
                        </div>

                        {/* Work Model */}
                        <div className="space-y-3">
                            <span className="text-[11px] font-[800] text-slate-500 uppercase tracking-widest">Work Model</span>
                            <div className="w-full h-10 px-4 bg-[#f8fafc] rounded-xl flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
                                <span className="text-[13px] font-[600] text-slate-700">Remote First</span>
                                <ChevronDown className="size-4 text-slate-400" />
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="space-y-3">
                            <span className="text-[11px] font-[800] text-slate-500 uppercase tracking-widest">Badges</span>
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="size-[18px] bg-[#3b28cc] rounded-[5px] flex items-center justify-center flex-shrink-0 transition-colors">
                                        <Check className="size-3.5 text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-[13px] font-[500] text-slate-700 group-hover:text-slate-900 transition-colors">Top 5% Performers</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="size-[18px] bg-white border border-slate-300 rounded-[5px] flex items-center justify-center flex-shrink-0 group-hover:border-slate-400 transition-colors"></div>
                                    <span className="text-[13px] font-[500] text-slate-700 group-hover:text-slate-900 transition-colors">Challenge Winners</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    {/* AI Matching Callout */}
                    <div className="bg-[#f2f0ff] rounded-[20px] p-6 border border-[#e5e1fc] shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="size-4 text-[#3b28cc]" strokeWidth={2.5} />
                            <span className="text-[11px] font-[900] text-[#3b28cc] uppercase tracking-widest">AI Matching</span>
                        </div>
                        <p className="text-[13px] font-[500] text-slate-700 leading-relaxed mb-5">
                            <strong className="font-[900] text-slate-900">124 candidates</strong> match your profile since yesterday.
                        </p>
                        <button className="w-full h-10 bg-white border border-white hover:border-[#3b28cc]/20 rounded-xl text-[#3b28cc] text-[12px] font-[800] shadow-sm transition-all hover:shadow-md">
                            Review Matches
                        </button>
                    </div>

                </div>

                {/* Right Panel: Main Candidate Grid */}
                <div className="xl:col-span-3 flex flex-col">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-[24px] font-[900] text-slate-900 tracking-tight leading-tight mb-1">Verified Talent Pool</h1>
                            <p className="text-[14px] text-slate-500 font-[500]">Sourcing from <strong className="font-[800] text-slate-700">1,245 students</strong> globally</p>
                        </div>
                        <div className="h-10 px-4 bg-white border border-[#eaedf3] rounded-xl flex items-center gap-2 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
                            <SlidersHorizontal className="size-[14px] text-slate-400" />
                            <span className="text-[13px] text-slate-600 font-[600]">Sort: <strong className="font-[800] text-[#3b28cc]">Best Match</strong></span>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {candidates.map((cand, i) => (
                            <div key={i} className="bg-white rounded-[24px] p-6 border border-[#eaedf3] shadow-sm flex flex-col hover:shadow-md hover:border-slate-200 transition-all">
                                
                                {/* Top Layout: Avatar and Readiness */}
                                <div className="flex justify-between items-start mb-5">
                                    <div className="relative">
                                        <div className="size-[54px] rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                                            <img src={cand.img} alt={cand.name} className="w-[120%] h-[120%] object-cover pt-2" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 size-5 bg-[#3b28cc] rounded-full border-2 border-white flex items-center justify-center p-[2px]">
                                            <Check className="size-full text-white" strokeWidth={4} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[9px] font-[800] text-slate-400 uppercase tracking-widest mb-0.5">Readiness</span>
                                        <div className="flex items-baseline">
                                            <span className="text-[26px] font-[900] text-slate-900 leading-none">{cand.readiness}</span>
                                            <span className="text-[14px] font-[800] text-slate-400 ml-[1px]">%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Identity */}
                                <h3 className="text-[17px] font-[800] text-slate-900 leading-tight mb-1">{cand.name}</h3>
                                <p className="text-[12px] font-[500] text-slate-500 mb-4">{cand.uni} • {cand.major}</p>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {cand.skills.map((skill, idx) => (
                                        <span key={idx} className="px-2.5 py-1 bg-[#f8fafc] border border-slate-100 rounded-md text-[10px] font-[800] text-slate-600 tracking-wider">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Why Recommended */}
                                <div className="bg-[#fcfcff] border border-[#ece9ff] rounded-[14px] p-4 mb-6 flex-1">
                                    <div className="flex items-center gap-1.5 mb-2.5">
                                        <Sparkles className="size-[12px] text-[#3b28cc]" strokeWidth={2.5} />
                                        <span className="text-[9px] font-[900] text-[#3b28cc] uppercase tracking-widest">Why Recommended</span>
                                    </div>
                                    <p className="text-[11.5px] italic text-slate-600 font-[500] leading-relaxed">
                                        {cand.quote}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 mt-auto">
                                    <button className="flex-1 h-10 bg-[#3b28cc] hover:bg-[#281b99] text-white rounded-xl text-[12.5px] font-[800] transition-colors">
                                        Invite to Interview
                                    </button>
                                    <button className="size-10 bg-[#f8fafc] hover:bg-slate-100 flex items-center justify-center rounded-xl transition-colors flex-shrink-0 text-slate-600 border border-transparent hover:border-slate-200">
                                        <Eye className="size-4" strokeWidth={2.5} />
                                    </button>
                                    <button className="size-10 bg-[#f8fafc] hover:bg-slate-100 flex items-center justify-center rounded-xl transition-colors flex-shrink-0 text-slate-600 border border-transparent hover:border-slate-200">
                                        <Bookmark className="size-4" strokeWidth={2.5} />
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 pt-8 mt-10">
                        <span className="text-[13px] font-[600] text-slate-500 mb-4 sm:mb-0">Showing 1-12 of 1,245 candidates</span>
                        
                        <div className="flex items-center gap-1.5">
                            <button className="size-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                                <ChevronLeft className="size-[14px]" strokeWidth={3} />
                            </button>
                            <button className="size-8 flex items-center justify-center rounded-lg bg-[#3b28cc] text-white text-[13px] font-[800] shadow-sm">1</button>
                            <button className="size-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 text-[13px] font-[800] transition-colors">2</button>
                            <button className="size-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 text-[13px] font-[800] transition-colors">3</button>
                            <span className="size-8 flex items-center justify-center text-slate-400 text-[13px] font-[800]">...</span>
                            <button className="size-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                                <ChevronRight className="size-[14px]" strokeWidth={3} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {/* Floating Action Button */}
            <button className="fixed bottom-10 right-10 h-[52px] px-7 bg-[#0f172a] hover:bg-black text-white rounded-full shadow-xl flex items-center gap-3 z-50 transition-colors group">
                <Map className="size-[18px] text-white/90 group-hover:text-white" strokeWidth={2} />
                <span className="text-[14px] font-[800]">Explore Map View</span>
            </button>

        </div>
    );
};

export default TalentHunt;
