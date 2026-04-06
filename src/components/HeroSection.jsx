import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 2rem 2rem 2rem',
    }}>
      {/* Blueprint Grid Background */}
      <motion.div style={{
        position: 'absolute', inset: 0, zIndex: -1, y: yBg,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.2
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center'
      }}>
        {/* Left Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ flex: '1 1 500px' }}>
          <motion.div variants={itemVariants} style={{
            fontFamily: 'JetBrains Mono', color: 'var(--cyan)',
            fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem',
            letterSpacing: '2px'
          }}>
            GEN AI · DATA SCIENCE · DESIGN
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-bebas" style={{
            fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: 0.9,
            marginBottom: '1rem', color: '#FFFFFF', WebkitTextStroke: '1px #000000', textShadow: '4px 4px 0 var(--shadow)'
          }}>
            YUGANK DAS
          </motion.h1>
          <motion.h2 variants={itemVariants} className="font-space" style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--lime)',
            marginBottom: '1.5rem'
          }}>
            AI, Data, Building and Design Savvy
          </motion.h2>
          <motion.p variants={itemVariants} style={{
            fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem',
            maxWidth: '500px', lineHeight: 1.6
          }}>
            I’m a Gen AI and Data Science geek who also loves design and consumer products.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-neo btn-cyan-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>
              View Projects
            </a>
            <a href="#contact" className="btn-neo btn-cyan-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Floating Cards */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="floating-cards"
          style={{ flex: '1 1 400px', position: 'relative', minHeight: '400px' }}>
          
          {[
            { text: 'Data Science', top: '10%', left: '10%', delay: 0 },
            { text: 'Gen AI', top: '30%', left: '40%', delay: 0.2 },
            { text: 'EDA', top: '60%', left: '20%', delay: 0.4 },
            { text: 'Design', top: '80%', left: '50%', delay: 0.6 },
            { text: 'Leadership', top: '50%', left: '70%', delay: 0.8 },
          ].map((tag, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut", delay: tag.delay }}
              style={{
                position: 'absolute', top: tag.top, left: tag.left,
                background: 'var(--surface)', padding: '1rem 1.5rem',
                border: '3px solid var(--border)', boxShadow: '8px 8px 0 var(--shadow)',
                fontFamily: 'JetBrains Mono', fontWeight: 700, color: 'var(--cyan)',
                whiteSpace: 'nowrap'
              }}
            >
              {tag.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .floating-cards {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
