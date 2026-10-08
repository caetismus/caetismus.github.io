import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';

const Education: React.FC = () => (
  <section
    className="py-16"
    style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border)' }}
  >
    <div className="section-container">
      <SectionHeader icon={<GraduationCap size={22} />} title="Education" />

      <div className="grid gap-4">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-5 p-5 rounded-lg transition-colors"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
          >
            {/* Logo */}
            {edu.logo && (
              <div
                className="w-14 h-14 shrink-0 rounded-full overflow-hidden flex items-center justify-center self-start"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-page)' }}
              >
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="w-full h-full object-contain p-1"
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                <div>
                  <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                    {edu.school}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--gold)' }}>
                    {edu.degree}
                  </p>
                </div>
                <span className="text-xs whitespace-nowrap mt-1 sm:mt-0" style={{ color: 'var(--text-muted)' }}>
                  {edu.location} · {edu.year}
                </span>
              </div>

              {edu.highlights.length > 0 && (
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {edu.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
