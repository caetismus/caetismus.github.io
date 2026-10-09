import React from 'react';
import { Cpu } from 'lucide-react';
import { SectionId, SkillItem } from '../../data/types';
import { TECHNICAL_SKILLS } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';

// Group tools by their category
function groupByCategory(tools: SkillItem[]): Record<string, SkillItem[]> {
  return tools.reduce<Record<string, SkillItem[]>>((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {});
}

const TechStack: React.FC = () => {
  const grouped = groupByCategory(TECHNICAL_SKILLS);
  const categories = Object.keys(grouped);

  return (
    <section
      id={SectionId.TECHSTACK}
      className="py-12"
      style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border)' }}
    >
      <div className="section-container">
        <SectionHeader
          icon={<Cpu size={22} />}
          title="Technical Skills"
          subtitle="Simulation, design, and analysis tools used in power systems and electrical engineering."
        />

        {/* Compact, responsive grouped rows layout */}
        <div
          className="rounded-xl overflow-hidden divide-y"
          style={{
            border: '1px solid var(--border)',
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          {categories.map(category => (
            <div
              key={category}
              className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 transition-colors"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Category title column — centered vertically, left-aligned */}
              <div className="md:w-60 shrink-0 text-left">
                <h3
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: 'var(--gold)' }}
                >
                  {category}
                </h3>
              </div>

              {/* Skills chips flex-wrap */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 flex-1 min-w-0">
                {grouped[category].map(tool => (
                  <div
                    key={tool.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    <span>{tool.name}</span>
                    {tool.details && (
                      <span
                        className="text-[11px] font-normal"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        · {tool.details}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
