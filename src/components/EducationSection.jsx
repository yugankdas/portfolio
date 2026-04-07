import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor in Computer Applications",
      institution: "Dayananda Sagar University",
      duration: "2025 – 2028",
      details: "Focusing on core computer science foundations and application development."
    },
    {
      degree: "Bachelor in Science, Data Science and Applications",
      institution: "Indian Institute of Technology, Madras",
      duration: "2025 – 2029",
      details: "Specializing in statistical modeling, machine learning, and large-scale data analysis."
    }
  ];

  return (
    <section id="education" style={{ padding: '8rem 2rem 4rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="font-bebas" style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 5rem)', textAlign: 'center', marginBottom: '4rem', color: 'var(--cyan)' 
        }}>
          EDUCATION
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem' 
        }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="card-neo"
              style={{
                background: 'var(--surface)',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div className="font-mono" style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
                {edu.duration}
              </div>
              <h3 className="font-bebas" style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
                {edu.degree}
              </h3>
              <div className="font-space" style={{ 
                fontSize: '1.2rem', 
                fontWeight: 700, 
                color: 'var(--cyan)', 
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {edu.institution}
              </div>
              <p className="font-space" style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1 }}>
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
