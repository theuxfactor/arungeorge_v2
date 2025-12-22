import { motion } from 'framer-motion';

const SplashIntro = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[var(--color-midnight-950)] text-slate-900 dark:text-white"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent"
        >
          Arun George
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-violet-500 to-cyan-400 w-full mb-6 origin-left rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-xl md:text-3xl font-light text-slate-600 dark:text-slate-300 tracking-wide"
        >
          AI Conversation Design Architect
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashIntro;
