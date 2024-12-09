import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Social.css';

interface SocialLink {
  icon: React.ElementType;
  url: string;
  name: string;
}

const Social = ({ t }: { t: { connect: string } }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socialLinks: SocialLink[] = [
    { icon: FaInstagram, url: "https://www.instagram.com/santialegree/", name: "Instagram" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/santiago-alegre-67b288193/", name: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/alegresantisp", name: "GitHub" },
  ];

  return (
    <div className="social-container">
      <h1 className="social-title">{t.connect}</h1>
      <div className="social-links">
        {socialLinks.map(({ icon: Icon, url, name }) => (
          <button
            key={name}
            className={`social-link ${name.toLowerCase()}-link`}
            onClick={() => handleLinkClick(url)}
          >
            <Icon className="social-icon" />
            <span className="social-name">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Social;
