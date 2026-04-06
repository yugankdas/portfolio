import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" style={{
      padding: '8rem 2rem 4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '4rem', width: '100%'
      }}>
        {/* Left Column: Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          style={{ flex: '1 1 500px' }}
          className="card-neo"
        >
          <div style={{ padding: '3rem' }}>
            <h2 className="font-bebas" style={{ fontSize: '4rem', marginBottom: '2rem', color: 'var(--cyan)' }}>
              ABOUT ME
            </h2>
            <p className="font-space" style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
              I build at the intersection of intelligence and aesthetics. My work spans data science, Gen AI, web products, and the kind of design that makes technical things feel alive.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Stat Grid */}
        <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
          {[
            { label: '3+', desc: 'Projects' },
            { label: '3+', desc: 'Hackathons Led' },
            { label: '2', desc: 'Professional Roles' },
            { label: '2', desc: 'Industry Simulations' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="card-neo"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div className="font-bebas" style={{ fontSize: '3rem', color: 'var(--lime)', marginBottom: '0.5rem' }}>
                {stat.label}
              </div>
              <div className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
