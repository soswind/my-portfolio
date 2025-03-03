import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start min-h-screen p-6 pt-32 max-w-6xl mx-auto bg-[#fcfbf7]">
      
      {/* Billede - Begrænset bredde, så teksten kan fylde mere */}
      <div className="flex flex-col items-center">
      <div className="w-40 h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0">
        <img src="/src/assets/profil.JPG" alt="Dit navn" className="w-full h-full object-cover" />
      </div>
      <h2 className="mt-3 text-4xl text-gray-800">Søs Wind</h2>
      </div>

      {/* Tekst - Gør den bredere */}
      <div className="text-center lg:text-left lg:ml-10 flex-1"> {/* Fjernet max-w-lg */}
        <h1 className="text-4xl text-gray-800">Portfolio Webudvikling</h1>
        <p className="mt-2 text-xl text-gray-600 font-semibold">Passioneret udvikler med fokus på moderne webteknologier og kreativt design.</p>

        {/* Om mig - Fjernet unødvendigt div */}
        <p className="mt-5 text-xl text-black">
          Mit navn er Søs Wind, og jeg har en PBA i Webudvikling, som jeg færdiggjorde i januar 2025. 
          Gennem min uddannelse har jeg specialiseret mig i moderne teknologier som React, Remix, MySQL og MongoDB 
          samt opbygget en solid forståelse for både frontend- og backendudvikling.
        </p>

        <p className="mt-2 text-xl text-black">
          Jeg er nu klar til at tage næste skridt i min karriere og søger en spændende mulighed, hvor jeg kan anvende mine færdigheder 
          og samtidig udvikle mig yderligere inden for webudvikling. Jeg brænder for at skabe intuitive, brugervenlige løsninger og 
          arbejde i et miljø, hvor innovation og læring er i fokus.
        </p>

        {/* Kompetencer */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Mine kompetencer:</h2>
          <div className="mt-2 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">React.js</span>
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">JavaScript</span>
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Tailwind CSS</span>
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Node.js</span>
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">MongoDB</span>
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">MySQL</span>
            <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">PHP</span>
          </div>
        </div>

        {/* CTA-knap */}
        <a href="/projects" className="mt-6 inline-block bg-deepbrown text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#E07A5F] transition">
          Se mine projekter 🚀
        </a>

      </div>
    </div>
  );
};

export default Home;


