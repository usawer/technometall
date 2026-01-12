import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

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

const Contact = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        body: ''
    });
    const [status, setStatus] = useState('idle'); 
    const [message, setMessage] = useState('');

    const contactInfo = {
        address: "3950 Sárospatak, Dorkói út 1.", 
        phone: "+36 96 123 4567",
        email: "info@technometall.hu"
    };

   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('loading');
        setMessage(t('contact.sendingMessage'));

        try {
            // EmailJS configuration - you'll need to set up your own service
            const serviceId = 'service_12345'; // Replace with your EmailJS service ID
            const templateId = 'template_b2avu9s'; // Replace with your EmailJS template ID
            const publicKey = 'ub6_8zfm1jligxMoR'; // Replace with your EmailJS public key

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.body,
                to_email: 'info@technometall.hu' // Your email address
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setStatus('success');
            setMessage(t('contact.successMessage'));

            setFormData({ name: '', email: '', subject: '', body: '' });

        } catch (error) {
            console.error("Email sending error:", error);
            setStatus('error');
            setMessage('Hiba történt az e-mail küldése során. Kérjük, próbálja újra később.');
        }
    };

  
    const StatusMessage = () => {
        if (status === 'idle') return null;

        const baseClasses = "p-4 rounded-lg font-semibold text-center";
        let content;

        switch(status) {
            case 'loading':
                content = <p className={`bg-blue-800 text-blue-100 ${baseClasses}`}>{t('contact.loading')}</p>;
                break;
            case 'success':
                content = (
                    <div className={`bg-green-800 text-green-100 p-6 rounded-lg ${baseClasses} text-left`}>
                        <h4 className="text-xl font-bold mb-2">{t('contact.successTitle')}</h4>
                        <p className="mb-4">
                            {message}
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-4 w-full py-2 bg-green-600 hover:bg-green-700 transition duration-300 rounded-lg text-white font-bold"
                        >
                            {t('contact.close')}
                        </button>
                    </div>
                );
                break;
            case 'error':
                content = (
                    <div className={`bg-red-800 text-red-100 p-6 rounded-lg ${baseClasses} text-left`}>
                        <h4 className="text-xl font-bold mb-2">{t('contact.errorTitle')}</h4>
                        <p className="mb-4">
                            {message}
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 transition duration-300 rounded-lg text-white font-bold"
                        >
                            {t('contact.close')}
                        </button>
                    </div>
                );
                break;
            default:
                content = null;
        }
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">{content}</motion.div>;
    }


    const googleMapsIframe = (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.5663765106173!2d21.7135017158866!3d48.31828137924403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ed17d0d0d0d0d%3A0x6734c56789012345!2sS%C3%A1rospatak%2C%20Dork%C3%B3i%20%C3%BAt%201%2C%203950%20Hungary!5e0!3m2!1sen!2shu!4v1636905600000!5m2!1sen!2shu"
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Technometall Kft. Sárospatak telephelye"
        ></iframe>
    );


    return (
        <div id='contact' className="w-full py-[80px] bg-gray-950 text-white"> 
            <motion.div 
                initial='hidden' 
                whileInView='visible' 
                variants={slideUpVariants} 
                className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-[40px]'
            >
                
                <div className="text-center">
                    <motion.h2 variants={slideUpVariants} className='text-blue-400 uppercase text-sm font-semibold tracking-widest'>
                        {t('contact.title')}
                    </motion.h2>
                    <motion.h1 variants={slideUpVariants} className='text-white text-[40px] font-extrabold mt-1 mb-4'>
                        {t('contact.contactInfo')}
                    </motion.h1>
                    <div className='w-[120px] h-[6px] bg-blue-400 mx-auto'></div>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Elérhetőségi adatok */}
                    <div className="flex flex-col space-y-8 p-6 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                        <h3 className="text-2xl font-bold text-blue-400 border-b border-gray-700 pb-3">{t('contact.contactInfo')}</h3>

                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-400">📍</span>
                            <div>
                                <p className="font-semibold text-gray-300">{t('contact.addressLabel')}</p>
                                <p className="text-gray-400">{contactInfo.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-400">📞</span>
                            <div>
                                <p className="font-semibold text-gray-300">{t('contact.phoneLabel')}</p>
                                <p className="text-gray-400">{contactInfo.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-400">📧</span>
                            <div>
                                <p className="font-semibold text-gray-300">{t('contact.emailLabel')}</p>
                                <p className="text-gray-400">{contactInfo.email}</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Kapcsolati Űrlap */}
                    <div className="lg:col-span-2 p-8 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6">{t('contact.quickMessage')}</h3>

                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t('contact.fullName')}
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t('contact.emailAddress')}
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder={t('contact.subject')}
                                value={formData.subject}
                                onChange={handleChange}
                                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 w-full focus:outline-none focus:border-blue-400"
                            />
                            <textarea
                                name="body"
                                placeholder={t('contact.message')}
                                rows="5"
                                required
                                value={formData.body}
                                onChange={handleChange}
                                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 w-full focus:outline-none focus:border-blue-400 resize-none"
                            ></textarea>
                            
                        
                            <StatusMessage />

                            <motion.button
                                whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
                                whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full py-3 transition duration-300 rounded-lg text-white font-bold text-lg shadow-lg ${
                                    status === 'loading'
                                        ? 'bg-gray-500 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            >
                                {status === 'loading' ? t('contact.sending') : t('contact.sendMessage')}
                            </motion.button>
                        </form>
                    </div>

                </div>

           
                <motion.div variants={slideUpVariants} className="w-full mt-10 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                    <h3 className="p-4 bg-gray-800 text-lg font-bold text-gray-200">{t('contact.locationTitle')}</h3>
                    {googleMapsIframe}
                </motion.div>

            </motion.div>
        </div>
    );
}

export default Contact;