import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "AI Consultant — Data Annotation",
      date: "Aug 2025 – Nov 2025",
      desc: "Worked on AI evaluation and model quality tasks.",
    },
    {
      role: "Campus Ambassador — Perplexity AI",
      date: "Oct 2025 – Nov 2025",
      desc: "Led awareness and engagement initiatives on campus.",
    },
    {
      role: "Data Science Job Simulation — British Airways",
      date: "Jan 2026",
      desc: "Completed practical analytics and business insight exercises.",
    },
    {
      role: "Quantitative Job Simulation — JPMorgan",
      date: "Jan 2026",
      desc: "Explored quantitative finance and research workflows.",
    },
    {
      role: "AI Trainer — Luel (YCW26)",
      date: "Apr 2026 – Ongoing",
      desc: "Training and refining robust AI models, contributing to model evaluations and capability improvements.",
    },
    {
      role: "Student Ambassador — Google",
      date: "Apr 2026 – Ongoing",
      desc: "Representing Google on campus and fostering a community of student developers through technical workshops and events.",
    }
  ];

  const targetRef = useRef(null);
  
  // Track the scroll progress through the targetRef section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Since we have 6 items, total width is 600vw.
  // To reach the last item, we need to translate the container by -500vw.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  return (
    <section ref={targetRef} id="experience" style={{ position: 'relative', height: '600vh', background: 'var(--bg)' }}>
      {/* Sticky container stays in place while scrolling down through the 600vh section */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        <h2 className="font-bebas" style={{ 
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(6rem, 15vw, 14rem)', color: 'var(--border)', opacity: 0.05, zIndex: 0,
          pointerEvents: 'none', whiteSpace: 'nowrap'
        }}>
          EXPERIENCE
        </h2>

        {/* The horizontal scrolling track */}
        <motion.div style={{ x, display: 'flex', width: '600vw', height: '100%' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ 
              width: '100vw', 
              height: '100%',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              flexShrink: 0,
              padding: '2rem'
            }}>
               <div className="card-neo" style={{ 
                 maxWidth: '800px', 
                 width: '100%', 
                 padding: '4rem 2rem', 
                 background: 'var(--surface)',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 textAlign: 'center'
               }}>
                  <div className="font-mono" style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>
                    {exp.date}
                  </div>
                  <h3 className="font-bebas" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--cyan)', marginBottom: '1.5rem', letterSpacing: '1px', lineHeight: 1.1 }}>
                    {exp.role}
                  </h3>
                  <p className="font-space" style={{ color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px' }}>
                    {exp.desc}
                  </p>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
