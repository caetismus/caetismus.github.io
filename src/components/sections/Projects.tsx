import React from 'react';
import { FolderOpen } from 'lucide-react';
import { SectionId, Project } from '../../data/types';
import { ACADEMIC_PROJECTS } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';

// ---------------------------------------------------------------------------
// ProjectCard — subdued, minimal visual weight
// ---------------------------------------------------------------------------
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div
    className="group py-5 pl-5 rounded-r-md transition-all duration-200"
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
);

// ---------------------------------------------------------------------------
// Projects section
// ---------------------------------------------------------------------------
const Projects: React.FC = () => (
  <section
    id={SectionId.PROJECTS}
    className="py-16"
    style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border)' }}
  >
    <div className="section-container">
      <SectionHeader
        icon={<FolderOpen size={22} />}
        title="Academic Projects"
        subtitle="Selected coursework, research, and academic engineering projects."
        size="lg"
      />

      <div className="flex flex-col gap-6">
        {ACADEMIC_PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/*
        Specialized Subjects / Projects
        ─────────────────────────────────
        These are intentionally hidden until the project output is ready to showcase.
        To enable:
          1. Import SPECIALIZED_PROJECTS from '../../data/constants'
          2. Uncomment the block below
      */}
      {/*
      <div className="mt-12">
        <SectionHeader
          icon={<FolderOpen size={20} />}
          title="Specialized Subjects"
          size="sm"
        />
        <div className="flex flex-col gap-6">
          {SPECIALIZED_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      */}
    </div>
  </section>
);

export default Projects;
