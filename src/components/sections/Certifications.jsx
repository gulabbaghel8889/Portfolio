import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiShield } from 'react-icons/fi';
import { certificationsData, achievementsData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

export const Certifications = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Honors & Training"
          title="Achievements &"
          highlight="Certifications"
          subtitle="National competitive examination success, state-level sports achievements, and verified technical certifications."
        />

        {/* Real Achievements Section */}
        <div className="mb-14">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 mb-6 flex items-center gap-2">
            <FiAward className="w-4 h-4 text-amber-400" />
            <span>Key Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 backdrop-blur-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {item.subtitle}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <FiAward className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real Certifications Section */}
        <div>
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 mb-6 flex items-center gap-2">
            <FiShield className="w-4 h-4 text-teal-400" />
            <span>Technical Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                      <FiCheckCircle className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
