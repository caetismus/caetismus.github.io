import React from 'react';
import { Award, ExternalLink, Star } from 'lucide-react';
import { SectionId } from '../../data/types';
import { CERTIFICATIONS } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';

const Certifications: React.FC = () => (
  <section
    id={SectionId.CERTIFICATIONS}
    className="py-12"
    style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border)' }}
  >
    <div className="section-container">
      <SectionHeader icon={<Award size={22} />} title="Licenses & Certifications" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CERTIFICATIONS.map((cert, index) => {
          const isLinked = Boolean(cert.link);
          const Wrapper = isLinked ? 'a' : 'div';
          const wrapperProps = isLinked
            ? {
                href: cert.link,
                target: '_blank' as const,
                rel: 'noopener noreferrer',
                className: 'group block',
              }
            : { className: 'block' };

          return (
            <Wrapper key={index} {...wrapperProps}>
              <div
                className="flex items-center gap-4 p-4 rounded-lg transition-all h-full relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >

                {/* Logo */}
                {cert.logo && (
                  <div
                    className="w-10 h-10 shrink-0 rounded-md overflow-hidden flex items-center justify-center"
                    style={{
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg-page)',
                    }}
                  >
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain p-1"
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Text */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className="text-sm font-semibold leading-snug transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {cert.title}
                    </p>
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      {cert.highlight && (
                        <Star size={14} fill="currentColor" style={{ color: 'var(--gold)' }} />
                      )}
                      {isLinked && (
                        <ExternalLink
                          size={13}
                          className="transition-colors"
                          style={{ color: 'var(--text-muted)' }}
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  </section>
);

export default Certifications;
