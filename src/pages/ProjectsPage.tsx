import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';

interface Project {
  title: string;
  shortTitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  emoji: string;
  gradient: string;
  border: string;
}

const projects: Project[] = [
  {
    title: "Examination Portal for Descriptive Type Questions",
    shortTitle: "Examination Portal",
    emoji: "📝",
    description:
      "Built a web portal to evaluate descriptive answers using machine learning algorithms. Implemented full-screen locking and copy-paste prevention to maintain exam integrity. Developed backend APIs using Node.js and handled all database operations with MySQL.",
    techStack: ["Node.js", "Express", "MySQL", "ML Algorithms"],
    githubUrl: "https://github.com/raghul-pg",
    gradient: "from-violet-500 via-purple-600 to-indigo-700",
    border: "border-violet-400",
  },
  {
    title: "Cafe Ordering System – Backend Application",
    shortTitle: "Cafe Ordering System",
    emoji: "☕",
    description:
      "Designed and developed RESTful APIs for menu management, order processing, and reservation handling. Tested using Postman. Implemented secure authentication using JWT and optimized relational database schemas for performance.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/raghul-pg",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    border: "border-amber-400",
  },
  {
    title: "Event Booking System",
    shortTitle: "Event Booking System",
    emoji: "🎟️",
    description:
      "Developed a full-stack event booking system enabling users to browse, book, and manage event reservations. Implemented user authentication, admin event management dashboard, and booking history features with a responsive React frontend.",
    techStack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    githubUrl: "https://github.com/raghul-pg",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    border: "border-emerald-400",
  },
];

const ProjectsPage = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#1e3a8a' }}
          className="text-4xl sm:text-5xl font-bold mb-3 text-center"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#3b82f6', fontSize: '14px', marginBottom: '3.5rem' }}
        >
          Tap a project to learn more
        </motion.p>

        {/* 3 Square Project Cards */}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}
        >
          {projects.map((project, index) => (
            <motion.button
              key={project.shortTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelected(project)}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
              className={`bg-gradient-to-br ${project.gradient}`}
            >
              {/* Glow ring on hover */}
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  border: '2px solid rgba(255,255,255,0.25)',
                  pointerEvents: 'none',
                }}
              />
              {/* Emoji */}
              <span style={{ fontSize: '56px', lineHeight: 1 }}>{project.emoji}</span>
              {/* Name */}
              <span
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  textAlign: 'center',
                  lineHeight: '1.3',
                  padding: '0 16px',
                }}
              >
                {project.shortTitle}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9998,
                backgroundColor: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(6px)',
              }}
            />

            {/* Modal Box */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                pointerEvents: 'none',
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  pointerEvents: 'auto',
                  width: '100%',
                  maxWidth: '500px',
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative',
                }}
                className="dark:bg-gray-900"
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#9ca3af',
                    fontSize: '18px',
                    lineHeight: 1,
                    padding: '4px',
                  }}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    }}
                    className={`bg-gradient-to-br ${selected.gradient}`}
                  >
                    {selected.emoji}
                  </div>
                  <h2
                    style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: '1.4', color: '#1e3a8a' }}
                  >
                    {selected.title}
                  </h2>
                </div>

                {/* Description */}
                <p
                  style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#1e40af' }}
                >
                  {selected.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      color: '#3b82f6',
                    }}
                  >
                    Tech Stack
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selected.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '4px 12px',
                          borderRadius: '999px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          background: 'rgba(29,78,216,0.09)',
                          color: '#1d4ed8',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


                {/* GitHub Button */}
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'white',
                    backgroundColor: '#1e3a8a',
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                    transition: 'background 0.2s',
                  }}
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence >
    </>
  );
};

export default ProjectsPage;