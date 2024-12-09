import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaNodeJs, FaLanguage  } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';
import { SiTypescript, SiTailwindcss, SiFormik, SiFirebase, SiExpress, SiNextdotjs, SiMongodb, SiNestjs } from 'react-icons/si';

interface HomeProps {
  t: { 
    developer: string;
    specialized: string;
  };
  language: 'es' | 'en';
  toggleLanguage: () => void;
}

const Home: React.FC<HomeProps> = ({ t, language, toggleLanguage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full p-4 sm:p-6 md:p-8">
        {/* Language toggle button */}
        <div className="absolute top-4 left-4">
        <button 
          onClick={toggleLanguage} 
          className="text-md sm:text-lg text-white rounded-full "
        >
          {language === 'es' ? (
            <>
              <FaLanguage className="inline-block " /> 
            </>
          ) : (
            <>
              <IoIosGlobe className="inline-block " /> 
            </>
          )}
        </button>
      </div>
      
      {/* Imagen centrada */}
      <div className="w-full md:w-1/2 flex justify-center mb-1 sm:mb-6 md:mb-0">
        <img
          src="/imagen1.png" 
          alt="Santiago Alegre"
          className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
      </div>
      
      {/* Texto y detalles a la derecha */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{t.developer}</h1>
        <h2 className="text-xs sm:text-sm text-white mb-3 sm:mb-1 md:mb-2 sm:mt-1 md:mt-1">{t.specialized}</h2>
        <h2 className="text-xl sm:text-2xl text-gray-500 mb-3 sm:mb-4 md:mb-6">Santiago Alegre</h2>
        
        {/* Íconos de tecnologías */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl text-blue-500">
          <FaReact className="text-blue-600 text-3xl" />
          <FaJsSquare className="text-yellow-500 text-3xl" />
          <SiTypescript className="text-blue-500 text-3xl" />
          <SiNextdotjs className="text-black text-3xl" />
          <FaNodeJs className="text-green-600 text-3xl" />
          <SiExpress className="text-black text-3xl" />
          <SiNestjs className="text-red-600 text-3xl" />
          <FaHtml5 className="text-orange-600 text-3xl" />
          <FaCss3Alt className="text-blue-500 text-3xl" />
          <SiTailwindcss className="text-teal-400 text-3xl" />
          <FaGitAlt className="text-gray-500 text-3xl" />
          <SiMongodb className="text-green-800 text-3xl" />
          <SiFirebase className="text-yellow-600 text-3xl" />
          <SiFormik className="text-pink-500 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
