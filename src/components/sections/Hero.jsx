import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiExternalLink,
} from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { personalInfo, projectsData } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/helpers';

export const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const mainProject = projectsData[0];

  useEffect(() => {
    const fullRole = personalInfo.typingRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullRole.substring(0, displayedText.length + 1));
        if (displayedText.length === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient light orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/70 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-300 mb-6 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <span className="text-teal-300 font-semibold">Available for Full Stack / MERN Roles</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400 font-mono text-xs">GATE 2026 Qualified</span>
          </motion.div>

          {/* Main Title & Typing Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-4xl"
          >
            <p className="text-slate-400 text-base sm:text-lg font-medium tracking-wide">
              Hello, I'm <span className="text-white font-bold">{personalInfo.name}</span> 👋
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Full-Stack Engineering as a{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">
                {displayedText}
              </span>
              <span className="inline-block w-1 h-8 sm:h-12 ml-1 bg-teal-400 animate-pulse align-middle" />
            </h1>

            <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg sm:leading-relaxed font-normal pt-2">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore Featured Projects</span>
              <FiArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-teal-500/50 font-semibold text-sm transition-all duration-200 backdrop-blur-md shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <FiDownload className="w-4 h-4 text-teal-400 stroke-[2.2]" />
              <span>View &amp; Download Resume</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-4 mt-7"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
              Profiles:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-teal-500/15 text-slate-300 hover:text-teal-400 border border-slate-800 hover:border-teal-500/40 text-xs font-semibold transition-all shadow-sm"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-teal-500/15 text-slate-300 hover:text-teal-400 border border-slate-800 hover:border-teal-500/40 text-xs font-semibold transition-all shadow-sm"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-teal-500/15 text-slate-300 hover:text-teal-400 border border-slate-800 hover:border-teal-500/40 transition-all shadow-sm"
                aria-label="Email Me"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Hero Spotlight on Pathology Management System */}
          {mainProject && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 w-full max-w-3xl p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-teal-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold text-lg shrink-0">
                  🏥
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-bold">
                      Main Featured Project
                    </span>
                    <span className="text-xs text-slate-400">• Live on Vercel</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    {mainProject.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    {mainProject.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={mainProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700"
                >
                  GitHub
                </a>
                <a
                  href={mainProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Live App</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}

          {/* MERN Tech Stack Ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 w-full max-w-4xl pt-8 border-t border-slate-800/60"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">
              Core MERN Stack
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="group p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-300 flex flex-col items-center gap-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <SiMongodb className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-slate-200">MongoDB</span>
                <span className="text-[11px] text-slate-400 font-mono">NoSQL &amp; Compass</span>
              </div>

              <div className="group p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-500/50 backdrop-blur-md transition-all duration-300 flex flex-col items-center gap-2">
                <div className="p-2.5 rounded-xl bg-slate-700/30 text-white group-hover:scale-110 transition-transform">
                  <SiExpress className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-slate-200">Express.js</span>
                <span className="text-[11px] text-slate-400 font-mono">RESTful APIs</span>
              </div>

              <div className="group p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 flex flex-col items-center gap-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <FaReact className="w-6 h-6 animate-spin-slow" />
                </div>
                <span className="font-bold text-sm text-slate-200">React.js</span>
                <span className="text-[11px] text-slate-400 font-mono">Frontend &amp; Hooks</span>
              </div>

              <div className="group p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-green-500/50 backdrop-blur-md transition-all duration-300 flex flex-col items-center gap-2">
                <div className="p-2.5 rounded-xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                  <FaNodeJs className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm text-slate-200">Node.js</span>
                <span className="text-[11px] text-slate-400 font-mono">Backend Runtime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
