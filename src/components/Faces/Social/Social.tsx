import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Social.css'; // Importa el archivo de estilos

const Social = () => {
    const handleLinkClick = (platform: string) => {
        console.log(`Clicked on ${platform}`);
      };
    
      return (
        <div className="social-container">
          <h1 className="social-title">Connect with Me</h1>
          <div className="social-links">
            <a
              href="https://www.instagram.com/santialegree/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram-link"
              onClick={() => handleLinkClick('Instagram')} // Añade onClick
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-alegre-67b288193/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin-link"
              onClick={() => handleLinkClick('LinkedIn')} // Añade onClick
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/alegresantisp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github-link"
              onClick={() => handleLinkClick('GitHub')} // Añade onClick
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>
      );
    };

export default Social;
