import React from "react";
import {motion} from 'framer-motion';
import { slideUpVariants } from './animation';
import { useLanguage } from '../context/LanguageContext';



const About = () => {
  const { t } = useLanguage();
  return (
    
    <div className='bg-white text-gray-800' id='about'> 
        
       
        <div className="w-full h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(/assets/images/szechenyiLogo.jpeg)'}}>
            
        </div>


        <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'> 
            
         
            <motion.div initial='hidden' whileInView='visible' variants={slideUpVariants} 
                className='lg:w-[65%] w-full flex flex-col justify-center items-start gap-4'
            >
             
                <motion.h3 variants={slideUpVariants} className='text-blue-600 text-xl font-semibold'>
                    {t('about.welcome')}
                </motion.h3>


                <motion.h2 variants={slideUpVariants} className='text-gray-900 uppercase text-4xl font-extrabold'>
                    {t('about.title')}
                </motion.h2>


                <div className='w-[120px] h-[6px] bg-blue-600 mb-4'></div>


                <p className='text-lg text-gray-600 leading-relaxed'>
                    {t('about.description1')}
                </p>

                <p className='text-lg text-gray-600 leading-relaxed'>
                    {t('about.description2')}
                </p>

            </motion.div>

            {/* JOBB OLDAL - Kiemelések/Adatok */}
            <motion.div initial='hidden' whileInView='visible' variants={slideUpVariants} 
                className='lg:w-[30%] w-full flex flex-col justify-start items-center p-8 bg-blue-50 border-l-4 border-blue-600'
            >
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{t('about.keyData')}</h3>
                <ul className="list-none space-y-4 w-full">
                    <li className="flex justify-between items-center text-gray-700 border-b pb-2">
                        <span className="font-semibold">{t('about.founded')}</span>
                        <span className="text-xl font-extrabold text-blue-600">1992</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 border-b pb-2">
                        <span className="font-semibold">{t('about.location')}</span>
                        <span className="text-xl font-extrabold text-blue-600">Sárospatak</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700 border-b pb-2">
                        <span className="font-semibold">{t('about.productionHall')}</span>
                        <span className="text-xl font-extrabold text-blue-600">1600 m²</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-700">
                        <span className="font-semibold">{t('about.currentIso')}</span>
                        <span className="text-xl font-extrabold text-blue-600">9001:2015</span>
                    </li>
                </ul>
            </motion.div>

        </div>
    </div>
  );
}   

export default About;