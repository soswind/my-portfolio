import React from "react";
import image from "/src/assets/profil.JPG";

const Home = () => {
  return (
    <>
      {/* Hero sektion med lyserød baggrund */}
      <div className="bg-[#e1ccbe] flex flex-col lg:flex-row items-center lg:items-start min-h-screen p-6 lg:p-32">
        
        {/* Billed-sektion */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={image} alt="Søs Wind" className="w-3/4 lg:w-2/3 rounded-lg shadow-lg" />
        </div>

        {/* Tekst-sektion */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10">
          <h1 className="text-4xl text-black">Portfolio Webudvikling</h1>
          <p className="mt-2 text-xl text-black font-semibold">
            Passioneret udvikler med fokus på moderne webteknologier og kreativt design.
          </p>

          {/* Bio-tekst */}
          <div className="mt-4">
            <p className="mt-2 text-lg text-black">
              Mit navn er Søs Wind, og jeg har en PBA i Webudvikling, som jeg færdiggjorde i januar 2025. 
              Gennem min uddannelse har jeg specialiseret mig i moderne teknologier som React, Remix, PHP, MySQL og MongoDB 
              samt opbygget en solid forståelse for både frontend- og backendudvikling.
            </p>
            <p className="mt-2 text-lg text-black">
              Jeg er nu klar til at tage næste skridt i min karriere og søger en spændende mulighed, hvor jeg kan anvende mine færdigheder 
              og samtidig udvikle mig yderligere inden for webudvikling. Jeg brænder for at skabe intuitive, brugervenlige løsninger og 
              arbejde i et miljø, hvor innovation og læring er i fokus.
            </p>
          </div>

          {/* CTA-knap */}
          <a href="/projects" className="mt-6 inline-block bg-terracotta text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-terracotta transition">
            Se mine projekter 🚀
          </a>
        </div>
      </div>

      {/* Kompetencer - Placeret på en hvid baggrund */}
      <div className="bg-white py-12 px-6 lg:px-32">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Mine kompetencer</h2>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">React.js</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">JavaScript</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Tailwind CSS</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Node.js</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">MongoDB</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">MySQL</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">PHP</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">REST API</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Github</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Figma</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">UX/UI</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">Express.js</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">WordPress</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">HTML</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">CSS</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">C#</span>
          <span className="px-3 py-1 bg-terracotta text-white rounded-full text-m">.NET</span>
        </div>
      </div>
    </>
  );
};

export default Home;


