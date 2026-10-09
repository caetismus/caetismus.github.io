import React from 'react';
import { FolderOpen } from 'lucide-react';
import { SectionId, Project } from '../../data/types';
import { ACADEMIC_PROJECTS, SPECIALIZED_PROJECTS } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';

// ---------------------------------------------------------------------------
// ProjectCard — subdued, minimal visual weight with upcoming blur support
// ---------------------------------------------------------------------------
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="group py-5 pl-5 pr-4 rounded-r-md transition-all duration-200"
    style={{
      borderLeft: '3px solid var(--border)',
      backgroundColor: 'transparent',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'var(--accent)';
      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--bg-surface)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'var(--border)';
      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
    }}
  >
    {/* Upcoming / In Development indicator */}
    {project.isUpcoming && (
      <div className="mb-3">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
          style={{
            backgroundColor: 'rgba(217, 119, 6, 0.12)',
            color: 'var(--gold)',
            border: '1px solid rgba(217, 119, 6, 0.25)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          In Development
        </span>
      </div>
    )}

    {/* Project details — blurred when isUpcoming is true in constants.ts */}
    <div
      className={
        project.isUpcoming
          ? 'filter blur-[4px] select-none opacity-60 pointer-events-none'
          : ''
      }
    >
      {/* Title row */}
      <div className="flex flex-wrap items-baseline gap-3 mb-1">
        <h3
          className="text-base font-semibold leading-snug transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: 'var(--text-muted)' }}
        >
          {project.category}
        </span>
      </div>

      {/* Optional subtitle */}
      {project.subtitle && (
        <p
          className="text-sm italic mb-2 leading-snug"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.subtitle}
        </p>
      )}

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-3"
        style={{ color: 'var(--text-secondary)' }}
      >
        {project.description}
      </p>

      {/* Technology pills */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map(tech => (
          <span key={tech} className="pill">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Projects section
// ---------------------------------------------------------------------------
const Projects: React.FC = () => (
  <section
    id={SectionId.PROJECTS}
    className="py-12"
    style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border)' }}
  >
    <div className="section-container">
      <SectionHeader
        icon={<FolderOpen size={22} />}
        title="Projects"
        subtitle="Specialized power engineering initiatives, coursework, and technical applications."
        size="lg"
      />

      {/* Personal Projects (Featured / Under Development) */}
      {SPECIALIZED_PROJECTS.length > 0 && (
        <div className="mb-10">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Personal Projects
          </h3>
          <div className="flex flex-col gap-6">
            {SPECIALIZED_PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Academic & Research Projects */}
      <div>
        <h3
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          Academic & Research Projects
        </h3>
        <div className="flex flex-col gap-6">
          {ACADEMIC_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
