import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const ResumePage = () => {
  // Resume URL - place your resume.pdf file in the public folder
  const resumeUrl = '/resume.pdf';

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
        >
          Resume
        </motion.h1>

        <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaEye />
              View Resume
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;