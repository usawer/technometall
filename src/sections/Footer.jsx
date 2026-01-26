import React from 'react';
import { motion } from 'framer-motion';

import { slideUpVariants } from './animation';
import { useLanguage } from '../context/LanguageContext';
import szechenyiLogo from '../assets/szechenyiLogo.png';
import backgroundImg from '../assets/homeimg.png';




const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    // Navigációs linkek a footerhez
    const navLinks = [
        { name: t('footer.home'), href: "#home" },
        { name: t('footer.services'), href: "#services" },
        { name: t('footer.gallery'), href: "#gallery" },
        { name: t('footer.about'), href: "#about" },
        { name: t('footer.contact'), href: "#contact" },
    ];

    return (
        <div className="w-full bg-gray-900 text-gray-400 border-t border-gray-700">
            <motion.div 
                initial='hidden' 
                whileInView='visible' 
                variants={slideUpVariants}
                className='lg:w-[80%] w-[90%] m-auto py-12 flex flex-col md:flex-row justify-between gap-8'
            >
                {/* 1. Oszlop: Cégnév és Leírás */}
                <div className="flex flex-col space-y-4 max-w-sm">
                    <motion.div variants={slideUpVariants} className="flex items-center space-x-2 text-xl font-extrabold text-white">
                    
                        <span className="text-blue-400">TECHNOMETALL</span><span className="text-white"> Kft.</span>
                    </motion.div>
                    <motion.p variants={slideUpVariants} className="text-sm">
                        {t('footer.description')}
                    </motion.p>
                </div>

                {/* 2. Oszlop: Gyors Navigáció */}
                <div className="flex flex-col space-y-3">
                    <motion.h4 variants={slideUpVariants} className="text-xl font-bold text-white mb-2 border-b border-gray-700 pb-1">{t('footer.navigation')}</motion.h4>
                    {navLinks.map((link, index) => (
                        <motion.a
                            variants={slideUpVariants}
                            key={index}
                            href={link.href}
                            className="text-sm hover:text-blue-400 transition duration-200"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* 3. Oszlop: Kapcsolat */}
                <div className="flex flex-col space-y-3">
                    <motion.h4 variants={slideUpVariants} className="text-xl font-bold text-white mb-2 border-b border-gray-700 pb-1">Elérhetőségek</motion.h4>
                    <motion.div variants={slideUpVariants} className="flex items-center space-x-2">
                        <span className="text-blue-400">📍</span>
                        <p className="text-sm">3950 Sárospatak, Dorkói út 1.</p>
                    </motion.div>

                    <motion.div variants={slideUpVariants} className="flex items-center space-x-2">
                        <span className="text-blue-400">📧</span>
                        <a href="mailto:info@technometall.hu" className="text-sm hover:text-blue-400 transition duration-200">info@technometall.hu</a>
                    </motion.div>
                    <motion.div variants={slideUpVariants} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <a href="https://www.facebook.com/technometall" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition duration-200">Facebook</a>
                    </motion.div>
                </div>
            </motion.div>
            
            {/* Szerzői jogi sáv */}
            <div className="w-full border-t border-gray-800 py-4 text-center">
                <p className="text-sm text-gray-500">
                    {t('footer.copyright').replace('{year}', currentYear)}
                </p>
            </div>
        </div>
    );
}

export default Footer;