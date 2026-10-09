import React, { useState } from 'react';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { SectionId } from '../../data/types';
import {
  ENGINEER_NAME,
  ENGINEER_ROLE,
  HERO_DESCRIPTION,
  PORTRAIT_IMAGE,
  RESUME_PATH,
  CONTACT_INFO,
} from '../../data/constants';

/**
 * Initials fallback shown when portrait.jpg is not yet uploaded.
 * A clean circular placeholder matching the site's accent colour.
 */
const PortraitPlaceholder: React.FC = () => (
  <div
    className="w-full h-full flex items-center justify-center text-4xl font-bold select-none"
    style={{
      backgroundColor: 'var(--bg-surface)',
      color: 'var(--accent)',
      borderRadius: '50%',
    }}
    aria-label="Portrait placeholder — initials JC"
  >
    JC
  </div>
);

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id={SectionId.HERO}
      className="min-h-[70vh] flex items-center pt-28 pb-12"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      <div className="section-container w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">

          {/* ── Text Column ── */}
          <div className="flex-1 min-w-0 max-w-2xl animate-fade-up">
            {/* Role label */}
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--gold)' }}
            >
              {ENGINEER_ROLE}
            </p>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              {ENGINEER_NAME}
            </h1>

            {/* Bio */}
            <p
              className="text-base leading-relaxed mb-6 text-justify"
              style={{ color: 'var(--text-secondary)' }}
            >
              {HERO_DESCRIPTION}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                id="hero-resume-download"
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85 shadow-sm"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-page)',
                }}
              >
                <Download size={15} />
                Download Resume
              </a>

              <button
                id="hero-scroll-experience"
                onClick={() => document.getElementById(SectionId.EXPERIENCE)?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                style={{
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                }}
              >
                View Experience
              </button>
            </div>

            {/* ── Contact Details ── */}
            <div
              className="pt-5 border-t flex flex-col gap-2.5 text-sm"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Email (Top) */}
              <div>
                <a
                  id="hero-contact-email"
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-75"
                  style={{ color: 'var(--text-primary)' }}
                  title="Email James"
                >
                  <Mail size={16} style={{ color: 'var(--accent)' }} />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>

              {/* LinkedIn & GitHub (Below) */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  id="hero-contact-linkedin"
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-75"
                  style={{ color: 'var(--text-primary)' }}
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} style={{ color: 'var(--accent)' }} />
                  <span>LinkedIn</span>
                </a>

                <span style={{ color: 'var(--border-strong)' }}>·</span>

                <a
                  id="hero-contact-github"
                  href={CONTACT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-75"
                  style={{ color: 'var(--text-primary)' }}
                  title="GitHub Profile"
                >
                  <Github size={16} style={{ color: 'var(--accent)' }} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Portrait Column ── */}
          <div className="shrink-0 animate-fade-up flex justify-center">
            <div
              className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden portrait-ring shadow-md"
            >
              {imgError ? (
                <PortraitPlaceholder />
              ) : (
                <img
                  src={PORTRAIT_IMAGE}
                  alt={`Portrait of ${ENGINEER_NAME}`}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
