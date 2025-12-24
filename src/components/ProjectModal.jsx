import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-violet-500/20 rounded-3xl shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>

                            <div className="p-8 md:p-12">
                                {/* Header */}
                                <div className="mb-8">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                                    {project.tagline && (
                                        <p className="text-xl text-cyan-400 font-light">{project.tagline}</p>
                                    )}
                                </div>

                                {/* Main Description */}
                                <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed mb-12">
                                    <p className="whitespace-pre-line">{project.detailedDescription || project.description}</p>
                                </div>

                                {/* Architecture Section - Only show if data exists */}
                                {project.architecture && (
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span className="p-2 bg-violet-500/20 rounded-lg text-violet-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17a2 2 0 0 1 2 2" /></svg>
                                            </span>
                                            System Architecture: The Agent Trio
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {project.architecture.map((agent, index) => (
                                                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-colors">
                                                    <h4 className="text-lg font-bold text-cyan-400 mb-1">{agent.name}</h4>
                                                    <p className="text-sm text-slate-400 mb-4 font-mono">{agent.role}</p>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Responsibility</span>
                                                            <p className="text-sm text-slate-300">{agent.responsibility}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Key Function</span>
                                                            <p className="text-sm text-slate-300">{agent.keyFunction}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* User Journey Section */}
                                {project.userJourney && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                                            </span>
                                            The User Journey (The "Vibe" Loop)
                                        </h3>
                                        <div className="relative border-l-2 border-violet-500/30 ml-4 space-y-8 pl-8 py-2">
                                            {project.userJourney.map((step, index) => (
                                                <div key={index} className="relative">
                                                    <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-violet-500 border-4 border-[#0f172a]"></span>
                                                    <h4 className="text-lg font-bold text-white mb-1">{step.phase}</h4>
                                                    <p className="text-slate-400">{step.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
