import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import GithubSection from '../components/sections/GithubSection';
import Contact from '../components/sections/Contact';

export const HomePage = ({ onSelectProject, onOpenResume }) => {
  return (
    <>
      <Hero onOpenResume={onOpenResume} />
      <About />
      <Skills />
      <Projects onSelectProject={onSelectProject} />
      <Education />
      <Certifications />
      <GithubSection />
      <Contact />
    </>
  );
};

export default HomePage;
