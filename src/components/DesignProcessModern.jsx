import { motion } from 'framer-motion';

const DesignProcessModern = () => {
    const steps = [
        {
            id: 1,
            title: "DISCOVERY",
            icon: "🔍",
            details: ["Determine top intents", "Identify use cases"],
            color: "from-blue-600 to-indigo-600",
            position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" // Top
        },
        {
            id: 2,
            title: "HIGH-LEVEL DESIGN",
            icon: "📝",
            details: ["Create variations", "Build prototypes"],
            color: "from-teal-500 to-emerald-600",
            position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" // Right
        },
        {
            id: 4, // Swapped order for visual flow (stabilization is last)
            title: "STABILIZATION",
            icon: "📈",
            details: ["Monitor metrics", "Optimize in real-time"],
            color: "from-rose-500 to-pink-600",
            position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" // Left
        },
        {
            id: 3,
            title: "USABILITY TESTING",
            icon: "⚗️",
            details: ["Test assumptions", "Iterate & refine"],
            color: "from-orange-500 to-amber-600",
            position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" // Bottom
        }
    ];

    // Re-ordering for the mobile grid view to match logical flow
    const mobileSteps = [
        steps[0], // Discovery
        steps[1], // Design
        steps[3], // Usability (index 3 in original array)
        steps[2]  // Stabilization (index 2 in original array)
    ];

    return (
        <section id="process" className="scroll-mt-32 mb-32 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                Design Process
            </h2>

            {/* Desktop Circular Layout */}
            <div className="hidden md:flex relative h-[800px] items-center justify-center">

                {/* Connecting Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-[500px] h-[500px] rounded-full border border-violet-500/10"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute w-[650px] h-[650px] rounded-full border border-dashed border-slate-700/50"
                    ></motion.div>
                </div>

                {/* Center Core */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute z-10 w-48 h-48 rounded-full bg-[#020617] border border-violet-500/20 shadow-[0_0_100px_rgba(139,92,246,0.15)] flex flex-col items-center justify-center text-center p-4"
                >
                    <span className="text-4xl mb-2">⚡</span>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AGENTS</h3>
                    <p className="text-xs text-slate-400 mt-1">Continuous Cycle</p>
                </motion.div>

                {/* Orbiting Steps */}
                <div className="absolute inset-0 w-[600px] h-[600px] mx-auto my-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`absolute ${step.position} w-72`}
                        >
                            <div className={`
                                glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300
                                hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/20
                                border-t-4 border-t-transparent hover:border-t-violet-400
                                bg-[#020617]/90
                            `}>
                                {/* Background Gradient */}
                                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`}></div>

                                <div className="relative z-10 text-center">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:bg-white/20 transition-colors">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{step.title}</h3>

                                    <ul className="space-y-2 text-left">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="text-sm text-slate-400 flex items-center gap-2 justify-center">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Vertical Layout */}
            <div className="grid grid-cols-1 md:hidden gap-8 relative z-10">
                {mobileSteps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="group"
                    >
                        <div className={`
                                glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300
                                hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/20
                                border-t-4 border-t-transparent hover:border-t-violet-400
                            `}>
                            {/* Background Gradient */}
                            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`}></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-white/20 transition-colors">
                                    {step.icon}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{step.title}</h3>

                                <ul className="space-y-2">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DesignProcessModern;
