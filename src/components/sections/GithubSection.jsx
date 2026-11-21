import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiFolder, FiCheckCircle } from 'react-icons/fi';
import { githubData, personalInfo } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

export const GithubSection = () => {
  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Open Source & Codebase"
          title="GitHub Repositories &"
          highlight="Code Activity"
          subtitle="Direct links to actual source code repositories, commit histories, and project implementations on GitHub."
        />

        {/* Profile Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 text-3xl shrink-0">
              <FiGithub />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-teal-400">
                @{githubData.username}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Full-Stack MERN &amp; Computer Science Repositories
              </p>
            </div>
          </div>

          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-teal-500/20"
          >
            <FiGithub className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Real Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {githubData.repositories.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md flex flex-col justify-between group transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-sm font-bold">
                    <FiFolder className="w-4 h-4" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                    {repo.tech}
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-teal-400 transition-colors"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  <span>Repository Link</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>

                {repo.liveDemo && (
                  <a
                    href={repo.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-teal-400 hover:underline"
                  >
                    <span>Live App</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Most Used Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <FiCode className="w-4 h-4 text-teal-400" />
              <span>Languages Used in Projects</span>
            </h4>
            <span className="text-xs font-mono text-slate-400">Core Stack</span>
          </div>

          <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-800">
            {githubData.languages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {githubData.languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 text-xs">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="font-medium text-slate-200">{lang.name}</span>
                <span className="text-slate-500 font-mono">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
