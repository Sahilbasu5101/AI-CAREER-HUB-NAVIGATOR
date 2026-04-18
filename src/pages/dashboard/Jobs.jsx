import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, ExternalLink, Calendar, Search, Filter, TrendingUp, Sparkles, Building } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SAMPLE_JOBS = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechNova Solutions",
        location: "San Francisco, CA (Remote)",
        salary: "$40 - $55 / hour",
        type: "Internship",
        posted: "2 days ago",
        logo: "https://logo.clearbit.com/vercel.com", // Example placeholder
        tags: ["React", "TypeScript", "Tailwind CSS"],
        match: 92
    },
    {
        id: 2,
        title: "Junior Backend Engineer",
        company: "Nexus Systems",
        location: "New York, NY (Hybrid)",
        salary: "$90,000 - $110,000",
        type: "Full-time",
        posted: "5 hours ago",
        logo: "https://logo.clearbit.com/stripe.com",
        tags: ["Node.js", "PostgreSQL", "AWS"],
        match: 85
    },
    {
        id: 3,
        title: "Software Engineering Intern - Core Platform",
        company: "QuantumAI",
        location: "Seattle, WA",
        salary: "$8,500 / month",
        type: "Internship",
        posted: "1 day ago",
        logo: "https://logo.clearbit.com/openai.com",
        tags: ["Python", "C++", "Machine Learning"],
        match: 78
    },
    {
        id: 4,
        title: "Data Science Associate",
        company: "Global Insights Corp",
        location: "Remote",
        salary: "$85,000 - $105,000",
        type: "Full-time",
        posted: "3 days ago",
        logo: "https://logo.clearbit.com/spotify.com",
        tags: ["Python", "SQL", "Tableau"],
        match: 65
    }
];

const Jobs = () => {
    const { userData } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex flex-col gap-8 w-full mt-2 font-display pb-10 h-[calc(100vh-140px)] overflow-y-auto no-scrollbar">
            
            {/* Header Section */}
            <section className="flex flex-col gap-6 relative">
                <div className="absolute top-0 right-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="max-w-2xl px-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="size-5 text-blue-600" />
                            <h2 className="text-[14px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">AI Matched Opportunities</h2>
                        </div>
                        <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                            Find Your Next Role.
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mt-2 text-[16px] leading-relaxed">
                            These roles are specifically matched to your skills and <span className="text-slate-900 dark:text-slate-200 font-bold">Readiness Score</span>.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 min-w-[200px]">
                        <div className="size-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0">
                            <TrendingUp className="size-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Top Match</p>
                            <p className="text-[18px] font-black text-slate-900 dark:text-white">92%</p>
                        </div>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="relative z-10 flex flex-col md:flex-row gap-4 mt-2">
                    <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
                        <input 
                            type="text" 
                            placeholder="Search roles, companies, or keywords..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-[56px] pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 transition-all font-medium text-[15px] dark:text-white"
                        />
                    </div>
                    <button className="h-[56px] px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm">
                        <Filter className="size-5" /> Filters
                    </button>
                </div>
            </section>

            {/* Job Listings */}
            <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {SAMPLE_JOBS.map((job) => (
                    <div key={job.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden group">
                        
                        {/* Match Badge */}
                        <div className="absolute top-6 right-6">
                            <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                                <Sparkles className="size-3.5 text-green-600" />
                                <span className="text-[12px] font-black text-green-700 dark:text-green-400">{job.match}% Match</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start mb-6 pr-24">
                            <div className="size-16 rounded-2xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 shadow-sm">
                                <img src={job.logo} alt={job.company} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<Building class="size-8 text-slate-400" />' }} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">{job.title}</h3>
                                <p className="text-[15px] font-semibold text-slate-600 dark:text-slate-400">{job.company}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[13px] font-medium">
                                <MapPin className="size-4 shrink-0 text-slate-400" /> <span className="truncate">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[13px] font-medium">
                                <Briefcase className="size-4 shrink-0 text-slate-400" /> {job.type}
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[13px] font-medium">
                                <DollarSign className="size-4 shrink-0 text-slate-400" /> {job.salary}
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[13px] font-medium">
                                <Calendar className="size-4 shrink-0 text-slate-400" /> {job.posted}
                            </div>
                        </div>

                        <div className="mb-8 flex flex-wrap gap-2">
                            {job.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[12px] font-bold rounded-lg">{tag}</span>
                            ))}
                        </div>

                        <div className="mt-auto grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-[14px] rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                Save Role
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 text-white font-bold text-[14px] rounded-xl hover:bg-blue-700 shadow-sm transition-colors">
                                Apply Now <ExternalLink className="size-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Jobs;
