import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { SectionId } from '../../data/types';
import { useTheme } from '../../hooks/useTheme';
import { RESUME_PATH } from '../../data/constants';

const NAV_LINKS = [
  { id: SectionId.HERO,      label: 'Home' },
  { id: SectionId.ABOUT,     label: 'About' },
  { id: SectionId.PROJECTS,  label: 'Projects' },
  { id: SectionId.TECHSTACK, label: 'Technical Skills' },
  { id: SectionId.CONTACT,   label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme }  = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-sm' : 'py-5'
      }`}
      style={{ backgroundColor: 'var(--nav-bg)', borderBottom: scrolled ? '1px solid var(--nav-border)' : 'none' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-5xl">

        {/* ── Logo / Monogram ── */}
        <button
          id="nav-logo"
          onClick={() => scrollToSection(SectionId.HERO)}
          className="text-sm font-bold tracking-widest uppercase transition-colors"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Go to top"
        >
          JC
        </button>

        {/* ── Desktop Nav Links (centred) ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              id={`nav-${link.id}`}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-semibold uppercase tracking-widest transition-colors hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* ── Desktop: Theme Toggle + Resume ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full transition-colors"
            style={{
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
            }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Resume */}
          <a
            id="nav-resume"
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-page)',
            }}
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* ── Mobile: Theme + Hamburger ── */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full"
            style={{
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
            }}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            id="nav-hamburger"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            style={{ color: 'var(--text-primary)' }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-4 px-6 flex flex-col gap-1 shadow-md"
          style={{
            backgroundColor: 'var(--nav-bg)',
            borderBottom: '1px solid var(--nav-border)',
          }}
        >
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              id={`nav-mobile-${link.id}`}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-2.5 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-primary)' }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t mt-2" style={{ borderColor: 'var(--border)' }}>
            <a
              id="nav-resume-mobile"
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium py-2"
              style={{ color: 'var(--accent)' }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
