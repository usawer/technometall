import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const slideUpVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
};

const Portfolio = () => {
  const { t } = useLanguage();

  const portfolioProjects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.description'),
      icon: '🔧'
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.description'),
      icon: '⚙️'
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.description'),
      icon: '🏭'
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      description: t('portfolio.project4.description'),
      icon: '🔬'
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      description: t('portfolio.project5.description'),
      icon: '🔨'
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      description: t('portfolio.project6.description'),
      icon: '📏'
    }
  ];

  return (
    <div id='portfolio' className="w-full py-[80px] bg-white">
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-[40px]'
      >
        <div className="text-center">
          <motion.h2 variants={slideUpVariants} className='text-blue-400 uppercase text-sm font-semibold tracking-widest'>
            {t('portfolio.title', 'OUR PORTFOLIO')}
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className='text-gray-800 text-[40px] font-extrabold mt-1 mb-4'>
            {t('portfolio.mainTitle', 'Portfolio')}
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-blue-400 mx-auto'></div>
          <motion.p variants={slideUpVariants} className='text-gray-600 text-lg mt-4 max-w-2xl mx-auto'>
            {t('portfolio.description', 'Discover our diverse portfolio of projects showcasing expertise in precision machining, tool manufacturing, and innovative solutions.')}
          </motion.p>
        </div>

        <motion.div
          variants={slideUpVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={slideUpVariants}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={slideUpVariants} className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 mr-4"
          >
            {t('portfolio.viewFullPortfolio', 'View Full Portfolio')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('portfolio.contactButton', 'Get Quote')}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
