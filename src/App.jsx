import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectGrid from './components/ProjectGrid';
import SkillsBoard from './components/SkillsBoard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ProjectGrid />
      <SkillsBoard />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
