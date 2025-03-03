import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcfbf7] p-6">
      
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
      <h1 className="text-4xl font-bold text-darkchoco">Kontakt Mig</h1>
      <p className="mt-2 text-lg text-black">Har du spørgsmål eller vil du samarbejde? Kontakt mig her! 📩</p>

      {/* Kontaktoplysninger */}
      <div className="mt-6 space-y-4 text-lg text-gray-700">
        <div className="flex items-center gap-2">
          <Mail size={24} className="text-black" />
          <span>s_swind@hotmail.com</span>
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

    </div>
  );
};

export default Contact;
