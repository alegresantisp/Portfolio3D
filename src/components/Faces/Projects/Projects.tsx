import React, { useState } from 'react';
import Modal from './Modal';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFormik, SiTailwindcss, SiFirebase, SiGreensock } from 'react-icons/si';
import './Projects.css'; // Asegúrate de importar el CSS

const projects = [
  {
    title: 'Ribuzz',
    description: 'Una plataforma social para conectar y compartir.',
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
    title: 'Habits',
    description: 'Una aplicación para rastrear y mejorar tus hábitos diarios.',
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
    description: 'Un sitio web dedicado a los amantes del vino.',
    link: 'https://vinodemarteoficial.vercel.app/',
    tools: [
      <FaReact key="react" className="text-blue-500" />,
      <SiNextdotjs key="nextjs" className="text-black" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
      <SiGreensock key="gsap" className="text-green-500" />,
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 sm:p-6 md:p-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card p-2 sm:p-3 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer bg-gradient-to-br from-gray-700 to-gray-900 text-white"
            onClick={() => handleProjectClick(project)}
          >
            <h2 className="project-title text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-blue-300">{project.title}</h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link text-xs sm:text-sm text-blue-400 hover:text-blue-300 underline"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
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
