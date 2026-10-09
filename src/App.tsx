import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';

/**
 * Root application component.
 *
 * Section order (Career Priority):
 *   Header (fixed)
 *   ↓ Hero           — Name, role, portrait, bio, contact details row
 *   ↓ Experience     — Professional experience / internship timeline
 *   ↓ Projects       — Academic & technical engineering projects
 *   ↓ TechStack      — Technical skills & engineering software tools
 *   ↓ Education      — Degree & academic background
 *   ↓ Certifications — PRC licenses & professional credentials
 *   Footer
 */
const App: React.FC = () => (
  <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)' }}>
    <Header />
    <main>
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Education />
      <Certifications />
    </main>
    <Footer />
  </div>
);

export default App;
