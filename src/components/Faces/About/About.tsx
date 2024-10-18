import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 sm:p-6 md:p-8 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Acerca de mí</h1>
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
        Hola, soy Santiago Alegre, un desarrollador Full Stack con especialización en Front End. 
        Me enfoco en crear interfaces de usuario atractivas y funcionales utilizando tecnologías modernas.
        Tengo un nivel de inglés C2, lo que me permite comunicarme con fluidez y comprender documentación técnica sin problemas.
      </p>
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
        Podés <a href="/EFCertificate.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ver mi certificado acá</a>.
      </p>
      <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
        <span className="text-sm sm:text-base md:text-lg">🇦🇷 Vivo en Buenos Aires, Argentina.</span>
      </div>
    
    </div>
  );
};

export default About;
