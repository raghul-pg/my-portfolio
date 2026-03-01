import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaUserGraduate } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16">
      <div style={{ width: '100%', maxWidth: '660px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#1e3a8a', marginBottom: '0.25rem' }}
          className="text-4xl sm:text-5xl font-bold text-center"
        >
          About Me
        </motion.h1>

        {/* ── Bio Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{
            borderRadius: '22px',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(99,102,241,0.13)',
            position: 'relative',
          }}
          className="bg-white dark:bg-gray-800"
        >
          {/* Top accent stripe */}
          <div style={{
            height: '5px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
          }} />

          <div style={{ padding: '2rem' }}>
            {/* Who I am label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <FaUserGraduate style={{ color: '#8b5cf6', fontSize: '18px' }} />
              <span
                style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3b82f6' }}
              >
                Who I Am
              </span>
            </div>

            {/* Bio text */}
            <p
              style={{ fontSize: '15px', lineHeight: '1.85', color: '#1e40af' }}
            >
              Hi, I'm{' '}
              <span style={{ fontWeight: 700, color: '#1e3a8a' }}>
                Raghul
              </span>
              {' '}a Computer Science undergraduate with strong fundamentals in Java, SQL,
              OOP, and backend development. I have hands-on experience with Spring Boot and a
              solid understanding of REST APIs and database design.
            </p>

            {/* Location row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '1.25rem' }}>
              <FaMapMarkerAlt style={{ color: '#f87171', fontSize: '14px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#3b82f6' }}>
                Virudhunagar, Tamil Nadu, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Education Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          style={{
            borderRadius: '22px',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(99,102,241,0.10)',
          }}
          className="bg-white dark:bg-gray-800"
        >
          {/* Top accent stripe */}
          <div style={{
            height: '5px',
            background: 'linear-gradient(90deg, #10b981, #06b6d4)',
          }} />

          <div style={{ padding: '2rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <FaGraduationCap style={{ color: '#10b981', fontSize: '18px' }} />
              <span
                style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                className="text-gray-400 dark:text-gray-500"
              >
                Education
              </span>
            </div>

            {/* Timeline entry */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              {/* Left: dot + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5px', flexShrink: 0 }}>
                <div style={{
                  width: '13px',
                  height: '13px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                  boxShadow: '0 0 0 3px rgba(16,185,129,0.2)',
                }} />
                <div style={{ width: '2px', height: '48px', marginTop: '6px', background: 'rgba(16,185,129,0.2)' }} />
              </div>

              {/* Right: content */}
              <div>
                <p style={{ fontSize: '16px', fontWeight: 700, marginBottom: '3px', color: '#1e3a8a' }}>
                  B.E Computer Science and Engineering
                </p>
                <p style={{ fontSize: '13px', marginBottom: '10px', color: '#3b82f6' }}>
                  Mepco Schlenk Engineering College
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 12px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: 'rgba(16,185,129,0.12)',
                  color: '#10b981',
                  border: '1px solid rgba(16,185,129,0.3)',
                }}>
                  📅 2023 – Present
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;