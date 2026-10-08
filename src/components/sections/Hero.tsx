import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { SectionId } from '../../data/types';
import {
  ENGINEER_NAME,
  ENGINEER_ROLE,
  HERO_DESCRIPTION,
  PORTRAIT_IMAGE,
  RESUME_PATH,
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
      className="min-h-[85vh] flex items-center pt-24 pb-16"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── Text Column ── */}
          <div className="order-2 md:order-1 animate-fade-up">
            {/* Role label */}
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--gold)' }}
            >
              {ENGINEER_ROLE}
            </p>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {ENGINEER_NAME}
            </h1>

            {/* Bio */}
            <p
              className="text-base leading-relaxed mb-8 max-w-lg text-justify"
              style={{ color: 'var(--text-secondary)' }}
            >
              {HERO_DESCRIPTION}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                id="hero-resume-download"
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-page)',
                }}
              >
                <Download size={15} />
                Download Resume
              </a>

              <button
                id="hero-scroll-about"
                onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                style={{
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent',
                }}
              >
                View Profile
              </button>
            </div>
          </div>

          {/* ── Portrait Column ── */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up">
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden portrait-ring"
              style={{ flexShrink: 0 }}
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
