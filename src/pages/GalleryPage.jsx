import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

// Import gallery images - using diverse high-quality images from jpeg directory
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
import wireEDM from '../assets/Gallery/jpeg/Technometall20130110_0035.jpg';
import surfaceGrinding from '../assets/Gallery/jpeg/tos_sikkoszoru1.jpg';

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

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  
  const galleryImages = [
    {
      id: 1,
      src: technometall,
      alt: t('gallery.image1.title'),
      title: t('gallery.image1.title'),
      description: t('gallery.image1.description'),
      category: 'Company Overview'
    },
    {
      id: 2,
      src: szerszam1,
      alt: t('gallery.image2.title'),
      title: t('gallery.image2.title'),
      description: t('gallery.image2.description'),
      category: 'Tool Manufacturing'
    },
    {
      id: 3,
      src: cncMachine,
      alt: 'Advanced CNC Machining Center',
      title: 'Advanced CNC Machining Center',
      description: 'State-of-the-art CNC technology for precision manufacturing',
      category: 'CNC Machining'
    },
    {
      id: 4,
      src: toolManufacturing,
      alt: 'High-Precision Tool Manufacturing',
      title: 'High-Precision Tool Manufacturing',
      description: 'Custom-designed cold forming tools with exceptional accuracy',
      category: 'Tool Manufacturing'
    },
    {
      id: 5,
      src: precisionParts,
      alt: 'Precision Component Production',
      title: 'Precision Component Production',
      description: 'High-accuracy machined parts for automotive and industrial applications',
      category: 'Component Manufacturing'
    },
    {
      id: 6,
      src: assemblyLine,
      alt: 'Complete Tool Assembly',
      title: 'Complete Tool Assembly',
      description: 'Professional assembly of large-scale tools and production equipment',
      category: 'Assembly'
    },
    {
      id: 7,
      src: qualityControl,
      alt: 'Quality Control & Measurement',
      title: 'Quality Control & Measurement',
      description: 'Advanced metrology equipment ensuring precision and quality standards',
      category: 'Quality Control'
    },
    {
      id: 8,
      src: specialMachines,
      alt: 'Special Purpose Machinery',
      title: 'Special Purpose Machinery',
      description: 'Custom-designed special machines for increased manufacturing efficiency',
      category: 'Special Machines'
    },
    {
      id: 9,
      src: grindingOperations,
      alt: 'Surface Grinding Operations',
      title: 'Surface Grinding Operations',
      description: 'Precision surface and cylindrical grinding to ensure tolerances',
      category: 'Grinding'
    },
    {
      id: 10,
      src: heatTreatment,
      alt: 'Heat Treatment Excellence',
      title: 'Heat Treatment Excellence',
      description: 'Optimized material structure through professional heat treatment processes',
      category: 'Heat Treatment'
    },
    {
      id: 11,
      src: wireEDM,
      alt: 'Wire EDM Machining',
      title: 'Wire EDM Machining',
      description: 'Complex shape machining in hard materials using advanced CNC wire EDM technology',
      category: 'EDM'
    },
    {
      id: 12,
      src: surfaceGrinding,
      alt: 'Advanced Surface Grinding',
      title: 'Advanced Surface Grinding',
      description: 'High-precision surface grinding operations for superior surface quality',
      category: 'Grinding'
    },
    {
      id: 13,
      src: dmu,
      alt: t('gallery.image10.title'),
      title: t('gallery.image10.title'),
      description: t('gallery.image10.description'),
      category: 'CNC Machining'
    },
    {
      id: 14,
      src: szerszam2,
      alt: t('gallery.image12.title'),
      title: t('gallery.image12.title'),
      description: t('gallery.image12.description'),
      category: 'Tool Manufacturing'
    },
    {
      id: 15,
      src: szerszam3,
      alt: t('gallery.image13.title'),
      title: t('gallery.image13.title'),
      description: t('gallery.image13.description'),
      category: 'Tool Manufacturing'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <motion.div
        initial='hidden'
        animate='visible'
        variants={slideUpVariants}
        className='lg:w-[90%] w-[95%] m-auto flex flex-col justify-center items-center gap-[40px] pb-[80px]'
      >
     
        <div className="text-center mb-8">
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

        
        <motion.div variants={slideUpVariants} className="w-full flex justify-start">
          <Link
            to="/"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
          >
            ← {t('gallery.backToHome', 'Back to Home')}
          </Link>
        </motion.div>

     
        <motion.div
          variants={slideUpVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={slideUpVariants}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(image)}
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
                  <p className="text-sm mb-2">{image.description}</p>
                  <p className="text-xs bg-blue-600 px-2 py-1 rounded">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div variants={slideUpVariants} className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            {t('gallery.contactText', 'Want to see your project in our gallery? Contact us for a quote!')}
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300"
            >
              {t('gallery.contactButton', 'Get Quote')}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
