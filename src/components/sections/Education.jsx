import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';
import { educationData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          badge="Academic Qualifications"
          title="Education &"
          highlight="Academic Background"
          subtitle="Formal degree and schooling credentials demonstrating consistent academic dedication and strong analytical foundations."
        />

        <div className="space-y-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FiBookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-teal-500/15 text-teal-400 border border-teal-500/40">
                    {item.score}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
