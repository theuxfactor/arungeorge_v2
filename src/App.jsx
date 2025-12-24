import { useState } from 'react';
import { motion } from 'framer-motion';
import SplashIntro from './components/SplashIntro';
import Navbar from './components/Navbar';
import DesignProcessModern from './components/DesignProcessModern';
import ProjectModal from './components/ProjectModal';
import articleRagImg from './assets/articles/article-rag.png';
import codaThumbnail from './assets/coda-thumbnail.jpg';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Coda",
      tagline: "Your Music Connoisseur",
      thumbnail: codaThumbnail,
      description: 'Coda is a desktop-native AI agent designed to solve "choice paralysis." Unlike standard streaming apps that trap users in algorithmic filter bubbles, Coda uses a Multi-Agent Architecture to actively hunt for music based on context, mood, and activity (e.g., "Deep work," "Late night driving").',
      detailedDescription: `Coda is a desktop-native AI agent designed to solve "choice paralysis." Unlike standard streaming apps that trap users in algorithmic filter bubbles, Coda uses a Multi-Agent Architecture to actively hunt for music based on context, mood, and activity (e.g., "Deep work," "Late night driving").

It operates on a "Zero-Friction" model: No login is required. Users simply type a natural language request, and Coda delivers immediate, full-track playback (via YouTube) wrapped in a rich layer of cultural context.`,
      architecture: [
        {
          name: "The Orchestrator",
          role: "The Manager",
          responsibility: "It is the only agent that speaks to the user. Its job is to maintain the \"Connoisseur\" persona, manage conversation memory, and enforce safety guardrails.",
          keyFunction: "It parses raw user input (e.g., \"I need to focus\") and delegates tasks to the Analyst. It then synthesizes the final data into a conversational response."
        },
        {
          name: "The Analyst",
          role: "The Hunter",
          responsibility: "It translates abstract \"vibes\" into hard data. It uses a lookup table to convert human feelings into API parameters (e.g., \"Sad Jazz\" → Valence < 0.3 + Minor Key).",
          keyFunction: "It queries external databases (Last.fm/YouTube) to find the specific Track ID and Video URL that matches the request."
        },
        {
          name: "The Storyteller",
          role: "The Historian",
          responsibility: "It ensures Coda isn't just a jukebox, but an expert. Once a track is found, the Storyteller scans metadata to find the \"Narrative Hook\"—trivia, sample history, or production details.",
          keyFunction: "It returns a concise \"Why this matters\" fact (e.g., \"This track was the first to use the TR-808 drum machine\") which the Orchestrator presents to the user."
        }
      ],
      userJourney: [
        {
          phase: "Input",
          description: "User types \"I need a dark synthwave track for coding.\""
        },
        {
          phase: "Orchestrate",
          description: "The Orchestrator validates the intent and extracts keywords (genre: synthwave, mood: dark/focus)."
        },
        {
          phase: "Analyze",
          description: "The Analyst converts this to a query, hits the YouTube API, and retrieves a high-quality video ID."
        },
        {
          phase: "Enrich",
          description: "The Storyteller identifies that this artist is known for sci-fi soundtracks and passes that context along."
        },
        {
          phase: "Output",
          description: "Coda replies: \"I've queued up 'Nightcall'. It's a quintessential synthwave track synonymous with the 'Drive' aesthetic.\" -> Music Card appears and plays automatically."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300 overflow-x-hidden selection:bg-violet-500/30">
      {showSplash ? (
        <SplashIntro onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />

          {/* Ambient Background Glow - Optimized */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
          </div>

          <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-32">

            <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start relative">

              <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
                Orchestrating <br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent pb-2 block">
                  Intelligent Conversations
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
                A Full-Stack Conversation Designer who bridges the gap between concept and code. By leveraging AI-assisted development and deep UX principles, I craft and code intelligent agents that are not just conversational, but operationally effective.
                <br /> <br />
                My expertise is grounded in delivering enterprise-grade chat and voice applications for Fortune 100 clients at <a href="https://www.nuance.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">Nuance</a>, <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">Microsoft</a>, and <a href="https://www.hcltech.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">HCLTech</a>.
              </p>


            </section>



            {/* Design Process Section */}
            <DesignProcessModern />

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                Selected Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="glass-panel rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                  >
                    {project.thumbnail ? (
                      <div className="h-48 rounded-xl mb-6 overflow-hidden">
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-violet-500/20 group-hover:to-cyan-400/20 transition-colors">
                        <span className="text-violet-500/50 text-4xl font-light">Project Preview</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 leading-relaxed line-clamp-3">{project.description}</p>
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

          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </>
      )}
    </div>
  );
}

export default App
