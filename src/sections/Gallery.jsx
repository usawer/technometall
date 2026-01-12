import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

// Import gallery images - using new high-quality images from jpeg directory
import technometall from '../assets/Gallery/technometall.jpg';
import szerszam1 from '../assets/Gallery/szerszam1.jpg';
import dmu from '../assets/Gallery/DMU.jpg';
import szerszam2 from '../assets/Gallery/szerszam2.jpg';
import szerszam3 from '../assets/Gallery/szerszam3.jpg';
import cncMachine from '../assets/Gallery/jpeg/Technometall20130110_0001.jpg';
import toolManufacturing from '../assets/Gallery/jpeg/Technometall20130110_0015.jpg';
import precisionParts from '../assets/Gallery/jpeg/Technometall20130110_0025.jpg';
import assemblyLine from '../assets/Gallery/jpeg/2016_06.jpg';
import qualityControl from '../assets/Gallery/jpeg/global_CMM.JPG';
import specialMachines from '../assets/Gallery/jpeg/Technometall20130110_0040.jpg';
import grindingOperations from '../assets/Gallery/jpeg/Technometall20130110_0050.jpg';
import heatTreatment from '../assets/Gallery/jpeg/Technometall20130110_0060.jpg';

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

const Gallery = () => {
  const { t } = useLanguage();

  // Gallery images data - using new high-quality images
  const galleryImages = [
    {
      id: 1,
      src: technometall,
      alt: t('gallery.image1.title'),
      title: t('gallery.image1.title'),
      description: t('gallery.image1.description')
    },
    {
      id: 2,
      src: szerszam1,
      alt: t('gallery.image2.title'),
      title: t('gallery.image2.title'),
      description: t('gallery.image2.description')
    },
    {
      id: 3,
      src: cncMachine,
      alt: 'Advanced CNC Machining Center',
      title: 'Advanced CNC Machining Center',
      description: 'State-of-the-art CNC technology for precision manufacturing'
    },
    {
      id: 4,
      src: toolManufacturing,
      alt: 'High-Precision Tool Manufacturing',
      title: 'High-Precision Tool Manufacturing',
      description: 'Custom-designed cold forming tools with exceptional accuracy'
    },
    {
      id: 5,
      src: precisionParts,
      alt: 'Precision Component Production',
      title: 'Precision Component Production',
      description: 'High-accuracy machined parts for automotive and industrial applications'
    },
    {
      id: 6,
      src: assemblyLine,
      alt: 'Complete Tool Assembly',
      title: 'Complete Tool Assembly',
      description: 'Professional assembly of large-scale tools and production equipment'
    },
    {
      id: 7,
      src: qualityControl,
      alt: 'Quality Control & Measurement',
      title: 'Quality Control & Measurement',
      description: 'Advanced metrology equipment ensuring precision and quality standards'
    },
    {
      id: 8,
      src: specialMachines,
      alt: 'Special Purpose Machinery',
      title: 'Special Purpose Machinery',
      description: 'Custom-designed special machines for increased manufacturing efficiency'
    },
    {
      id: 9,
      src: dmu,
      alt: t('gallery.image10.title'),
      title: t('gallery.image10.title'),
      description: t('gallery.image10.description')
    },
    {
      id: 10,
      src: szerszam2,
      alt: t('gallery.image12.title'),
      title: t('gallery.image12.title'),
      description: t('gallery.image12.description')
    },
    {
      id: 11,
      src: szerszam3,
      alt: t('gallery.image13.title'),
      title: t('gallery.image13.title'),
      description: t('gallery.image13.description')
    }
  ];



  return (
    <div id='gallery' className="w-full py-[80px] bg-gray-50">
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-[40px]'
      >
        <div className="text-center">
          <motion.h2 variants={slideUpVariants} className='text-blue-400 uppercase text-sm font-semibold tracking-widest'>
            {t('gallery.title', 'OUR REFERENCE WORKS')}
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className='text-gray-800 text-[40px] font-extrabold mt-1 mb-4'>
            {t('gallery.mainTitle', 'Machine Gallery')}
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-blue-400 mx-auto'></div>
          <motion.p variants={slideUpVariants} className='text-gray-600 text-lg mt-4 max-w-2xl mx-auto'>
            {t('gallery.description', 'Explore our portfolio of precision machining, tool manufacturing, and special machine projects. Each piece represents our commitment to quality and innovation.')}
          </motion.p>
        </div>

        <motion.div
          variants={slideUpVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.slice(0, 6).map((image) => (
            <motion.div
              key={image.id}
              variants={slideUpVariants}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={slideUpVariants} className="text-center mt-8">
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 mr-4"
            >
              {t('gallery.viewFullGallery', 'View Full Gallery')}
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('gallery.contactButton', 'Get Quote')}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallery;
