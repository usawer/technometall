import React from "react";
import {motion} from 'framer-motion';
import { slideUpVariants } from './animation';
import MetalGeometry from '../components/MetalGeometry';
import { useLanguage } from '../context/LanguageContext';

// ServiceCard komponens (változatlan)
const ServiceCard = ({ title, description, icon }) => (
    <div className="flex flex-col items-center text-center p-6 border border-gray-700 rounded-lg shadow-xl bg-white h-full transition-shadow duration-300 hover:scale-[1.03]">
        <div className="text-blue-600 text-5xl mb-4">{icon}</div> 
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
    </div>
);


const TechSpecCard = ({ title, spec, details }) => (
    <div className="bg-gray-800/70 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-xl flex flex-col justify-start h-full">
        {/* Felső rész: Kiemelt Specifikáció */}
        <h3 className
            ="text-3xl font-extrabold text-blue-400 mb-2 leading-none uppercase tracking-wide">
            {spec}
        </h3>
        {/* Középső rész: Művelet Típus */}
        <p className="text-sm font-semibold text-gray-300 mb-3 border-b border-gray-700 pb-2">
            {title}
        </p>
        {/* Alsó rész: Részletes Leírás/Géptípus */}
        <p className="text-xs text-gray-400 mt-auto">
            {details}
        </p>
    </div>
);

const Services = () => {
    const { t } = useLanguage();


    const serviceItems = [
        {
            title: t('services.service1Title'),
            description: t('services.service1Desc'),
            icon: "📐"
        },
        {
            title: t('services.service2Title'),
            description: t('services.service2Desc'),
            icon: "⚙️"
        },
        {
            title: t('services.service3Title'),
            description: t('services.service3Desc'),
            icon: "🛠️"
        }
    ];

    const technologySpecs = [
        {
            title: t('services.tech1Title'),
            spec: t('services.tech1Spec'),
            details: t('services.tech1Details')
        },
        {
            title: t('services.tech2Title'),
            spec: t('services.tech2Spec'),
            details: t('services.tech2Details')
        },
        {
            title: t('services.tech3Title'),
            spec: t('services.tech3Spec'),
            details: t('services.tech3Details')
        },
        {
            title: t('services.tech4Title'),
            spec: t('services.tech4Spec'),
            details: t('services.tech4Details')
        },
        {
            title: t('services.tech5Title'),
            spec: t('services.tech5Spec'),
            details: t('services.tech5Details')
        },
        {
            title: t('services.tech6Title'),
            spec: t('services.tech6Spec'),
            details: t('services.tech6Details')
        },
        {
            title: t('services.tech7Title'),
            spec: t('services.tech7Spec'),
            details: t('services.tech7Details')
        },
        {
            title: t('services.tech8Title'),
            spec: t('services.tech8Spec'),
            details: t('services.tech8Details')
        },
    ];
    // -------------------------------------------------------------------


    return (
        
        <div id='services' className="w-full py-[80px] bg-gray-900 text-white"> 
            <motion.div initial='hidden' whileInView='visible' variants={slideUpVariants} className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-[40px]'>
                
    
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col items-start text-left">
                        <motion.h2 variants={slideUpVariants} className='text-blue-400 uppercase text-sm font-semibold tracking-widest'>
                            {t('services.expertise')}
                        </motion.h2>
                        <motion.h1 variants={slideUpVariants} className='text-white text-[40px] font-extrabold mt-1 mb-4'>
                            {t('services.mainTitle')}
                        </motion.h1>
                        <div className='w-[120px] h-[6px] bg-blue-400'></div>
                        <p className="mt-6 text-gray-300">
                            {t('services.description')}
                        </p>
                    </div>

                    <motion.div variants={slideUpVariants}>
                        <MetalGeometry /> 
                    </motion.div>
                </div>

                <div className="w-full h-[1px] bg-gray-700/50 my-10"></div> 


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {serviceItems.map((item, index) => (
                        <motion.div key={index} variants={slideUpVariants} custom={index}>
                            <ServiceCard 
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-gray-700/50 my-10"></div> 

              
                <motion.div variants={slideUpVariants} className="mt-12 w-full text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-8">
                        {t('services.techTitle')}
                    </h2>

             
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        {technologySpecs.map((item, index) => (
                            <motion.div key={index} variants={slideUpVariants} custom={index}>
                                <TechSpecCard 
                                    title={item.title}
                                    spec={item.spec}
                                    details={item.details}
                                />
                            </motion.div>
                        ))}
                    </div>

                   
                    <motion.div variants={slideUpVariants} className="mt-10 bg-gray-800/70 p-4 rounded-lg border-l-4 border-blue-400 w-full text-left text-white">
                        <p className="font-semibold text-lg text-gray-200">
                            {t('services.additionalInfo')}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            {t('services.additionalDesc')}
                        </p>
                    </motion.div>
                </motion.div>
              

            </motion.div>
        </div>
    );
}
export default Services;