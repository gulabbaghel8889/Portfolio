import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCompass,
  FiCode,
  FiCpu,
  FiTarget,
  FiCheckCircle,
  FiZap,
} from 'react-icons/fi';
import { aboutData, personalInfo } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="About The Developer"
          title="Turning Ideas Into Scalable"
          highlight="Full-Stack Solutions"
          subtitle="Get to know my engineering background, technical journey, problem-solving mindset, and career aspirations."
        />

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Intro, Journey, Mindset, Aspirations (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-4"
            >
              <div className="flex items-center gap-3 text-teal-400">
                <FiCode className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Professional Introduction</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.intro}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.objective}
              </p>
            </motion.div>

            {/* Development Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-4"
            >
              <div className="flex items-center gap-3 text-cyan-400">
                <FiCompass className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Development Journey</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.journey}
              </p>
            </motion.div>

            {/* Problem Solving & Aspirations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-3"
              >
                <div className="flex items-center gap-2.5 text-amber-400">
                  <FiCpu className="w-5 h-5" />
                  <h4 className="font-bold text-white text-base">Problem Solving</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {aboutData.mindset}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-3"
              >
                <div className="flex items-center gap-2.5 text-indigo-400">
                  <FiTarget className="w-5 h-5" />
                  <h4 className="font-bold text-white text-base">Career Aspirations</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {aboutData.aspirations}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Real Academic Highlights + Core Values (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Academic & Exam Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md flex flex-col justify-center items-center text-center group transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    {item.value}
                  </span>
                  <span className="text-xs text-white font-bold mt-1">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.sub}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Core Values / Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md space-y-5"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-teal-400 font-bold flex items-center gap-2">
                <FiZap className="w-4 h-4 text-teal-400" />
                <span>Core Engineering Strengths</span>
              </h3>

              <div className="space-y-4">
                {aboutData.coreValues.map((val) => (
                  <div key={val.title} className="flex gap-3 items-start">
                    <div className="mt-1 p-1 rounded-md bg-teal-500/10 text-teal-400 shrink-0">
                      <FiCheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{val.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200 font-medium">{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
