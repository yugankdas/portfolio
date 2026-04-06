import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Python Ecosystem",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "FastAPI", "PyTorch"]
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Next.js"]
  },
  {
    category: "Gen AI",
    items: ["RAG", "Language Models"]
  },
  {
    category: "Data Science",
    items: ["EDA", "Statistical Analysis"]
  },
  {
    category: "Other",
    items: ["C", "R", "Public Speaking", "Project Management", "Leadership"]
  }
];

const SkillsBoard = () => {
  return (
    <section id="skills" style={{ padding: '8rem 2rem 4rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="font-bebas" style={{ 
          fontSize: '4rem', marginBottom: '4rem', color: 'var(--text-primary)', textAlign: 'center' 
        }}>
          SKILLS BOARD
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {skills.map((skillGroup, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-bebas" style={{ fontSize: '2rem', color: 'var(--cyan)', borderBottom: '3px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {skillGroup.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, type: 'spring', stiffness: 120 }}
                    className="skill-tag font-mono"
                    style={{
                      background: 'var(--surface)',
                      border: '3px solid var(--border)',
                      padding: '0.8rem 1.5rem',
                      fontWeight: 700,
                      color: 'var(--cyan)',
                      boxShadow: '4px 4px 0 var(--shadow)',
                      cursor: 'default',
                      transition: 'all 0.1s ease'
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-tag:hover {
          background: var(--cyan) !important;
          color: var(--white) !important;
          border-color: var(--border) !important;
          transform: translate(-2px, -2px) !important;
          box-shadow: 8px 8px 0 var(--shadow) !important;
          cursor: pointer !important;
        }
      `}</style>
    </section>
  );
};

export default SkillsBoard;
