import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          transition: 'background 0.3s, border-bottom 0.3s',
          background: scrolled ? 'var(--surface)' : 'transparent',
          borderBottom: scrolled ? '3px solid var(--border)' : '3px solid transparent'
        }}
      >
        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="nav-links-desktop">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontFamily: 'Space Grotesk',
              fontWeight: 600,
              fontSize: '1.1rem',
              position: 'relative',
              overflow: 'hidden'
            }} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          background: 'var(--lime)',
          color: '#fff',
          border: '3px solid var(--border)',
          padding: '0.5rem',
          boxShadow: '4px 4px 0 var(--shadow)',
          cursor: 'pointer',
          display: 'flex'
        }}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%',
              background: 'var(--surface)', zIndex: 40,
              display: 'flex', flexDirection: 'column',
              padding: '6rem 2rem', gap: '2rem', borderLeft: '3px solid var(--border)'
            }}
          >
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontFamily: 'Bebas Neue',
                fontSize: '3rem',
                borderBottom: '3px solid var(--border)',
                paddingBottom: '0.5rem',
                display: 'block'
              }}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media(min-width: 768px) {
          .nav-links-desktop { display: flex !important; gap: 2rem; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px;
          background: var(--cyan);
          transform: scaleX(0); transform-origin: right;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
      `}</style>
    </>
  );
};

export default Navbar;
