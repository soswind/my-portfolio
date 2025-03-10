import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcfbf7] p-6 pt-32">
      
      {/* Animationsikon */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        className="mb-6"
      >
        <Mail size={50} className="text-deepbrown" />
      </motion.div>

      {/* Overskrift */}
      <h1 className="text-4xl text-darkchoco">Kontakt Mig</h1>
      <p className="mt-4 text-lg text-black">Har du spørgsmål eller bare lyst til en kop kaffe? Kontakt mig her! ☕ </p>

      {/* Kontaktoplysninger */}
      <div className="mt-6 space-y-4 text-lg text-gray-700">
        <div className="flex items-center gap-2 group">
          <Mail size={24} className="text-black group-hover:text-terracotta transition-all duration-300" />
          <a href="mailto:s_swind@hotmail.com" className="hover:text-terracotta transition-all duration-300">
          s_swind@hotmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 group">
        <Phone size={24} className="text-black group-hover:text-terracotta transition-all duration-300" />
        <a href="tel:+45 24 46 66 92" className="hover:text-terracotta transition-all duration-300">
         +45 24 46 66 92
        </a>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={24} className="text-black" />
          <span>Aarhus, Danmark</span>
        </div>
      </div>

      {/* CTA-knap */}
      <a href="mailto:s_swind@hotmail.com" className="mt-6 inline-block bg-deepbrown text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-terracotta transition">
        Send mig en email 🚀
      </a>

      <p></p>

<div className="p-6 pt-32">
<h1 className="text-4xl text-center text-gray-800">Udtalelser</h1>
<div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-4">
    <div className="p-4 border rounded-xl shadow-lg bg-white text-darkchoco font-semibold">
    <p className="pt-4 text-lg italic">"Søs var nyuddannet, da hun begyndte hos Nioba, men hun viste sig hurtigt at være engageret i sit arbejde og meget lærenem. Det betød, at vi snart kunne give Søs opgaver, der normalt ville tilkomme en mere erfaren konsulent. Det har været en stor styrke at samarbejde med Søs, der har en professionel tilgang til kunder og opgaver. Hun løser sine opgaver tilfredsstillende, er grundig og behagelig at omgås. Som person er hun smilende, udadvendt og forstår at arbejde selvstændigt.</p>
 <p className="pt-4 text-lg italic">I sin tid ved os har Søs arbejdet med en bred vifte af opgaver, hvor hun blandt andet har arbejdet med teknisk SEO, webudvikling, webdesign og opdateringer, content generering til sociale medier, Google annoncering og IT sikkerhed på websider. </p>
  <p className="pt-4 text-lg italic">Jeg kan give Søs de bedste anbefalinger til fremtidige kollegaer og arbejdsgivere."</p>
    <p className=" pt-4 font-semibold text-lg">Regin Buss Vels Jensen</p>
    <p className="text-m">Indehaver Nioba ApS</p>

    </div>
</div>
</div>
    </div>


  );
};

export default Contact;
