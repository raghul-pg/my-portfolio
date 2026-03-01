import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen transition-colors pt-16">
          <AnimatedBackground />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </Router>
  );
}
