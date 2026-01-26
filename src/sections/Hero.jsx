import React from 'react';
import backgroundImg from '../assets/homeimg.png';
import {motion} from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation'
import { useLanguage } from '../context/LanguageContext';

import szechenyiLogo from '../assets/szechenyiLogo.png';


const SZECHENYI_OLDAL_LINKJE = "https://www.palyazat.gov.hu/"; 

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="hero"
        className='relative w-full lg:h-[700px] h-fit m-auto pt-[100px] pb-[100px] lg:px-[150px] px-[20px] bg-cover bg-center'
    >
        <video
            className='absolute inset-0 w-full h-full object-cover z-0'
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={videoSrc} type="video/mp4" />
        </video>
        <div className='absolute inset-0 bg-black opacity-60 z-5'></div>

 
        <motion.div initial="hidden" whileInView="visible" variants={slideUpVariants} 
            className='relative z-10 lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'
        > 
            <motion.h1 variants={slideUpVariants} className='text-blue-500 text-5xl font-bold '>{t('hero.title')}</motion.h1>
            <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[30px] font-bold '>{t('hero.subtitle')}</motion.h1>
            <div className='w-[120px] h-[6px] bg-blue-500'></div>
            <p className='text-white text-[20px]'>{t('hero.description')}</p>
            <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className='flex justify-center items-center gap-5'>
                <motion.button variants={zoomInVariants} className='bg-blue-500 hover:bg-blue-700 hover:text-white px-10 py-3 rounded-lg text-black font-bold transition-colors duration-300'>{t('hero.button1')}</motion.button>
                <motion.button  variants={zoomInVariants} className='border-white hover:bg-blue-500 hover:text-black border-2 px-10 py-3 rounded-lg text-white font-bold transition-colors duration-300'>{t('hero.button2')}</motion.button>
            </motion.div>
        </motion.div>
        
       
        <a 
            href={SZECHENYI_OLDAL_LINKJE} 
            target="_blank" 
            rel="noopener noreferrer"
            className='fixed bottom-0 right-0 z-50 transition-transform duration-300 hover:scale-[1.02]' 
        >
            <img 
                src={szechenyiLogo} 
                alt="Széchenyi Terv Plusz támogatási logó" 
                className='w-[160px] h-auto lg:w-[180px]' 
            />
        </a>
        

    </div>
    )
  }
export default Hero