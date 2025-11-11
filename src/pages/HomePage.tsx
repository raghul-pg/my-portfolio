import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="text-center z-10 px-4 w-full max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Raghul
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Backend Development | Node.js | Spring Boot | AI/ML
        </motion.p>
      </div>
    </div>
  );
};

export default HomePage;