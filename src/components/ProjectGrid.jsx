import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    num: "01",
    title: "Klover",
    desc: "A lightweight DSL aimed for rapid UI prototyping or education, featuring semantic parsing and rendering in JavaScript.",
    tags: ["DSL", "Semantic Parsing", "JavaScript"],
    link: "https://github.com/yugankdas/klover",
    featured: true
  },
  {
    num: "02",
    title: "F1 Pit Stop Strategy Analysis",
    desc: "Analyzed how pit stop strategies impacted finishing positions across Formula 1 seasons from 2022–2024 using Python and data analysis.",
    tags: ["Python", "Pandas", "Data Analysis"],
    link: "https://github.com/yugankdas/f1python"
  },
  {
    num: "03",
    title: "Pentiq",
    desc: "An autonomous multi-agent pipeline featuring five agents that debate and execute actions.",
    tags: ["Agentic AI", "Data Science", "MLOps"],
    link: "https://github.com/yugankdas/anvil"
  },
  {
    num: "04",
    title: "Talis",
    desc: "AI-powered and voice-controlled desktop assistant designed for seamless system interaction.",
    tags: ["Python", "Gen AI", "Voice Control"],
    link: "https://github.com/yugankdas/talis"
  },
  {
    num: "05",
    title: "Sift",
    desc: "AI-powered command line tool that compares git diffs and returns an autopsy report to prevent mindless vibe coding.",
    tags: ["CLI", "LangChain", "Git"],
    link: "https://github.com/yugankdas/sift-autopsy"
  }
];

const ProjectGrid = () => {
  return (
    <section id="projects" style={{ padding: '8rem 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="font-bebas" style={{ 
        fontSize: '4rem', marginBottom: '4rem', color: 'var(--text-primary)' 
      }}>
        PROJECTS
      </h2>

      <div className="grid-container">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.1 }}
            className={`project-card ${proj.featured ? 'featured' : ''}`}
            style={{
              background: 'var(--surface)',
              border: '3px solid var(--border)',
              padding: '2.5rem',
              boxShadow: '8px 8px 0 var(--shadow)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <div className="font-mono" style={{ fontSize: '2rem', color: 'var(--cyan)', fontWeight: 800, marginBottom: '1.5rem' }}>
              {proj.num}
            </div>
            <h3 className="font-bebas" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {proj.title}
            </h3>
            <p className="font-space" style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.6 }}>
              {proj.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {proj.tags.map(tag => (
                <span key={tag} className="font-mono" style={{
                  fontSize: '0.8rem', padding: '0.3rem 0.6rem',
                  border: '2px solid var(--border)', background: 'var(--bg)', color: 'var(--cyan)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="font-space" style={{
              alignSelf: 'flex-start', background: 'transparent',
              border: 'none', color: 'var(--cyan)', fontWeight: 700,
              fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
              View Project <span className="arrow">→</span>
            </div>
          </motion.a>
        ))}
      </div>
      <style>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        .project-card.featured {
          grid-column: span 2;
        }
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
          .project-card.featured {
            grid-column: span 1;
          }
        }
        .project-card:hover {
          transform: translateY(-8px) rotate(1deg) !important;
          box-shadow: 12px 12px 0 var(--shadow) !important;
          border-color: var(--lime) !important;
        }
        .project-card:hover .arrow {
          transform: translateX(5px);
        }
        .arrow { transition: transform 0.2s; }
      `}</style>
    </section>
  );
};

export default ProjectGrid;
