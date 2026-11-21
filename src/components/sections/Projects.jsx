import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiLayers, FiMaximize2, FiUserCheck } from 'react-icons/fi';
import { projectsData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

export const Projects = ({ onSelectProject }) => {
  const [mainProject, secondProject] = projectsData;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Featured Engineering"
          title="Production Full-Stack"
          highlight="MERN Projects"
          subtitle="Real-world, fully designed, and implemented web applications showcasing complete database design, RESTful APIs, authentication, and responsive interfaces."
        />

        <div className="space-y-12">
          {/* Main Featured Project: Pathology Management System */}
          {mainProject && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-slate-900/80 border border-teal-500/40 backdrop-blur-md overflow-hidden shadow-2xl shadow-teal-500/10 transition-all hover:border-teal-400/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual / Screenshot Column */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-950 overflow-hidden">
                  <img
                    src={mainProject.image}
                    alt={mainProject.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500 text-slate-950 shadow-md">
                      MAIN FEATURED PROJECT
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-950/80 text-teal-300 border border-teal-500/40 backdrop-blur-md">
                      Live on Vercel
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                      Full-Stack Diagnostic &amp; Healthcare Platform
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      {mainProject.title}
                    </h3>
                    <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {mainProject.description}
                    </p>

                    {/* Developer Role Box */}
                    <div className="mt-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5">
                      <FiUserCheck className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <div className="text-xs text-slate-300">
                        <strong className="text-teal-300">My Role:</strong> {mainProject.role}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mt-5 space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Core System Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {mainProject.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <FiCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {mainProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-teal-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectProject(mainProject)}
                      className="text-xs font-semibold text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>Inspect Details &amp; Architecture</span>
                      <FiMaximize2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={mainProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={mainProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md shadow-teal-500/25 hover:scale-[1.02]"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Second Highlighted Project: Krishi Connect */}
          {secondProject && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md overflow-hidden transition-all shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual / Screenshot Column */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-950 overflow-hidden">
                  <img
                    src={secondProject.image}
                    alt={secondProject.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 text-teal-300 border border-teal-500/40 backdrop-blur-md">
                      FEATURED FULL-STACK
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                      Smart Agriculture &amp; Marketplace
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      {secondProject.title}
                    </h3>
                    <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {secondProject.description}
                    </p>

                    {/* Developer Role Box */}
                    <div className="mt-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5">
                      <FiUserCheck className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <div className="text-xs text-slate-300">
                        <strong className="text-teal-300">My Role:</strong> {secondProject.role}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mt-5 space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Core System Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {secondProject.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <FiCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {secondProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-teal-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectProject(secondProject)}
                      className="text-xs font-semibold text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>Inspect Details &amp; Architecture</span>
                      <FiMaximize2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={secondProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>Source Code on GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
