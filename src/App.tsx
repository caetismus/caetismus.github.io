import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';

/**
 * Root application component.
 *
 * Section order:
 *   Header (fixed)
 *   ↓ Hero           — name, role, portrait
 *   ↓ Experience      — internship timeline     [nav: About]
 *   ↓ Education       — school cards
 *   ↓ Certifications  — awards grid
 *   ↓ Projects        — academic projects       [nav: Projects]
 *   ↓ TechStack       — engineering tools       [nav: Tech Stack]
 *   ↓ Contact         — dark section            [nav: Contact]
 *   Footer
 */
const App: React.FC = () => (
  <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)' }}>
    <Header />
    <main>
      <Hero />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <TechStack />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
