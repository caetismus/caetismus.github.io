import React from 'react';

const Footer: React.FC = () => (
  <footer
    className="py-6 border-t"
    style={{
      backgroundColor: 'var(--bg-page)',
      borderColor: 'var(--border)',
    }}
  >
    <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2">
      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
        &copy; {new Date().getFullYear()} James Cubito. All rights reserved.
      </span>
      <a
        href="https://github.com/caetismus"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs transition-colors hover:opacity-70"
        style={{ color: 'var(--text-muted)' }}
      >
        github.com/caetismus
      </a>
    </div>
  </footer>
);

export default Footer;
