import { motion } from 'framer-motion';
import {
  FaJava, FaNodeJs, FaGitAlt, FaDatabase, FaReact,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiMysql, SiPostgresql,
  SiPostman, SiJsonwebtokens, SiExpress, SiJavascript,
  SiHtml5, SiCss3, SiGithub,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

interface Category {
  label: string;
  emoji: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    label: 'Languages',
    emoji: '',
    skills: [
      { name: 'Java', icon: <FaJava />, color: '#f89820', bg: 'rgba(248,152,32,0.12)' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', bg: 'rgba(247,223,30,0.12)' },
      { name: 'SQL', icon: <FaDatabase />, color: '#4479a1', bg: 'rgba(68,121,161,0.12)' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    emoji: '',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f', bg: 'rgba(109,179,63,0.12)' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', bg: 'rgba(104,160,99,0.12)' },
      { name: 'Express.js', icon: <SiExpress />, color: '#2563eb', bg: 'rgba(37,99,235,0.12)' },
    ],
  },
  {
    label: 'Databases',
    emoji: '',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', bg: 'rgba(68,121,161,0.12)' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', bg: 'rgba(71,162,72,0.12)' },
    ],
  },
  {
    label: 'Tools & Other',
    emoji: '',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032', bg: 'rgba(240,80,50,0.12)' },
      { name: 'GitHub', icon: <SiGithub />, color: '#2563eb', bg: 'rgba(37,99,235,0.12)' },
      { name: 'Postman', icon: <SiPostman />, color: '#ff6c37', bg: 'rgba(255,108,55,0.12)' },
      { name: 'JWT', icon: <SiJsonwebtokens />, color: '#d63aff', bg: 'rgba(214,58,255,0.12)' },

    ],
  },
];

const SkillPill = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.07, y: -3 }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '20px 16px',
      borderRadius: '16px',
      background: skill.bg,
      border: `1.5px solid ${skill.color}33`,
      minWidth: '90px',
      cursor: 'default',
      transition: 'box-shadow 0.2s',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    }}
  >
    <span style={{ fontSize: '36px', color: skill.color, lineHeight: 1, display: 'flex' }}>
      {skill.icon}
    </span>
    <span
      style={{
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
      className="text-gray-700 dark:text-gray-200"
    >
      {skill.name}
    </span>
  </motion.div>
);

const SkillsPage = () => {
  let delayCounter = 0;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16">
      <div style={{ width: '100%', maxWidth: '860px' }}>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#083d92', fontSize: '50px', textAlign: 'center', marginBottom: '0.5rem' }}
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#3b82f6', fontSize: '14px', textAlign: 'center', marginBottom: '0.5rem' }}
        >
          Technologies I work with
        </motion.p>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {categories.map((cat, catIndex) => {
            const catDelay = delayCounter;
            delayCounter += cat.skills.length * 0.07;

            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{cat.emoji}</span>
                  <h2
                    style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {cat.label}
                  </h2>
                  {/* Divider line */}
                  <div
                    style={{ flex: 1, height: '1px' }}
                    className="bg-gray-200 dark:bg-gray-700"
                  />
                </div>

                {/* Skill pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {cat.skills.map((skill, i) => (
                    <SkillPill
                      key={skill.name}
                      skill={skill}
                      delay={catDelay + i * 0.07}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;