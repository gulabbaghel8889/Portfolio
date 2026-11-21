import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart, FiCode, FiExternalLink } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/helpers';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    scrollToSection(e, href);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-teal-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md shadow-teal-500/20">
                GB
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Gulab Baghel<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              MERN Stack Developer &amp; Computer Science Engineer. GATE 2026 Qualified and B.Tech CSE (8.27 CGPA) at Bansal College of Engineering, Mandideep. Open to Full-Stack developer opportunities.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-teal-500/20 hover:text-teal-400 border border-slate-700/60 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-teal-500/20 hover:text-teal-400 border border-slate-700/60 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-teal-500/20 hover:text-teal-400 border border-slate-700/60 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Portfolio
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Built With & Status */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Current Status
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">Available For Hire</span>
              </div>
              <p className="text-xs text-slate-400">
                Open to Full-Time MERN Developer opportunities, contracts, and exciting engineering challenges.
              </p>
              <div className="pt-1">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 hover:underline"
                >
                  <span>Official Resume (Google Drive)</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-teal-400 transition-colors pt-1"
            >
              <span>Back to top</span>
              <FiArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>&copy; {currentYear} Gulab Baghel. Designed &amp; Architected with</span>
            <FiHeart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using React, Vite & Tailwind CSS.</span>
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <FiCode className="w-3.5 h-3.5 text-teal-400" />
              <span>Clean Code &amp; Scalable Systems</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
