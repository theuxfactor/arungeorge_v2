import { motion } from 'framer-motion';
import hclLogo from '../assets/logos/hcltech.png';
import microsoftLogo from '../assets/logos/microsoft.png';
import nuanceLogo from '../assets/logos/nuance.png';
import voxgenLogo from '../assets/logos/voxgen.png';
import cgrnetLogo from '../assets/logos/cgrnet.png';
import algoyLogo from '../assets/logos/algoy.png';

const Resume = () => {
    const experiences = [
        {
            company: "HCLTech",
            role: "Senior Conversation Designer",
            period: "Mar 2025 - Present",
            location: "Remote",
            logo: hclLogo,
            description: [
                "NextGen Multi-Agent System: Spearheaded conversation architecture for flagship solution, transitioning from static dialogue flows to dynamic, context-aware orchestration",
                "System Prompt Engineering: Engineered prompts to manage multi-agent handoffs, ensuring consistent brand persona, guardrails, and seamless interaction logic",
                "High-Fidelity Prototyping: Developed functional React prototypes using AI-assisted coding (Vibe Coding) to bridge design concepts and engineering implementation",
                "Agent AI Assist Platform: Directed end-to-end product lifecycle for real-time AI coaching and RAG-based knowledge search capabilities",
                "Strategic Collaboration: Led cross-functional teams of Speech Scientists and Engineers to translate business requirements into technical execution"
            ],
            impact: [
                "Hand-selected to lead the UX/UI and conversation design for a high-visibility, next-generation Agentic platform, orchestrating the seamless integration of autonomous AI agents and real-time support tools for customer representatives.",
                "Leveraged AI-assisted prototyping to transform static designs into fully functional interactive bots, exceeding stakeholder expectations."
            ]
        },
        {
            company: "Microsoft",
            role: "Senior Conversation Designer",
            period: "Aug 2023 - Mar 2025",
            location: "Remote (via acquisition of Nuance Communications)",
            logo: microsoftLogo,
            description: [
                "Trained 50+ designers across multiple time zones on Copilot Studio implementation, resulting in faster onboarding and project delivery",
                "Developed comprehensive training curriculum covering generative actions, NLU optimization, and intent classification",
                "Collaborated with product team to improve platform features",
                "Recruited to work on an internal innovation hub to help with AI Agentic future"
            ],
            impact: "Received Microsoft Key Employee Award for outstanding performance and significant contributions.",
            impactLabel: "Award"
        },
        {
            company: "Nuance Communications",
            role: "Principal Conversation Designer",
            period: "March 2018 - May 2023",
            location: "Remote",
            logo: nuanceLogo,
            description: [
                "Telecom Industry Impact: Redesigned conversation flows for Fortune 100 telecommunications client, achieving 21% reduction in incomprehension rates and 24% decrease in live chat escalations",
                "Platform Innovation: Developed automated design tool using .NET framework, improving team efficiency (tasks reduced from 15 mins to seconds)",
                "Strategic Leadership: Led 100+ intent discovery workshops for Fortune 500 clients across telecommunications, finance, and utilities sectors",
                "Enterprise Implementation: Owned end-to-end dialog strategy for accounts with millions of chat sessions per month"
            ]
        },
        {
            company: "VoxGen",
            role: "Voice UX Consultant",
            period: "June 2015 - March 2018",
            location: "Remote",
            logo: voxgenLogo,
            description: [
                "Pharmacy Industry Impact: Helped secured $2M contract with a major US retail pharmacy by becoming the lead designer and the go-to for all design needs",
                "User Research: Conducted 50+ usability testing sessions using Wizard of Oz research methods (CSAT 4.5, Task Completion 93%)",
                "Cross-functional Collaboration: Partnered with engineering teams across US and UK offices to ensure on-time delivery",
                "Multilingual Design: Led script translation and localization efforts for 3 languages"
            ]
        },
        {
            company: "Algoy",
            role: "Founder / Lead Engineer",
            period: "Feb 2010 - Mar 2013",
            location: "University Project",
            logo: algoyLogo,
            description: [
                "Architected and developed a real-time project networking platform using the CodeIgniter (PHP) framework, enabling users to monitor corporate project pipelines and updates",
                "Managed the full-stack development lifecycle independently while balancing academic responsibilities at the university"
            ]
        },
        {
            company: "CGRNet (Computer Games' Reviews Network)",
            role: "Founder",
            period: "2000 - 2004",
            location: "",
            logo: cgrnetLogo,
            description: [
                "Built and scaled gaming review platform to 10K+ monthly active users (pre-YouTube era) while in school",
                "Developed content strategy and community engagement protocol and managed team of 15 remote contributors"
            ]
        }
    ];

    return (
        <section id="resume" className="scroll-mt-32 mb-32 relative">
            <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
                <span className="w-12 h-1 bg-violet-500 rounded-full"></span>
                Résumé
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-cyan-400/50 to-transparent"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-8 w-4 h-4 rounded-full bg-[#020617] border-2 border-violet-500 z-10 hidden md:block">
                                <div className="absolute inset-0 bg-violet-500/50 rounded-full animate-ping"></div>
                            </div>

                            {/* Timeframe - Desktop */}
                            <div className="hidden md:block w-1/2 pt-6 px-8 text-right">
                                {index % 2 === 0 ? (
                                    <div className="text-left">
                                        <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                                        <div className="text-violet-400 font-medium uppercase tracking-widest text-xs mt-1">{exp.company}</div>
                                    </div>
                                ) : (
                                    <div className="text-right">
                                        <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                                        <div className="text-violet-400 font-medium uppercase tracking-widest text-xs mt-1">{exp.company}</div>
                                    </div>
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-1/2">
                                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden hover:border-violet-500/30 transition-all duration-300 group">
                                    {/* Company Logo/Icon */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 p-2 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="md:hidden">
                                            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                            <p className="text-violet-400 text-xs font-medium uppercase tracking-wider">{exp.company} • {exp.period}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                                                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.impact && (
                                        <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                                            <div className="text-sm italic text-slate-400">
                                                <span className="text-violet-400 font-semibold not-italic mr-2">{exp.impactLabel || "Impact"}:</span>
                                                {Array.isArray(exp.impact) ? (
                                                    exp.impact.map((p, i) => (
                                                        <p key={i} className={i > 0 ? "mt-2" : "inline"}>{p}</p>
                                                    ))
                                                ) : (
                                                    <span>{exp.impact}</span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;
