import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Connect with Me</h1>
      <div className="flex space-x-6 text-4xl">
        <a
          href="https://www.instagram.com/santialegree/" // Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-alegre-67b288193/" // LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/alegresantisp" // GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Social;
