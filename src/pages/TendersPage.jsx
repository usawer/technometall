import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TendersPage = () => {
  const { t } = useLanguage();

  // Placeholder tenders data - you can replace this with real data
  const tenders = [
    {
      id: 1,
      title: t('tenders.tender1.title'),
      description: t('tenders.tender1.description'),
      deadline: t('tenders.tender1.deadline'),
      status: t('tenders.tender1.status')
    },
    {
      id: 2,
      title: t('tenders.tender2.title'),
      description: t('tenders.tender2.description'),
      deadline: t('tenders.tender2.deadline'),
      status: t('tenders.tender2.status')
    },
    {
      id: 3,
      title: t('tenders.tender3.title'),
      description: t('tenders.tender3.description'),
      deadline: t('tenders.tender3.deadline'),
      status: t('tenders.tender3.status')
    }
  ];

  return (
    <div className="bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('tenders.title')}</h1>
          <p className="text-xl text-gray-600">{t('tenders.description')}</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('tenders.project1.title')}</h2>
            <p className="text-gray-600 mb-4">{t('tenders.project1.code')}</p>
    <button
  onClick={() => window.open(`${process.env.PUBLIC_URL}/egyesprojekt.pdf`, '_blank')}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
>
  {t('tenders.moreDetails')}
</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('tenders.project2.title')}</h2>
            <p className="text-gray-600 mb-4">{t('tenders.project2.code')}</p>
            <button
              onClick={() => window.location.href = './src/assets/kettesprojekt.pdf'}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              {t('tenders.moreDetails')}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('tenders.project3.title')}</h2>
            <p className="text-gray-600 mb-4">{t('tenders.project3.code')}</p>
            <button
              onClick={() => window.location.href = './src/assets/harmasprojekt.pdf'}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              {t('tenders.moreDetails')}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('tenders.project4.title')}</h2>
            <p className="text-gray-600 mb-4">{t('tenders.project4.code')}</p>
            <button
              onClick={() => window.location.href = './src/assets/negyesprojekt.pdf'}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              {t('tenders.moreDetails')}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('tenders.project5.title')}</h2>
            <p className="text-gray-600 mb-4">{t('tenders.project5.code')}</p>
            <button
              onClick={() => window.location.href = './src/assets/otosprojekt.pdf'}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              {t('tenders.moreDetails')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TendersPage;
