import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiCheckCircle, FiMail, FiPhone, FiMapPin, FiAward, FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import { triggerConfetti } from '../../utils/confetti';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    triggerConfetti();

    const resumeContent = `GULAB BAGHEL
Role: MERN Stack Developer
Phone: +91 8889579462
Email: gulabbaghel8889@gmail.com
LinkedIn: https://www.linkedin.com/in/gulabbaghel
GitHub: https://github.com/gulabbaghel8889
Location: Mandideep, Bhopal, Madhya Pradesh, India

===================================================================
CAREER OBJECTIVE
===================================================================
Motivated Computer Science Engineering student with expertise in MERN Stack 
(MongoDB, Express.js, React.js, Node.js), JavaScript, and Web Development. 
Seeking an entry-level Full Stack Developer position to contribute to building 
scalable, user-friendly, and high-performance web applications while continuously 
enhancing technical skills.

===================================================================
EDUCATION
===================================================================
• B.Tech - Computer Science & Engineering
  Bansal College of Engineering, Mandideep
  CGPA: 8.27

• Class 12th - MP Board
  Percentage: 87%

• Class 10th - MP Board
  Percentage: 75%

===================================================================
TECHNICAL SKILLS
===================================================================
• Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS
• Backend: Node.js, Express.js
• Database: MongoDB, MySQL, Oracle
• Programming Languages: JavaScript, Java, C++, C
• Tools: Git, GitHub, Postman, MongoDB Compass, VS Code, Vercel, Render
• Concepts: Object Oriented Programming, Data Structures & Algorithms, Operating Systems

===================================================================
PROJECTS
===================================================================
1. Pathology Management System (MAIN FEATURED PROJECT)
   GitHub: https://github.com/gulabbaghel8889/unique-pathology
   Live Demo: https://unique-pathology.vercel.app/
   Description: A full-stack MERN pathology management system designed for 
   handling patient records, diagnostic tests, report generation, and report management.
   Features:
   - Patient Management
   - Diagnostic Test Records
   - Report Generation
   - Authentication & Authorization
   - Admin Dashboard
   - Real-Time Test Status Tracking
   - Responsive Design
   Tech: React.js, Node.js, Express.js, MongoDB
   Role: Designed and developed the complete application including frontend, 
   backend APIs, authentication, and database architecture.

2. Krishi Connect
   GitHub: https://github.com/gulabbaghel8889/KrishiConnect
   Live Demo: https://krishi-connect-iota.vercel.app/
   Description: A full-stack smart agriculture platform connecting farmers, 
   buyers, and agricultural experts.
   Features:
   - Farmer Management
   - Crop Marketplace
   - Market Insights
   - Product Listing
   - Authentication
   - Real-Time Updates
   Tech: React.js, Node.js, Express.js, MongoDB
   Role: Developed frontend, backend APIs, database design, and authentication.

===================================================================
CERTIFICATIONS
===================================================================
• Java Certification - Mind Luster
• Python Certification - Reliance Foundation

===================================================================
ACHIEVEMENTS
===================================================================
• GATE 2026 Qualified (First Attempt)
• State-Level Netball Championship Player
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Gulab_Baghel_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0c1220] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center font-bold text-lg">
                <FiAward className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Gulab Baghel — Official Profile &amp; CV</h3>
                <p className="text-xs text-slate-400">MERN Stack Developer • Bansal College of Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => triggerConfetti()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-teal-500/25 hover:scale-[1.02]"
              >
                <FiExternalLink className="w-4 h-4 stroke-[2.5]" />
                <span>Open Google Drive Resume</span>
              </a>
              <button
                onClick={handleDownload}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors"
                title="Download plain text copy"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>TXT</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm">
            {/* Header info */}
            <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-white">Gulab Baghel</h2>
                <p className="text-teal-400 font-semibold mt-0.5">MERN Stack Developer</p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>github.com/gulabbaghel8889</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/gulabbaghel</span>
                  </a>
                </div>
              </div>

              <div className="text-xs space-y-1.5 text-slate-400 sm:text-right">
                <p className="flex items-center gap-2 sm:justify-end">
                  <FiPhone className="w-3.5 h-3.5 text-teal-400" />
                  <span>+91 8889579462</span>
                </p>
                <p className="flex items-center gap-2 sm:justify-end">
                  <FiMail className="w-3.5 h-3.5 text-teal-400" />
                  <span>gulabbaghel8889@gmail.com</span>
                </p>
                <p className="flex items-center gap-2 sm:justify-end">
                  <FiMapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Mandideep, Bhopal, Madhya Pradesh, India</span>
                </p>
              </div>
            </div>

            {/* Official Google Drive Quick Link Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-transparent border border-teal-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <FiExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Official Google Drive Document</h4>
                  <p className="text-xs text-slate-300">View or download the verified PDF resume directly on Google Drive.</p>
                </div>
              </div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => triggerConfetti()}
                className="shrink-0 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Open in Drive</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Career Objective */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-1.5">
                Career Objective
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.objective}
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-2.5">
                Education
              </h4>
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <h5 className="font-bold text-white text-sm">B.Tech - Computer Science &amp; Engineering</h5>
                    <p className="text-slate-400">Bansal College of Engineering, Mandideep</p>
                  </div>
                  <span className="font-mono text-teal-400 font-bold bg-teal-500/10 px-2.5 py-1 rounded-lg">
                    CGPA: 8.27
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <h5 className="font-bold text-white">Class 12th - MP Board</h5>
                    <p className="text-slate-400">Higher Secondary</p>
                  </div>
                  <span className="font-mono text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">
                    Percentage: 87%
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <h5 className="font-bold text-white">Class 10th - MP Board</h5>
                    <p className="text-slate-400">Secondary School</p>
                  </div>
                  <span className="font-mono text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">
                    Percentage: 75%
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-2.5">
                Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-0.5">Frontend:</span>
                  <span className="text-slate-400">HTML, CSS, JavaScript, React.js, Tailwind CSS</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-0.5">Backend:</span>
                  <span className="text-slate-400">Node.js, Express.js</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-0.5">Database:</span>
                  <span className="text-slate-400">MongoDB, MySQL, Oracle</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-0.5">Programming Languages:</span>
                  <span className="text-slate-400">JavaScript, Java, C++, C</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-0.5">Tools:</span>
                  <span className="text-slate-400">Git, GitHub, Postman, MongoDB Compass, VS Code, Vercel, Render</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-0.5">Concepts:</span>
                  <span className="text-slate-400">Object Oriented Programming, Data Structures &amp; Algorithms, Operating Systems</span>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-2.5">
                Projects
              </h4>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-bold text-white text-sm">1. Pathology Management System (MAIN FEATURED PROJECT)</h5>
                    <div className="flex items-center gap-3 text-xs">
                      <a
                        href="https://github.com/gulabbaghel8889/unique-pathology"
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        GitHub Repo
                      </a>
                      <span>•</span>
                      <a
                        href="https://unique-pathology.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    A full-stack MERN pathology management system designed for handling patient records, diagnostic tests, report generation, and report management.
                  </p>
                  <p className="mt-1 text-xs text-teal-300">
                    <strong>My Role:</strong> Designed and developed the complete application including frontend, backend APIs, authentication, and database architecture.
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    <li>Patient Management &amp; Diagnostic Test Records</li>
                    <li>Report Generation &amp; Real-Time Test Status Tracking</li>
                    <li>Authentication &amp; Authorization with Admin Dashboard</li>
                    <li>Tech Stack: React.js, Node.js, Express.js, MongoDB</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-bold text-white text-sm">2. Krishi Connect</h5>
                    <div className="flex items-center gap-3 text-xs">
                      <a
                        href="https://github.com/gulabbaghel8889/KrishiConnect"
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-400 hover:underline"
                      >
                        GitHub Repo
                      </a>
                      <span>•</span>
                      <a
                        href="https://krishi-connect-iota.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    A full-stack smart agriculture platform connecting farmers, buyers, and agricultural experts.
                  </p>
                  <p className="mt-1 text-xs text-teal-300">
                    <strong>My Role:</strong> Developed frontend, backend APIs, database design, and authentication.
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    <li>Farmer Management &amp; Crop Marketplace</li>
                    <li>Market Insights &amp; Product Listing with Real-Time Updates</li>
                    <li>Authentication &amp; secure state handling</li>
                    <li>Tech Stack: React.js, Node.js, Express.js, MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 mb-1.5">
                  Achievements
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                    <span><strong>GATE 2026 Qualified (First Attempt)</strong></span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                    <span><strong>State-Level Netball Championship Player</strong></span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-teal-400 mb-1.5">
                  Certifications
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                    <span><strong>Java Certification</strong> – Mind Luster</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                    <span><strong>Python Certification</strong> – Reliance Foundation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3 text-xs text-slate-400 shrink-0">
            <span>Gulab Baghel • MERN Stack Developer • CGPA: 8.27</span>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => triggerConfetti()}
                className="text-teal-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>Open in Google Drive</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-600">•</span>
              <button
                onClick={handleDownload}
                className="text-slate-300 font-medium hover:text-white flex items-center gap-1"
              >
                <span>Download TXT</span>
                <FiDownload className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
