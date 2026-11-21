import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollProgressBar from '../components/common/ScrollProgressBar';
import CustomCursor from '../components/common/CustomCursor';
import BackToTop from '../components/common/BackToTop';
import ParticleBackground from '../components/common/ParticleBackground';
import ProjectModal from '../components/ui/ProjectModal';
import ResumeModal from '../components/ui/ResumeModal';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = [
  'hero',
  'about',
  'skills',
  'projects',
  'education',
  'achievements',
  'github',
  'contact',
];

export const MainLayout = ({ children, selectedProject, onSelectProject, isResumeOpen, setIsResumeOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-teal-500 selection:text-slate-950">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Interactive Canvas Particles */}
      <ParticleBackground />

      {/* Modern Desktop Custom Cursor */}
      <CustomCursor />

      {/* SaaS Navigation Header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Back To Top Floating Action */}
      <BackToTop />

      {/* Interactive Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => onSelectProject(null)}
      />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default MainLayout;
