import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { timelineData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

export const Timeline = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all'
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-grid-pattern">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          badge="Milestones & Journey"
          title="Experience &"
          highlight="Education Timeline"
          subtitle="A chronological trace of professional development, institutional background, and engineering achievements."
        />

        {/* Filter Toggle */}
        <div className="flex justify-center gap-3 mb-14">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-teal-500 text-slate-950 font-bold'
                : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter('experience')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'experience'
                ? 'bg-teal-500 text-slate-950 font-bold'
                : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <FiBriefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'education'
                ? 'bg-teal-500 text-slate-950 font-bold'
                : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <FiBookOpen className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12">
          {filteredItems.map((item, idx) => {
            const isWork = item.type === 'experience';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-9 h-9 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-md ${
                    isWork
                      ? 'bg-teal-950 border-teal-500 text-teal-400'
                      : 'bg-indigo-950 border-indigo-500 text-indigo-400'
                  }`}
                >
                  {isWork ? (
                    <FiBriefcase className="w-4 h-4" />
                  ) : (
                    <FiBookOpen className="w-4 h-4" />
                  )}
                </div>

                {/* Milestone Content Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 backdrop-blur-md space-y-4 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span
                        className={`text-xs font-mono font-bold uppercase tracking-wider ${
                          isWork ? 'text-teal-400' : 'text-indigo-400'
                        }`}
                      >
                        {item.organization}
                      </span>
                      <h3 className="text-xl font-black text-white mt-0.5">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300">
                        <FiCalendar className="w-3.5 h-3.5 text-teal-400" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.achievements && (
                    <div className="space-y-1.5 pt-1">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <FiCheckCircle className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills tags */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
