import React from 'react';
import { motion } from 'framer-motion';
// Az "animation" fájl most már létezik
import { slideUpVariants } from './animation';
import { useLanguage } from '../context/LanguageContext';
import szechenyiLogo from '../assets/szechenyiLogo.png';

// A Logó SVG-ben, helyettesíti a Technometal_logo.png-t a Tailwind kék színeivel
const TechmetLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/>
        {/* Felső, ferde metszésvonal */}
        <path d="M5 8L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Alsó, V alakú fémmunka/hegesztés szimbólum */}
        <path d="M7 16L12 11L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

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
                    <motion.div variants={slideUpVariants} className="flex items-center space-x-3 text-xl font-extrabold text-white">
                        <img src={szechenyiLogo} alt="Széchenyi Terv Plusz" className="w-10 h-10 object-contain" />
                        <TechmetLogo />
                        <span className="text-blue-400">TECHNO</span><span className="text-white">METALL Kft.</span>
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
                        <span className="text-blue-400">📞</span>
                        <a href="tel:+36961234567" className="text-sm hover:text-blue-400 transition duration-200">+36 96 123 4567</a>
                    </motion.div>
                    <motion.div variants={slideUpVariants} className="flex items-center space-x-2">
                        <span className="text-blue-400">📧</span>
                        <a href="mailto:info@technometall.hu" className="text-sm hover:text-blue-400 transition duration-200">info@technometall.hu</a>
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