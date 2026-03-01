import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="text-center z-10 px-4 w-full max-w-3xl mx-auto">

        {/* Name — solid dark blue, clean weight */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#1e3a8a',          /* dark blue — indigo-900 */
            marginBottom: '14px',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          }}
        >
          Raghul
        </motion.h1>

        {/* Role tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
            fontWeight: 500,
            letterSpacing: '0.01em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          }}
          className="text-gray-600 dark:text-gray-300"
        >
          Backend Development &nbsp;·&nbsp; Java &nbsp;·&nbsp; Spring Boot &nbsp;·&nbsp; SQL
        </motion.p>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          style={{
            height: '4px',
            width: '72px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #1e3a8a, #0ea5e9)',
            margin: '18px auto 0',
            transformOrigin: 'center',
          }}
        />

      </div>
    </div>
  );
};

export default HomePage;