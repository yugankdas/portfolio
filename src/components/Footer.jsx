import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '3px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
      background: 'var(--bg)'
    }}>
      <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 700 }}>
        YUGANK DAS © 2026
      </div>
    </footer>
  );
};

export default Footer;
