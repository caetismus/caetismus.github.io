import React from 'react';

interface RichTextProps {
  text: string;
  /** Additional class names for the wrapping span */
  className?: string;
}

/**
 * Renders a string that may contain **bold** markdown-style markers.
 * Text wrapped in double asterisks is rendered as <strong>.
 * All other text is rendered as plain spans.
 *
 * Example input:  "Used **AutoCAD** for drafting."
 * Example output: Used <strong>AutoCAD</strong> for drafting.
 */
const RichText: React.FC<RichTextProps> = ({ text, className }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong
              key={index}
              className="font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export default RichText;
