import React from 'react';
import { Cpu } from 'lucide-react';
import { SectionId, ToolItem } from '../../data/types';
import { ENGINEERING_TOOLS } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';

// Group tools by their category
function groupByCategory(tools: ToolItem[]): Record<string, ToolItem[]> {
  return tools.reduce<Record<string, ToolItem[]>>((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {});
}

const TechStack: React.FC = () => {
  const grouped = groupByCategory(ENGINEERING_TOOLS);
  const categories = Object.keys(grouped) as ToolItem['category'][];

  return (
    <section
      id={SectionId.TECHSTACK}
      className="py-16"
      style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="section-container">
        <SectionHeader
          icon={<Cpu size={22} />}
          title="Technical Skills"
          subtitle="Simulation, design, and analysis tools used in power systems and electrical engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category}>
              {/* Category heading */}
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'var(--gold)' }}
              >
                {category}
              </h3>

              {/* Tool badges */}
              <div className="flex flex-col gap-2">
                {grouped[category].map(tool => (
                  <div
                    key={tool.name}
                    className="flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {/* Accent dot marker */}
                    <span
                      className="w-1.5 h-1.5 rounded-full mr-3 shrink-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    {tool.name}
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
