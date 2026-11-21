import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2.5 rounded-xl bg-slate-800/60 dark:bg-slate-800/80 border border-slate-700/60 text-slate-300 dark:text-teal-300 hover:text-white dark:hover:text-teal-200 hover:border-teal-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        key={theme}
        initial={{ y: -10, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 10, opacity: 0, rotate: 45 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center text-lg"
      >
        {isDark ? <FiSun className="text-amber-400" /> : <FiMoon className="text-teal-600" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
