import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Technometall
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.home')}
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.about')}
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.services')}
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.portfolio')}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.contact')}
          </a>
        </nav>
        <button
          onClick={toggleLanguage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          {language === 'hu' ? 'EN' : 'HU'}
        </button>
      </div>
    </header>
  );
};

export default Header;
