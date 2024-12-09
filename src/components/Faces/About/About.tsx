import React from 'react';
import { FaFilePdf } from 'react-icons/fa';  // Importar el ícono

interface AboutProps {
  t: {
    aboutMe: string;
    hello: string;
    certificate: string;
    live: string;
  };
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 sm:p-6 md:p-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{t.aboutMe}</h1>
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
        {t.hello} 
      </p>
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
        {t.certificate} 
        <a 
          href="/EFCertificate.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 items-center inline-block"
        >
          <FaFilePdf className="text-red-500 ml-2" /> {/* Ícono del PDF */}
         
        </a>
      </p>
      <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
        <span className="text-sm sm:text-base md:text-lg">{t.live}</span>
      </div>
    </div>
  );
};

export default About;
