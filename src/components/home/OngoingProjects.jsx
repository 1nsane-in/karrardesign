import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const OngoingProjects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [activeProject, setActiveProject] = useState(0);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    const ongoingProjects = [
        {
            id: "01",
            title: "Emirates Hills Villa",
            client: "Private Residence",
            location: "Emirates Hills, Dubai",
            startDate: "Jan 2024",
            expectedCompletion: "Mar 2025",
            progress: 75,
            phase: "Interior Installation",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop",
            budget: "$2.5M",
            area: "8,500 sq ft",
            team: "12 specialists",
            milestones: [
                { name: "Design Approval", status: "completed", date: "Feb 2024" },
                { name: "Structural Work", status: "completed", date: "Jun 2024" },
                { name: "MEP Installation", status: "completed", date: "Oct 2024" },
                { name: "Interior Fit-out", status: "active", date: "Jan 2025" },
                { name: "Final Handover", status: "pending", date: "Mar 2025" }
            ]
        },
        {
            id: "02",
            title: "Luxury Hotel Suites",
            client: "Hospitality Group",
            location: "Palm Jumeirah, Dubai",
            startDate: "Mar 2024",
            expectedCompletion: "Aug 2025",
            progress: 45,
            phase: "MEP & Structural",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
            budget: "$8.2M",
            area: "25,000 sq ft",
            team: "28 specialists",
            milestones: [
                { name: "Design Approval", status: "completed", date: "Apr 2024" },
                { name: "Structural Work", status: "active", date: "Nov 2024" },
                { name: "MEP Installation", status: "pending", date: "Feb 2025" },
                { name: "Interior Fit-out", status: "pending", date: "May 2025" },
                { name: "Final Handover", status: "pending", date: "Aug 2025" }
            ]
        },
        {
            id: "03",
            title: "Corporate Office Tower",
            client: "Tech Corporation",
            location: "DIFC, Dubai",
            startDate: "Aug 2024",
            expectedCompletion: "Dec 2025",
            progress: 25,
            phase: "Design Development",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            budget: "$12.8M",
            area: "65,000 sq ft",
            team: "35 specialists",
            milestones: [
                { name: "Design Approval", status: "active", date: "Dec 2024" },
                { name: "Structural Work", status: "pending", date: "Mar 2025" },
                { name: "MEP Installation", status: "pending", date: "Jul 2025" },
                { name: "Interior Fit-out", status: "pending", date: "Oct 2025" },
                { name: "Final Handover", status: "pending", date: "Dec 2025" }
            ]
        }
    ];

    const currentProject = ongoingProjects[activeProject];

    return (
        <section ref={containerRef} className="relative py-20 bg-white overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-px bg-[#ffb400]" />
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">In Progress</span>
                        <div className="w-12 h-px bg-[#ffb400]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-tan-pearl text-zinc-800 leading-tight"
                    >
                        Current
                        <br />
                        <span className="text-[#ffb400]">Projects</span>
                    </motion.h2>
                </div>

                {/* Project Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {ongoingProjects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => setActiveProject(index)}
                            className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeProject === index
                                    ? 'bg-[#ffb400] text-black'
                                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                                }`}
                        >
                            <span className="text-sm font-medium">{project.title}</span>
                        </button>
                    ))}
                </div>

                {/* Main Project Display */}
                <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-12 items-start"
                >
                    {/* Project Image & Stats */}
                    <div className="space-y-6">
                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="text-3xl font-tan-pearl mb-2">{currentProject.id}</div>
                                <div className="text-sm bg-[#ffb400] text-black px-3 py-1 rounded-full inline-block">
                                    {currentProject.phase}
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-50 p-4 rounded-lg">
                                <div className="text-xs text-zinc-500 mb-1">Budget</div>
                                <div className="text-lg font-semibold text-zinc-800">{currentProject.budget}</div>
                            </div>
                            <div className="bg-zinc-50 p-4 rounded-lg">
                                <div className="text-xs text-zinc-500 mb-1">Area</div>
                                <div className="text-lg font-semibold text-zinc-800">{currentProject.area}</div>
                            </div>
                            <div className="bg-zinc-50 p-4 rounded-lg">
                                <div className="text-xs text-zinc-500 mb-1">Team</div>
                                <div className="text-lg font-semibold text-zinc-800">{currentProject.team}</div>
                            </div>
                            <div className="bg-zinc-50 p-4 rounded-lg">
                                <div className="text-xs text-zinc-500 mb-1">Location</div>
                                <div className="text-sm font-medium text-zinc-800">{currentProject.location}</div>
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-8">
                        {/* Project Info */}
                        <div>
                            <h3 className="text-3xl font-tan-pearl text-zinc-800 mb-4">
                                {currentProject.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-zinc-600 mb-6">
                                <span>Client: {currentProject.client}</span>
                                <span>•</span>
                                <span>Started: {currentProject.startDate}</span>
                                <span>•</span>
                                <span>Expected: {currentProject.expectedCompletion}</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-medium text-zinc-700">Overall Progress</span>
                                <span className="text-sm font-bold text-[#ffb400]">{currentProject.progress}%</span>
                            </div>
                            <div className="w-full bg-zinc-200 rounded-full h-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${currentProject.progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="bg-gradient-to-r from-[#ffb400] to-yellow-500 h-3 rounded-full relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Milestones */}
                        <div>
                            <h4 className="text-lg font-semibold text-zinc-800 mb-4">Project Milestones</h4>
                            <div className="space-y-3">
                                {currentProject.milestones.map((milestone, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className={`w-3 h-3 rounded-full ${milestone.status === 'completed' ? 'bg-green-500' :
                                                milestone.status === 'active' ? 'bg-[#ffb400]' : 'bg-zinc-300'
                                            }`} />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <span className={`font-medium ${milestone.status === 'active' ? 'text-[#ffb400]' : 'text-zinc-700'
                                                    }`}>
                                                    {milestone.name}
                                                </span>
                                                <span className="text-sm text-zinc-500">{milestone.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Live Updates */}
                        <div className="bg-zinc-50 p-6 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-zinc-700">Live Updates</span>
                            </div>
                            <p className="text-sm text-zinc-600">
                                Current phase: <strong>{currentProject.phase}</strong>. Team is working on schedule with quality standards maintained.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-32 right-16 w-px h-24 bg-gradient-to-b from-transparent via-[#ffb400]/40 to-transparent hidden lg:block" />
            <div className="absolute bottom-32 left-16 w-px h-32 bg-gradient-to-t from-transparent via-zinc-400/30 to-transparent hidden lg:block" />
        </section>
    );
};

export default OngoingProjects;