import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionId } from '../../data/types';
import { EXPERIENCE } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';
import RichText from '../ui/RichText';

const Experience: React.FC = () => (
  <section
    id={SectionId.EXPERIENCE}
    className="py-12"
    style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border)' }}
  >
    <div className="section-container">
      <SectionHeader icon={<Briefcase size={22} />} title="Professional Experience" />

      {/* Timeline */}
      <div className="relative ml-6 timeline-line space-y-10">
        {EXPERIENCE.map((exp, index) => {
          const isLatest = index === 0;

          return (
            <div key={`${exp.company}-${index}`} className="relative pl-12">

              {/* Logo bubble on the timeline */}
              <div
                className="absolute -left-6 top-0 w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center z-10 bg-card"
                style={{
                  border: isLatest
                    ? '2px solid var(--accent)'
                    : '1px solid var(--border)',
                  boxShadow: isLatest ? '0 0 0 3px var(--accent-light)' : 'none',
                }}
              >
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
                    {exp.company.charAt(0)}
                  </span>
                )}
              </div>

              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3
                  className="text-base font-bold"
                  style={{ color: isLatest ? 'var(--accent-text)' : 'var(--text-primary)' }}
                >
                  {exp.role}
                </h3>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                  style={{
                    backgroundColor: isLatest ? 'var(--accent-light)' : 'var(--bg-surface)',
                    color: isLatest ? 'var(--accent-text)' : 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {exp.duration}
                </span>
              </div>

              {/* Company + location */}
              <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
                {exp.company}
                <span className="mx-2" style={{ color: 'var(--border-strong)' }}>·</span>
                <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
              </p>

              {/* Bullet points */}
              <ul className="space-y-1.5 list-disc list-outside ml-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
