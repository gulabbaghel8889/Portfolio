import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080d1a]"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center font-bold text-slate-950 text-3xl shadow-xl shadow-teal-500/30 animate-pulse">
                G
              </div>
              <div className="absolute -inset-3 border-2 border-teal-500/30 border-t-teal-400 rounded-3xl animate-spin" />
            </div>
            <p className="mt-6 text-sm font-mono text-slate-400 tracking-widest uppercase">
              Initializing Portfolio...
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <MainLayout
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject}
        isResumeOpen={isResumeOpen}
        setIsResumeOpen={setIsResumeOpen}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectProject={setSelectedProject}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            }
          />
          {/* Catch-all redirect to home */}
          <Route
            path="*"
            element={
              <HomePage
                onSelectProject={setSelectedProject}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
