import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import technometallImg from '../assets/Gallery/technometall.jpg';
import isoImg from '../assets/Gallery/jpeg/ISO.jpg';
import dmuImg from '../assets/Gallery/DMU.jpg';

const NewsPage = () => {
  const [expandedNews, setExpandedNews] = useState(null);

  const toggleNewsExpansion = (newsId) => {
    setExpandedNews(expandedNews === newsId ? null : newsId);
  };

  // Placeholder news data - in Hungarian only
  const newsItems = [
    {
      id: 1,
      title: "Részvétel az EUROGUSS 2026 kiállításon",
      date: "2024. december 10.",
      excerpt: "Az EUROGUSS 2026 kiállításon Nürnbergben látogatóként vettünk részt, ahol kiemelt célunk volt a Technometall Kft. ismertségének erősítése és iparági kapcsolataink tudatos bővítése.",
      fullContent: `Az EUROGUSS 2026 kiállításon Nürnbergben látogatóként vettünk részt, ahol kiemelt célunk volt a Technometall Kft. ismertségének erősítése és iparági kapcsolataink tudatos bővítése.

A rendezvény kiváló lehetőséget biztosított arra, hogy személyesen egyeztessünk jelenlegi vevőinkkel, áttekintsük a futó projekteket, valamint azonosítsuk a következő időszak fejlesztési és együttműködési irányait.

Az EUROGUSS kiállítás a világ egyik legnagyobb öntészeti szakvására, ahol a legújabb technológiák és innovatív megoldások kerülnek bemutatásra. Csapatunk aktívan részt vett a szakmai programokban és networking eseményekben.

Köszönjük mindenkinek a tartalmas szakmai beszélgetéseket és a bizalmat. Az ilyen rendezvényeken való részvétel kulcsfontosságú számunkra a piaci trendek követésében és az új partnerségek kialakításában.

További információ: https://www.euroguss.de`,
      image: technometallImg
    },
    {
      id: 2,
      title: "ISO 9001:2015 tanúsítvány megújítása",
      date: "2024. február 10.",
      excerpt: "Sikeresen megújítottuk ISO 9001:2015 minőségirányítási tanúsítványunkat. Ez a minősítés garantálja ügyfeleink számára a folyamatos magas színvonalú szolgáltatást.",
      fullContent: `Sikeresen megújítottuk ISO 9001:2015 minőségirányítási tanúsítványunkat. Ez a minősítés garantálja ügyfeleink számára a folyamatos magas színvonalú szolgáltatást.

Az ISO 9001:2015 szabvány a minőségirányítási rendszerek nemzetközi referenciája, amely biztosítja, hogy vállalatunk minden folyamatában a minőség és a vevői elégedettség legyen a legfontosabb.

A tanúsítvány megújítása során külső auditorok vizsgálták meg rendszerünket, és megerősítették, hogy minden követelménynek megfelelünk. Ez a siker újabb bizonyítéka csapatunk elkötelezettségének a kiváló minőségű szolgáltatások nyújtása iránt.

A minőségirányítási rendszerünk kiterjed a tervezéstől a gyártáson át egészen a vevői szolgáltatásig, biztosítva ezzel a konzisztens és megbízható teljesítményt.`,
      image: isoImg
    },
    {
      id: 3,
      title: "Új CNC gép beszerzése",
      date: "2024. március 5.",
      excerpt: "Modern CNC megmunkáló központtal bővítettük gépparkunkat. Az új berendezés lehetővé teszi még komplexebb geometriák megmunkálását nagy pontossággal.",
      fullContent: `Modern CNC megmunkáló központtal bővítettük gépparkunkat. Az új berendezés lehetővé teszi még komplexebb geometriák megmunkálását nagy pontossággal.

Az új DMU 5-tengelyes megmunkáló központ jelentős fejlesztést jelent vállalatunk gyártási kapacitásában. A berendezés alkalmas nagy pontosságú alkatrészek előállítására, összetett geometriák megmunkálására és automatizált gyártási folyamatokra.

A beruházás célja a termelékenység növelése és a vevői igények még hatékonyabb kielégítése. Az új gép várhatóan 30-40%-kal növeli majd a komplex alkatrészek gyártási sebességét.

Csapatunk már megkezdte az új berendezés üzembe helyezését és a szükséges képzéseket. Hamarosan az első alkatrészeket is elkészítjük az új gépen.`,
      image: dmuImg
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header spacing */}
      <div className="pt-20"></div>

      {/* Page Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Legfrissebb Hírek</h1>
          <p className="text-xl text-center mt-4">Maradjon naprakész a Technometall Kft. legújabb fejleményeiről</p>
        </div>
      </div>

      {/* News Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {expandedNews === news.id ? news.fullContent : news.excerpt}
                </p>
                <button
                  onClick={() => toggleNewsExpansion(news.id)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {expandedNews === news.id ? 'Kevesebb ←' : 'Tovább olvasom →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add more news section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">További hírek</h2>
            <p className="text-gray-600 mb-6">
              Hamarosan további érdekes híreket és frissítéseket teszünk közzé a vállalatunk tevékenységéről.
            </p>
            <p className="text-sm text-gray-500">
              Ez a híroldal rendszeresen frissül a legújabb információkkal.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center py-8">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
};

export default NewsPage;
