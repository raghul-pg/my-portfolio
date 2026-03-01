import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';

const ResumePage = () => {
  const resumeUrl = '/resume.pdf';

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-16">
      <div style={{ width: '100%', maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#1e3a8a' }}
          className="text-4xl sm:text-5xl font-bold text-center"
        >
          Resume
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ color: '#3b82f6', fontSize: '14px', textAlign: 'center', marginBottom: '0.5rem' }}
        >
          View or download my latest resume
        </motion.p>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            borderRadius: '22px',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(99,102,241,0.13)',
          }}
          className="bg-white dark:bg-gray-800"
        >
          {/* Top accent stripe */}
          <div style={{
            height: '5px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
          }} />

          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>

            {/* PDF icon */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35, type: 'spring', stiffness: 200 }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                color: 'white',
                boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
              }}
            >
              <FaFilePdf />
            </motion.div>

            {/* File info */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px', color: '#1e3a8a' }}>
                Resume.pdf
              </p>
              <p style={{ fontSize: '13px', color: '#3b82f6' }}>
              </p>
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: '1px' }} className="bg-gray-100 dark:bg-gray-700" />

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', width: '100%' }}>
              {/* View button */}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: 'white',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                  flex: '1 1 140px',
                  justifyContent: 'center',
                }}
              >
                <FaEye style={{ fontSize: '15px' }} />
                View Resume
              </motion.a>

              {/* Download button */}
              <motion.a
                href={resumeUrl}
                download="Raghul_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: '#6366f1',
                  background: 'rgba(99,102,241,0.10)',
                  border: '1.5px solid rgba(99,102,241,0.30)',
                  flex: '1 1 140px',
                  justifyContent: 'center',
                }}
              >
                <FaDownload style={{ fontSize: '14px' }} />
                Download
              </motion.a>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ResumePage;