import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactCard {
  platform: string;
  handle: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
}

const contacts: ContactCard[] = [
  {
    platform: 'GitHub',
    handle: '@raghul-pg',
    description: 'Check out my projects and code',
    link: 'https://github.com/raghul-pg',
    icon: <FaGithub />,
    gradient: 'from-gray-700 to-gray-900',
    iconBg: 'rgba(255,255,255,0.12)',
  },
  {
    platform: 'LinkedIn',
    handle: 'Raghul G',
    description: "Let's connect professionally",
    link: 'https://linkedin.com/in/raghul-pg',
    icon: <FaLinkedin />,
    gradient: 'from-blue-500 to-blue-700',
    iconBg: 'rgba(255,255,255,0.15)',
  },
  {
    platform: 'Email',
    handle: 'raghul2006g_bcs27@mepcoeng.ac.in',
    description: 'Drop me a message anytime',
    link: 'mailto:raghul2006g_bcs27@mepcoeng.ac.in',
    icon: <FaEnvelope />,
    gradient: 'from-rose-500 to-pink-700',
    iconBg: 'rgba(255,255,255,0.15)',
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-16">
      <div style={{ width: '100%', maxWidth: '720px' }}>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: '#1e3a8a' }}
          className="text-4xl sm:text-5xl font-bold mb-3 text-center"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ color: '#3b82f6', fontSize: '14px', textAlign: 'center', marginBottom: '3.5rem' }}
        >
          I'm always open to new opportunities and conversations
        </motion.p>

        {/* Contact Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.platform}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.025, x: 6 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                textDecoration: 'none',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                transition: 'box-shadow 0.25s',
              }}
              className={`bg-gradient-to-r ${contact.gradient}`}
            >
              {/* Icon block */}
              <div
                style={{
                  width: '80px',
                  minWidth: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: 'white',
                  background: contact.iconBg,
                }}
              >
                {contact.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1, paddingRight: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.65)',
                    marginBottom: '2px',
                  }}
                >
                  {contact.platform}
                </p>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '2px',
                    wordBreak: 'break-all',
                  }}
                >
                  {contact.handle}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  {contact.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                style={{
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.5)',
                  paddingRight: '1.25rem',
                  flexShrink: 0,
                }}
              >
                →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '2.5rem',
          }}
        >
          <FaMapMarkerAlt style={{ color: '#f87171', fontSize: '16px' }} />
          <span
            style={{ fontSize: '14px', color: '#3b82f6' }}
          >
            Virudhunagar, Tamil Nadu, India
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;