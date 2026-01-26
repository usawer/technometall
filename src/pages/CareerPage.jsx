import React from 'react';

const CareerPage = () => {
  return (
    <div className="bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Karrier Lehetőségek</h1>
          <p className="text-xl text-gray-600">Csatlakozzon csapatunkhoz a Technometall Kft.-nél és járuljon hozzá az innovatív fémmegmunkálási megoldásokhoz.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jelenleg nincsenek nyitott pozíciók</h2>
          <p className="text-gray-600 mb-6">
            Jelenleg nincsenek nyitott pozíciók. Kérjük, nézzen vissza később vagy vegye fel velünk a kapcsolatot a jövőbeli lehetőségekről.
          </p>
          <button
            onClick={() => window.location.href = '/#contact'}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300"
          >
            Kapcsolatfelvétel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
