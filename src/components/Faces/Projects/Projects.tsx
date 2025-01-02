import React, { useState } from 'react';
import Modal from './Modal';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFormik, SiTailwindcss, SiFirebase, SiGreensock, SiNestjs, SiRender, SiVercel, SiReact, SiVite } from 'react-icons/si';
import './Projects.css'; // Asegúrate de importar el CSS

interface Project {
  title: string;
  link: string;
  tools: React.ReactNode[];
}

const projects: Project[] = [
  {
    title: 'Ribuzz',
    link: 'https://ribuzz.vercel.app/',
    tools: [
      <FaReact key="react" className="text-blue-500" />,
      <SiTypescript key="typescript" className="text-blue-600" />,
      <SiNextdotjs key="nextjs" className="text-black" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
      <SiFormik key="formik" className="text-blue-400" />,
      <FaHtml5 key="html" className="text-orange-500" />,
      <FaCss3Alt key="css" className="text-blue-600" />,
      <FaJsSquare key="js" className="text-yellow-500" />,
    ],
  },
  {
    title: 'HabitTracker',
    link: 'https://habits-sandy-omega.vercel.app/login',
    tools: [
      <FaReact key="react" className="text-blue-500" />,
      <SiTypescript key="typescript" className="text-blue-600" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
      <SiNextdotjs key="nextjs" className="text-black" />,
      <SiFormik key="formik" className="text-blue-400" />,
      <SiFirebase key="firebase" className="text-yellow-500" />,
      <FaJsSquare key="js" className="text-yellow-500" />,
    ],
  },
  {
    title: 'Vino de Marte',
    link: 'https://vinodemarteoficial.vercel.app/',
    tools: [
      <FaReact key="react" className="text-blue-500" />,
      <SiNextdotjs key="nextjs" className="text-black" />,
      <SiTailwindcss key="tailwind" className="text-teal-600" />,
      <SiGreensock key="gsap" className="text-green-800" />,
    ],
  },
  {
    title: 'PocketCare',
    link: 'https://pocketcare.vercel.app/',
    tools: [
      <SiNextdotjs key="nextjs" className="text-black" />,
      <SiTailwindcss key="tailwind" className="text-teal-600" />,
      <SiNestjs key="nestjs" className="text-e83e8c" />,
      <SiRender key="render" className="text-blue-500" />,
      <SiVercel key="vercel" className="text-black" />,
    ],
  },
  {
    title: 'TodoList',
    link: 'https://simpletodolist-phi.vercel.app/',
    tools: [
      <SiVercel key="vercel" className="text-black" />,
      <SiReact key="react" className="text-blue-600" />,
      <SiVite key="vite" className="text-orange-600" />,
      <SiTailwindcss key="tailwind" className="text-teal-600" />,
      <SiTypescript key="typescript" className="text-blue-500" />,
    ],
  }
];

const Projects = ({ t }: { t: { projects: string; viewProject: string } }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-2 sm:p-4 md:p-6 text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{t.projects}</h1>
      <div className="projects-grid grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card p-2 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer bg-gradient-to-br from-gray-700 to-gray-900 text-white"
            onClick={() => handleProjectClick(project)}
          >
            <h2 className="project-title text-sm sm:text-base md:text-lg font-semibold mb-1 text-blue-300">{project.title}</h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link text-xs sm:text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {t.viewProject}
            </a>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          tools={selectedProject.tools}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Projects;
