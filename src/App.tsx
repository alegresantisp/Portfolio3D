import React, { useState } from 'react';
import Cube from './components/Cube';
import translations from './components/translations';

const App = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <div className="app min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Cube t={t} language={language} toggleLanguage={toggleLanguage} />
    </div>
  );
};

export default App;
