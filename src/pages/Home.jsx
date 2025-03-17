import React from "react";
import image from "/src/assets/profil.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero sektion med lyserød baggrund */}
      <div className="bg-[#e1ccbe] flex flex-col-reverse lg:flex-row items-center lg:items-start min-h-screen p-6 lg:p-32">
        
        {/* Billed-sektion */}
        <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <img src={image} alt="Søs Wind" className="w-3/4 lg:w-2/3 rounded-lg shadow-lg" />
        </div>

        {/* Tekst-sektion */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 lg:pl-10">
          <h1 className="text-4xl text-black mt-16 lg:mt-0">Portfolio Webudvikling</h1>
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
          <Link to="/projects" className="mt-6 inline-block bg-terracotta text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-white hover:text-terracotta transition">
            Se mine projekter 🚀
          </Link>
        </div>
      </div>

      {/* Kompetencer - Placeret på en hvid baggrund */}
      <div className="bg-white py-12 px-6 lg:px-32">
        <h2 className="text-4xl text-gray-800 text-center">Mine kompetencer</h2>
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

      <div className="p-6 pt-10 max-w-6xl mx-auto">
      <h1 className="text-4xl text-center text-gray-800">Udtalelser</h1>
      
      {/* Grid layout med to kolonner på større skærme */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Første udtalelse */}
        <div className="p-6 border rounded-xl shadow-lg bg-white text-darkchoco font-semibold">
        <p className="text-6xl text-terracotta">“</p>
          <p className="text-lg">
            Søs var nyuddannet, da hun begyndte hos Nioba, men hun viste sig hurtigt at være engageret i sit arbejde og meget lærenem. 
            Det betød, at vi snart kunne give Søs opgaver, der normalt ville tilkomme en mere erfaren konsulent. 
            Det har været en stor styrke at samarbejde med Søs, der har en professionel tilgang til kunder og opgaver. 
            Hun løser sine opgaver tilfredsstillende, er grundig og behagelig at omgås. Som person er hun smilende, 
            udadvendt og forstår at arbejde selvstændigt."
          </p>
          <p className="pt-4 text-lg">
            I sin tid ved os har Søs arbejdet med en bred vifte af opgaver, hvor hun blandt andet har arbejdet med teknisk SEO, 
            webudvikling, webdesign og opdateringer, content generering til sociale medier, Google annoncering og IT sikkerhed på websider.
          </p>
          <p className="pt-4 text-lg">
            Jeg kan give Søs de bedste anbefalinger til fremtidige kollegaer og arbejdsgivere.
          </p>
          <p className="text-6xl text-terracotta text-right">”</p>
          <p className="pt-4 font-semibold text-lg">Regin Buss Vels Jensen</p>
          <p className="text-m">Indehaver, Nioba ApS</p>
        </div>

        {/* Anden udtalelse */}
        <div className="p-6 border rounded-xl shadow-lg bg-white text-darkchoco font-semibold">
          <p className="text-6xl text-terracotta">“</p>
          <p className="text-lg">
            Søs har været i praktik som webudvikler i en periode på 3,5 måned i efteråret 2024. 
            I forbindelse med praktikforløbet, har Søs skrevet hovedopgave med udgangspunkt i en 
            kundespecifik case fra vores virksomhed. Søs har arbejdet med opgaver med hjemmesider og webshops. 
            Hun har løst konkrete kundeopgaver indenfor:
        
            <li className="pt-4 text-sm">Webdesign</li>
            <li className="pt-2 text-sm">Programmering serverside: PHP</li>
            <li className="pt-2 text-sm">Programmering clientside: JavaScript & JQUERY</li>
            <li className="pb-4 pt-2 text-sm">CSS udvikling</li>

            <p>Søs arbejder selvstændigt og konstruktivt omkring løsningen af en opgave. Hun er proaktiv
              i sin tilgang til en opgave og løser den inden for angivet tidsestimat. Søs er behagelig
              at arbejde sammen med og bidrager socialt på arbejdspladsen. 
            </p>
            <p>Jeg giver Søs Wind vores bedste anbefalinger.</p>
          </p>
          <p className="text-6xl text-terracotta text-right">”</p>
          <p className="pt-4 font-semibold text-lg">Lars Nielsen</p>
          <p className="text-m">Partner, Nspire</p>
        </div>
      </div>
    </div>


    </>
  );
};

export default Home;


