import { motion } from 'framer-motion';

const DesignProcess = () => {
    return (
        <section id="process" className="scroll-mt-32 mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                Design Process
            </h2>

            <div className="glass-panel p-8 md:p-12 rounded-3xl overflow-hidden relative">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10 py-12">

                    {/* Phase 1: Discovery */}
                    <div className="relative w-64 h-64 flex-shrink-0">
                        <motion.div
                            initial={{ scale: 0, rotate: 0, opacity: 0 }}
                            whileInView={{ scale: 1, rotate: 45, opacity: 1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl shadow-2xl shadow-blue-900/50 flex items-center justify-center"
                        >
                            <div className="transform -rotate-45 text-center p-6 text-white drop-shadow-md">
                                <h3 className="text-2xl font-black mb-4 tracking-wide shadow-black/20">DISCOVERY</h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-3xl mb-3 drop-shadow-sm">🔍</span>
                                        <p className="text-base font-bold leading-snug text-white drop-shadow-sm">Determine top intents & use cases</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Outward arrows decoration would go here */}
                    </div>

                    {/* Bridge: High Level Design */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative z-20 flex-shrink-0 w-44 flex flex-col items-center justify-center -my-4 md:my-0 md:-mx-8"
                    >
                        <div className="bg-teal-600 text-white text-sm font-black py-3 px-6 rounded-xl shadow-xl relative z-20 text-center uppercase tracking-wider border border-teal-400/30">
                            High-Level Design
                        </div>
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-teal-600/30 -z-10"></div>
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-teal-400 text-2xl font-black mt-2 drop-shadow-sm"
                        >
                            ↑
                        </motion.div>
                        <p className="text-xs font-bold text-slate-300 text-center mt-2 w-36 leading-tight">Create variations & prototypes</p>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-teal-400 text-2xl font-black mb-2 order-first drop-shadow-sm"
                        >
                            ↓
                        </motion.div>
                    </motion.div>

                    {/* Phase 2: Usability Testing */}
                    <div className="relative w-72 h-72 flex-shrink-0">
                        <motion.div
                            initial={{ scale: 0, rotate: 0, opacity: 0 }}
                            whileInView={{ scale: 1, rotate: 45, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl shadow-2xl shadow-orange-900/50 flex items-center justify-center"
                        >
                            <div className="transform -rotate-45 text-center p-6 text-white max-w-[14rem] drop-shadow-md">
                                <h3 className="text-xl font-black mb-3 leading-tight tracking-wide shadow-black/20">USABILITY TESTING & PRODUCTION</h3>
                                <hr className="border-white/40 w-16 mx-auto my-3 border-2 rounded-full" />
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl drop-shadow-sm">⚗️</span>
                                        <p className="text-left font-bold leading-tight text-white drop-shadow-sm">Test assumptions & iterate</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl drop-shadow-sm">⚙️</span>
                                        <p className="text-left font-bold leading-tight text-white drop-shadow-sm">Generate production level work</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Arrow to Stabilization */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="hidden md:block text-orange-400 text-4xl font-black -ml-4 mr-0 relative z-20"
                    >→</motion.div>

                    {/* Phase 3: Stabilization Loop */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -90 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-56 h-56 flex-shrink-0"
                    >
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-500 border-r-orange-500/50 border-b-orange-500/20 border-l-orange-500/80 animate-spin-slow shadow-lg shadow-orange-900/20"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-orange-400 font-black mb-2 text-base tracking-wide">STABILIZATION</h3>
                            <div className="bg-orange-500/20 p-3 rounded-xl mb-2 backdrop-blur-sm border border-orange-500/30">
                                <span className="text-3xl">📈</span>
                            </div>
                            <p className="text-white text-sm font-bold mb-2 shadow-black/50 drop-shadow-md">Monitor in real-time</p>
                            <h3 className="text-orange-400 font-black mt-2 text-base tracking-wide">OPTIMIZATION</h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
