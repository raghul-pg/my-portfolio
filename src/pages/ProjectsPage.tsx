import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl?: string;
  emoji?: string;
}

const projects: Project[] = [
  {
    title: "Weather App",
    emoji: "🌦️",
    description: "Developed a real-time weather forecasting web application built using Spring Boot and the OpenWeather API. It displays current weather details and forecasts based on city search with a responsive UI.",
    techStack: "SpringBoot | OpenWeather API",
    githubUrl: "https://github.com/raghul-pg/weather-app-springboot-",
    liveUrl: "https://aeronow.onrender.com"
  },
  {
    title: "Beverage Dispatch System",
    emoji: "🥤",
    description: "Developed a web-based management system designed for medium-scale beverage industries to manage order placement, dispatch tracking, and demand forecasting. Implemented payment methods and data visualization for demand products.",
    techStack: "Python|Flask|Chart.js",
    githubUrl: "https://github.com/raghul-pg/smartflow"
  },
  {
    title: "Personal Portfolio Website",
    emoji: "💼",
    description: "Developed a portfolio website showcasing projects and skills. Built using React with Vite for fast performance and Tailwind CSS for minimal UI. Includes sections for contact info, resume, and project links.",
    techStack: "React|Vite|Tailwind CSS",
    githubUrl: "https://github.com/raghul-pg/my-portfolio"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full flex flex-col"
    >
      <div className="flex items-start gap-3 mb-3">
        {project.emoji && <span className="text-2xl">{project.emoji}</span>}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow text-left">
        {project.description}
      </p>
      
      {/* Tech Stack Section */}
      <div className="w-full mb-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Tech Stack:</span> "{project.techStack}"
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Links Section */}
      <div className="flex flex-col gap-3 mt-6 pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium text-center"
          >
            Live
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
        >
          <FaGithub className="text-lg" />
          <span>GitHub</span>
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  // Split projects for custom layout: first 2 in a row, last centered below
  const firstRow = projects.slice(0, 2);
  const secondRow = projects.slice(2);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Projects
        </motion.h1>
        {/* First row: 2 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {firstRow.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        {/* Second row: 1 project centered */}
        <div className="flex justify-center">
          {secondRow.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 2) * 0.1 }}
              className="w-full md:w-1/2"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;