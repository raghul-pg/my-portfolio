import { motion } from 'framer-motion';
import { 
  FaNodeJs, FaDocker, FaGitAlt, 
  FaPython, FaJava
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMongodb, SiMysql
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const allSkills: Skill[] = [
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'JavaScript', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Vertex AI', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-5xl text-blue-600 dark:text-blue-400 mb-3">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
        {skill.name}
      </h3>
    </motion.div>
  );
};

const SkillsPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;