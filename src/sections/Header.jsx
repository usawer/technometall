import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo_small from '../assets/logo_small.png';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== '/') {
    
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <img src={logo_small} alt="Technometall Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.home')}
          </Link>
          <button
            onClick={() => handleSectionNavigation('about')}
            className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            {t('header.about')}
          </button>
          <button
            onClick={() => handleSectionNavigation('services')}
            className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            {t('header.services')}
          </button>
          <button
            onClick={() => handleSectionNavigation('portfolio')}
            className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            {t('header.portfolio')}
          </button>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.gallery')}
          </Link>
          <Link to="/hirek" className="text-gray-700 hover:text-blue-600 transition-colors">
            Hírek
          </Link>
          <Link to="/karrier" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('header.career')}
          </Link>
          <button
            onClick={() => handleSectionNavigation('contact')}
            className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            {t('header.contact')}
          </button>
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
