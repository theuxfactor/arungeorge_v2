import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ['Process', 'Resume', 'Projects', 'Articles'];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-xl bg-[#020617]/80 border-b border-white/10"
        >
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
            <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">AG</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-slate-300 hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="https://www.linkedin.com/in/linkarungeorge/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-300 hover:text-violet-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2 bg-[#020617]/95">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    className="block text-slate-300 hover:text-violet-400 px-3 py-3 rounded-md text-base font-medium transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="https://www.linkedin.com/in/linkarungeorge/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                className="block text-slate-300 hover:text-violet-400 px-3 py-3 rounded-md text-base font-medium transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
