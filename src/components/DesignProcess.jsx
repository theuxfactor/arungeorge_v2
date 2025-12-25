import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DesignProcess = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    const steps = [
        {
            id: 1,
            title: "DISCOVERY",
            icon: "🔍",
            details: ["Analyze existing resources", "Determine top intents & use cases"],
            color: "from-blue-600 to-indigo-600"
        },
        {
            id: 2,
            title: "HIGH-LEVEL DESIGN",
            icon: "📝",
            details: ["Create design variations", "Build interactive prototypes"],
            color: "from-teal-500 to-emerald-600"
        },
        {
            id: 3,
            title: "USABILITY TESTING",
            icon: "⚗️",
            details: ["Test assumptions", "Iterate high-level designs"],
            color: "from-orange-500 to-amber-600"
        },
        {
            id: 4,
            title: "PRODUCTION",
            icon: "🛠️",
            details: ["Generate production assets", "Prepare for deployment"],
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 5,
            title: "STABILIZATION",
            icon: "📈",
            details: ["Real-time monitoring", "Identify improvements"],
            color: "from-rose-500 to-red-600"
        },
        {
            id: 6,
            title: "OPTIMIZATION",
            icon: "🚀",
            details: ["Continuous optimization", "Performance refinement"],
            color: "from-cyan-500 to-blue-500"
        }
    ];

    const getStepPosition = (index) => {
        const radiusX = 380; // Wider horizontally
        const radiusY = 280; // Shorter vertically
        const angle = (index * 60 - 90) * (Math.PI / 180);
        return {
            x: 400 + radiusX * Math.cos(angle),
            y: 400 + radiusY * Math.sin(angle),
            left: `calc(50% + ${radiusX * Math.cos(angle)}px)`,
            top: `calc(50% + ${radiusY * Math.sin(angle)}px)`
        };
    };

    return (
        <section id="process" className="scroll-mt-32 mb-32 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                Design Process
            </h2>

            {/* Desktop Circular Layout */}
            <div className="hidden md:flex relative h-[800px] w-full max-w-[800px] mx-auto items-center justify-center">

                {/* Rotating Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="w-[500px] h-[500px] rounded-full border border-violet-500/10 border-dashed"
                    ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[650px] h-[650px] rounded-full border border-slate-700/20"
                    ></motion.div>
                </div>

                {/* SVG Connectors Layer */}
                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0">
                    <AnimatePresence>
                        {hoveredStep !== null && (
                            <motion.line
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                x1="400"
                                y1="400"
                                x2={getStepPosition(hoveredStep).x}
                                y2={getStepPosition(hoveredStep).y}
                                stroke="#8b5cf6"
                                strokeOpacity="0.5"
                                strokeWidth="2"
                                strokeDasharray="5 5"
                            />
                        )}
                    </AnimatePresence>
                </svg>

                {/* Center Core */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-10 w-48 h-48 rounded-full bg-[#020617] border border-violet-500/30 shadow-[0_0_100px_rgba(139,92,246,0.2)] flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm"
                >
                    <span className="text-4xl mb-2">⚡</span>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AGENTS</h3>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Continuous Cycle</p>
                </motion.div>

                {/* Steps */}
                <div className="absolute inset-0 w-full h-full">
                    {steps.map((step, index) => {
                        const pos = getStepPosition(index);
                        const isHovered = hoveredStep === index;
                        const isDimmed = hoveredStep !== null && hoveredStep !== index;

                        return (
                            <motion.div
                                key={step.id}
                                style={{ left: pos.left, top: pos.top }}
                                animate={{
                                    y: isHovered ? -10 : [-5, 5, -5],
                                    scale: isHovered ? 1.1 : 1,
                                    opacity: isDimmed ? 0.3 : 1,
                                    filter: isDimmed ? "blur(2px)" : "blur(0px)",
                                }}
                                transition={{
                                    y: {
                                        duration: isHovered ? 0.3 : 4,
                                        repeat: isHovered ? 0 : Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5 // Offset floating animation
                                    },
                                    scale: { duration: 0.3 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute w-72 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                                onMouseEnter={() => setHoveredStep(index)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                <div className={`
                                    glass-panel p-6 rounded-2xl relative overflow-hidden transition-colors duration-300
                                    ${isHovered ? 'border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'border-white/5 hover:border-white/10'}
                                    bg-[#020617]/90
                                `}>
                                    {/* Watermark Number */}
                                    <div className="absolute -right-2 -bottom-6 text-9xl font-bold text-white/5 pointer-events-none select-none">
                                        0{step.id}
                                    </div>

                                    {/* Background Gradient */}
                                    <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-full blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-30' : ''}`}></div>

                                    <div className="relative z-10 text-center">
                                        <div className={`
                                            w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto transition-colors duration-300
                                            ${isHovered ? 'bg-violet-500/20 text-white' : 'bg-white/5 text-slate-400'}
                                        `}>
                                            {step.icon}
                                        </div>

                                        <h3 className={`text-lg font-bold mb-3 tracking-wide transition-colors ${isHovered ? 'text-white' : 'text-slate-200'}`}>
                                            {step.title}
                                        </h3>

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
                        );
                    })}
                </div>
            </div>

            {/* Mobile Vertical Layout - Connected Timeline */}
            <div className="md:hidden relative z-10 pl-8">
                {/* Vertical Line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500/0 via-violet-500/50 to-violet-500/0"></div>

                <div className="grid grid-cols-1 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[37px] top-6 w-4 h-4 rounded-full bg-[#020617] border-2 border-violet-500 z-10">
                                <div className="absolute inset-0 bg-violet-500/50 rounded-full animate-ping"></div>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border-l-4 border-l-violet-500/50">
                                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-full`}></div>

                                <div className="absolute right-4 top-4 text-4xl font-bold text-white/5">0{step.id}</div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-2xl">{step.icon}</div>
                                        <h3 className="text-lg font-bold text-white tracking-wide">{step.title}</h3>
                                    </div>

                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-violet-500/50 rounded-full"></span>
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
        </section>
    );
};

export default DesignProcess;
