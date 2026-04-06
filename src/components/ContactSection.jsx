import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contacts = [
    { label: "Email", value: "yugankdas2006@gmail.com", href: "mailto:yugankdas2006@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/yugank-das", href: "https://linkedin.com/in/yugank-das" },
    { label: "GitHub", value: "github.com/yugankdas", href: "https://github.com/yugankdas" }
  ];

  return (
    <section id="contact" style={{ padding: '8rem 2rem 6rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="font-bebas" style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', color: 'var(--lime)', marginBottom: '4rem', lineHeight: 1 }}>
          LET’S BUILD SOMETHING.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              style={{
                display: 'block',
                background: 'var(--card)',
                border: '3px solid var(--border)',
                padding: '2rem 3rem',
                textDecoration: 'none',
                boxShadow: '8px 8px 0 var(--shadow)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              className="contact-card"
            >
              <div className="font-mono" style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                {contact.label}
              </div>
              <div className="font-space" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 800 }}>
                {contact.value}
              </div>
            </motion.a>
          ))}
        </div>

        <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Currently open to internships, collaborations, hackathons, and ambitious ideas.
        </p>
      </div>

      <style>{`
        .contact-card:hover {
          transform: translate(-4px, -4px) !important;
          box-shadow: 12px 12px 0 var(--shadow) !important;
          border-color: var(--cyan) !important;
        }
        .contact-card:active {
          transform: translate(2px, 2px) !important;
          box-shadow: 4px 4px 0 var(--shadow) !important;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
