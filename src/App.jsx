import { useState } from 'react';
import { motion } from 'framer-motion';
import SplashIntro from './components/SplashIntro';
import Navbar from './components/Navbar';
import DesignProcessModern from './components/DesignProcessModern';
import articleRagImg from './assets/articles/article-rag.png';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300 overflow-x-hidden selection:bg-violet-500/30">
      {showSplash ? (
        <SplashIntro onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />

          {/* Ambient Background Glow */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          </div>

          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-32">

            {/* Hero Section */}
            <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl -z-10 dark:opacity-40"></div>

              <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
                Orchestrating <br />
                <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-2 block">
                  Intelligent Conversations
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-light">
                I bridge the gap between human intent and artificial intelligence, crafting seamless, empathetic, and effective conversational experiences.
              </p>
            </section>

            {/* About Section */}
            <section id="about" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                About Me
              </h2>
              <div className="glass-panel p-8 rounded-2xl md:p-12 space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-slate-300"
                >
                  I'm currently exploring the shift from intent-based designs to contextually aware designs, along with researching Neural AI Interfaces such as Brain-Computer Interfaces (BCIs).
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-slate-300"
                >
                  I've worked with Fortune 100 companies to build AI-driven chatbots and voice apps @ <a href="https://www.nuance.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Nuance</a>, <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Microsoft</a>, and <a href="https://www.hcltech.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">HCLTech</a>.
                </motion.p>
              </div>
            </section>

            {/* Design Process Section */}
            <DesignProcessModern />

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-cyan-400 rounded-full"></span>
                Selected Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="glass-panel rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className="h-48 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-violet-500/20 group-hover:to-cyan-400/20 transition-colors">
                      <span className="text-violet-500/50 text-4xl font-light">Project Preview</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-violet-400 transition-colors">Project {item}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Brief description of the project and the conversational challenges solved. Highlighting the impact and design thinking.</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Articles Section */}
            <section id="articles" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                Selected Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a
                  href="https://uxplanet.org/ai-made-simple-what-every-conversation-designer-should-know-series-rag-basics-b360ffd667f7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1 block"
                >
                  <div className="h-48 rounded-xl mb-6 overflow-hidden bg-white">
                    <img src={articleRagImg} alt="Simple RAG diagram" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">AI Made Simple – RAG Basics</h3>
                  <p className="text-slate-400 leading-relaxed">As a conversation designer, it's important to understand some of the techniques used to optimize large language models (LLMs). This article helps designers understand RAG.</p>
                </a>
              </div>
            </section>

          </main>
        </>
      )}
    </div>
  );
}

export default App
