import React from 'react';

interface SectionHeaderProps {
  /** Lucide icon element */
  icon: React.ReactNode;
  title: string;
  /** Optional subtitle / descriptor rendered below the title */
  subtitle?: string;
  /** Visual size variant — defaults to 'lg' (primary section) */
  size?: 'lg' | 'sm';
}

/**
 * Consistent section heading used across all major sections.
 * Renders an icon beside a title, with an optional subtitle line.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  subtitle,
  size = 'lg',
}) => {
  const titleClass =
    size === 'lg'
      ? 'text-2xl font-bold text-primary-c'
      : 'text-xl font-semibold text-primary-c';

  return (
    <div className="mb-8">
      <h2 className={`${titleClass} flex items-center gap-3`} style={{ color: 'var(--text-primary)' }}>
        <span style={{ color: 'var(--accent)' }}>{icon}</span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
