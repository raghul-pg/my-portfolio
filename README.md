# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a sleek design with dark/light theme support, animated backgrounds, smooth transitions, and a fully responsive layout. Showcases skills, projects, and professional experience.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Theme Toggle** - Seamless theme switching with context API
- **Animated Background** - Custom animated background with dynamic orbs and particles
- **Smooth Animations** - Professional transitions with Framer Motion
- **Multi-page Navigation** - React Router for seamless page transitions
- **TypeScript** - Full type safety across the codebase
- **Fast Development** - Vite for lightning-fast HMR and builds
- **ESLint & Code Quality** - Pre-configured linting rules

## Pages

- **Home** - Landing page with introduction
- **About** - Personal background and story
- **Projects** - Showcase of portfolio projects
- **Skills** - Technical skills and expertise
- **Resume** - Downloadable resume and work experience
- **Contact** - Contact form and social links

## Technology Stack

- **Framework**: [React 19](https://react.dev/) with TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linting**: [ESLint](https://eslint.org/) with TypeScript support

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server with hot module reloading:

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder with minified and optimized files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── AnimatedBackground.tsx  # 3D background with Three.js
│   ├── Navbar.tsx      # Navigation bar
│   ├── ThemeToggle.tsx # Dark/light theme switcher
│   └── three/          # Three.js related components
├── contexts/           # React Context for state management
│   └── ThemeContext.tsx  # Theme state management
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ProjectsPage.tsx
│   ├── SkillsPage.tsx
│   ├── ResumePage.tsx
│   └── ContactPage.tsx
├── App.tsx             # Main app component
├── main.tsx           # React entry point
├── App.css            # App styles
└── index.css          # Global styles
```

## Customization

### Styling

- Global styles are in [src/index.css](src/index.css)
- Component-specific styles in [src/App.css](src/App.css)
- Tailwind configuration: [tailwind.config.cjs](tailwind.config.cjs)

### Theme

Edit the [ThemeContext.tsx](src/contexts/ThemeContext.tsx) to customize theme colors and add new theme options.

### Pages

Each page is a standalone component in the [pages](src/pages) directory. You can easily modify existing pages or add new ones by:

1. Creating a new `.tsx` file in the `pages` directory
2. Importing it in `App.tsx`
3. Adding a route in your router configuration

### Background

Customize the animated background in [AnimatedBackground.tsx](src/components/AnimatedBackground.tsx) with different Three.js objects and effects.

## Dependencies

Key dependencies and their purposes:

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.0 | UI library |
| react-router-dom | ^7.9.5 | Routing |
| three | ^0.181.1 | 3D graphics |
| @react-three/fiber | ^9.4.0 | React renderer for Three.js |
| framer-motion | ^12.23.24 | Animation library |
| tailwindcss | ^4.1.17 | Utility-first CSS |
| typescript | ^5.9.3 | Type safety |

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `tailwind.config.cjs` - Tailwind CSS configuration
- `postcss.config.cjs` - PostCSS configuration

## License

This project is open source and available under the MIT License.

## Contact

Have questions or suggestions? Feel free to reach out through the contact page.

---

Made with React + TypeScript + Vite
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
