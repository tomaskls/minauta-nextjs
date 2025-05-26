import Image from 'next/image';

export default function ReklaminisSkydelis() {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center py-12 bg-white">
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          Sveiki atvykę į Minauta.LT
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Mes užsiimame automobilių priežiūra ir gyvūnų prekių tiekimu – kokybė, kuria galite pasitikėti.
        </p>
      </header>

      {/* Pagrindinis konteineris su dviem sekcijomis */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          
          {/* U2 Motors sekcija */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-md">
            <Image 
              src="/images/U2Motors_LOGO.JPG" 
              alt="U2 Motors Logo" 
              width={200} 
              height={100}
              className="mb-6"
            />
            <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
              Automobiliai. Priežiūra. Pasitikėjimas.
            </h2>
            <Image 
              src="/images/Automobilis_1.jpg" 
              alt="Opel automobilis" 
              width={300} 
              height={200}
              className="mb-8 rounded"
            />
            <a 
              href="https://www.u2motors.lt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded transition-colors mt-auto"
            >
              Pereiti į svetainę
            </a>
          </div>

          {/* Vetprekes sekcija */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-md">
            <Image 
              src="/images/Vetprekes_LOGO.JPG" 
              alt="Vetprekes.lt Logo" 
              width={200} 
              height={100}
              className="mb-6"
            />
            <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
              Gyvūnų poreikiai – mūsų rūpestis.
            </h2>
            <Image 
              src="/images/Vetprekes_3.JPG" 
              alt="Veterinarijos prekės" 
              width={300} 
              height={200}
              className="mb-8 rounded"
            />
            <a 
              href="https://www.vetprekes.lt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-colors mt-auto"
            >
              Pereiti į svetainę
            </a>
          </div>
        </div>
      </div>

      {/* Įmonės informacija puslapio apačioje */}
      <div className="text-center py-8 bg-gray-200 text-gray-600 text-sm">
        <p>
          © 2025 Minauta, UAB — Įmonės kodas 303410025, PVM kodas LT100008888112,<br/>
          Serbentų g. 55, Šiauliai • Tel. 8 41 54001
        </p>
      </div>
    </div>
  );
}