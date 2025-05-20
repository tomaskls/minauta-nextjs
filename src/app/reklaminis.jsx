import Image from 'next/image';

export default function ReklaminisSkydelis() {
  return (
    <div className="w-full bg-gray-200 p-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* UAB MINAUTA užrašas viršuje */}
        <div className="text-center mb-8 font-bold text-xl">
          UAB MINAUTA
        </div>
        
        {/* Pagrindinis konteineris */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
          {/* Kairė pusė - Automobilis ir U2 Motors */}
          <div className="flex flex-col items-center">
            <Image 
              src="/u2motors-auto.webp" 
              alt="Opel Automobilis" 
              width={500} 
              height={300}
              className="mb-4"
            />
            <div className="flex items-center mb-4">
              <div className="font-bold text-black text-2xl mr-2">
                U2 MOTORS
                <div className="text-sm font-normal">OPEL AUTOCENTRAS</div>
              </div>
              <div className="p-2">
                <Image 
                  src="/Opel_logo.svg.png" 
                  alt="Opel logo" 
                  width={60} 
                  height={60}
                />
              </div>
            </div>
            {/* Čia yra konteineryje tik dėl mygtuką, kad būtų vienodas aukštis */}
            <div className="h-full flex items-end">
              <button className="bg-black text-white px-8 py-2 rounded">
                Į Svetainę
              </button>
            </div>
          </div>

          {/* Dešinė pusė - VETprekes.lt ir šuo */}
          <div className="flex flex-col items-center">
            {/* Pašalintas sansas-logo.png */}
            <Image 
              src="/suo.png" 
              alt="Šuo" 
              width={400} 
              height={300}
              className="mb-4"
            />
            {/* Čia yra konteineryje tik dėl mygtuką, kad būtų vienodas aukštis */}
            <div className="h-full flex items-end">
              <button className="bg-[#237803] text-white px-8 py-2 rounded">
                Į Svetainę
              </button>
            </div>
          </div>
        </div>
        
        {/* Minauta informacija - pašalintas © ženklas ir metai prieš Minauta */}
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <Image 
            src="/minauta-logo.png" 
            alt="Minauta" 
            width={100} 
            height={40}
            className="mr-4"
          />
          <p>
            Minauta, UAB Įmonės kodas 303410025, PVM kodas LT100008888112,
            <br/>
            Serbentų g. 55, Šiauliai, Tel. 8 41 54001, Fax. 8 41 540095
          </p>
        </div>
      </div>
    </div>
  );
}