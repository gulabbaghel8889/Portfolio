import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCplusplus,
  SiC,
  SiMysql,
} from 'react-icons/si';
import { VscVscode, VscDatabase } from 'react-icons/vsc';
import { TbApi, TbDatabaseSearch } from 'react-icons/tb';
import { skillsCategories } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';

const renderSkillIcon = (iconName, className) => {
  switch (iconName) {
    case 'FaReact':
      return <FaReact className={className} />;
    case 'SiJavascript':
      return <SiJavascript className={className} />;
    case 'SiTailwindcss':
      return <SiTailwindcss className={className} />;
    case 'FaHtml5':
      return <FaHtml5 className={className} />;
    case 'FaCss3Alt':
      return <FaCss3Alt className={className} />;
    case 'FaNodeJs':
      return <FaNodeJs className={className} />;
    case 'SiExpress':
      return <SiExpress className={className} />;
    case 'TbApi':
      return <TbApi className={className} />;
    case 'FaJava':
      return <FaJava className={className} />;
    case 'SiCplusplus':
      return <SiCplusplus className={className} />;
    case 'SiC':
      return <SiC className={className} />;
    case 'SiMongodb':
      return <SiMongodb className={className} />;
    case 'SiMysql':
      return <SiMysql className={className} />;
    case 'VscDatabase':
      return <VscDatabase className={className} />;
    case 'TbDatabaseSearch':
      return <TbDatabaseSearch className={className} />;
    case 'FaGitAlt':
      return <FaGitAlt className={className} />;
    case 'FaGithub':
      return <FaGithub className={className} />;
    case 'SiPostman':
      return <SiPostman className={className} />;
    case 'VscVscode':
      return <VscVscode className={className} />;
    default:
      return <FaReact className={className} />;
  }
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'Tools' },
    { id: 'concepts', label: 'Core CS' },
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Verified Competencies"
          title="Technical Skills &"
          highlight="Core Technologies"
          subtitle="Specialized in full-stack MERN engineering, core programming languages, relational & document databases, and fundamental Computer Science concepts."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid Grouped by Category */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-slate-800/80">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>{category.title}</span>
                </h3>
                <span className="text-xs text-slate-400">{category.description}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-teal-500/40 backdrop-blur-md transition-all shadow-sm group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: `${skill.color}15`,
                            color: skill.color,
                          }}
                        >
                          {renderSkillIcon(skill.icon, 'w-5 h-5')}
                        </div>
                        <h4 className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-teal-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Indicator */}
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
