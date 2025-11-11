import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              About Me
            </h1>
            <div className="prose dark:prose-invert mx-auto text-center">
              <p className="mb-4">
                Hi I'm Raghul ,an undergraduate student with interest in backend development using Springboot and node js. 
                Exploring how AI can be used with backend development to create efficient applications.
              </p>
              <h2 className="text-2xl font-semibold mt-6 mb-4">Education</h2>
              <ul className="list-disc pl-5 space-y-2 mx-auto" style={{maxWidth: '36rem'}}>
                <li>B.E Computer Science and Engineering, Mepco Schlenk Engineering College, 2023 - Present</li>
              </ul>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;