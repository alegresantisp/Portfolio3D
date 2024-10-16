import React from 'react';
import { FaFlag } from 'react-icons/fa'; // Usamos el ícono de la bandera

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 sm:p-6 md:p-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">About Me</h1>
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
        Hola, soy Santiago Alegre, un apasionado desarrollador Front End. 
        Me encanta crear interfaces de usuario atractivas y funcionales utilizando tecnologías modernas.
        Tengo un nivel de inglés C2, lo que me permite comunicarme con fluidez y comprender documentación técnica sin problemas.
      </p>
      <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
        <FaFlag className="text-2xl sm:text-3xl md:text-4xl text-blue-500 mr-1 sm:mr-2" />
        <span className="text-sm sm:text-base md:text-lg">🇦🇷 Living in Argentina</span>
      </div>
      <p className="text-sm sm:text-base md:text-lg">
        Siempre estoy aprendiendo y mejorando mis habilidades para ofrecer la mejor experiencia de usuario.
      </p>
    </div>
  );
};

export default About;
