import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFormik, SiFirebase, SiExpress, SiNextdotjs, SiMongodb, SiNestjs  } from 'react-icons/si';


const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full p-4 sm:p-6 md:p-8">
      {/* Imagen centrada */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 sm:mb-6 md:mb-0">
        <img
          src="/imagen1.png" 
          alt="Santiago Alegre"
          className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
      </div>
      
      {/* Texto y detalles a la derecha */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Desarrollador Full Stack</h1>
        <h2 className="text-xs sm:text-sm text-white mb-3 sm:mb-1 md:mb-2 sm:mt-1 md:mt-1">Especializado en Front End</h2>
        <h2 className="text-xl sm:text-2xl text-gray-500 mb-3 sm:mb-4 md:mb-6">Santiago Alegre</h2>
        
        {/* Íconos de tecnologías */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl">
          <FaReact className="text-blue-500" />
          <SiTypescript className="text-blue-600" />
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-600" />
          <FaJsSquare className="text-yellow-500" />
          <FaGitAlt className="text-orange-600" />
          <FaNodeJs className="text-green-600" />
          <SiNestjs className="text-red-600" />
          <SiTailwindcss className="text-teal-400" />
          <SiFormik className="text-yellow-600" />
          <SiFirebase className="text-yellow-500" />
          <SiExpress className="text-gray-500" />
          <SiNextdotjs className="text-black" />
          <SiMongodb className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
