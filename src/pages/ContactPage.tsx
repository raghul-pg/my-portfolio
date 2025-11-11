import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const contacts = [
    {
      platform: 'GitHub',
      icon: <FaGithub className="text-4xl" />,
      link: 'https://github.com/raghul-pg',
      username: '@raghul'
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin className="text-4xl" />,
      link: 'https://linkedin.com/in/raghul-pg',
      username: 'Raghul G'
    },
    {
      platform: 'Email',
      icon: <FaEnvelope className="text-4xl" />,
      link: 'mailto:raghul2006g_bcs27@mepcoeng.ac.in',
      username: 'Raghul G'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h1>

        {/* Contact Cards - Stacked Vertically */}
        <div className="flex flex-col items-center gap-12 mb-12 w-full">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.platform}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-3 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {/* Logo */}
                <div className="text-blue-600 dark:text-blue-400">
                  {contact.icon}
                </div>
                
                {/* Platform Name Only */}
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  {contact.platform}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-lg text-gray-700 dark:text-gray-300 border-t pt-8 w-full max-w-xs"
        >
          <p className="font-semibold">Location: Virudhunagar</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;