import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-terracotta text-white p-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col justify-between">
        
        {/* Øverste sektion: Kontakt + Sociale medier */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Kontaktinfo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl">Kontakt</h2>
            <div className="mt-2 space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} />
                <a href="mailto:s_swind@hotmail.com" className="hover:text-darkchoco transition text-lg">
                  s_swind@hotmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} />
                <a href="tel:+45 24 46 66 92" className="hover:text-darkchoco transition text-lg">
                  +45 24 46 66 92
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-lg">
                <MapPin size={18} />
                <span>Aarhus, Danmark</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl">Vigtige links</h2>
            <ul className="mt-2 space-y-2 text-m">
              <li>
                <Link to="/cv" className="hover:text-darkchoco transition">CV</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-darkchoco transition">Projekter</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-darkchoco transition">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Sociale medier */}
          <div className="text-center">
            <h2 className="text-2xl pb-14">Find mig her</h2>
            <div className="mt-2 flex justify-center gap-4">
              <a href="https://github.com/soswind" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 hover:opacity-75 transition" />
              </a>
              <a href="https://www.linkedin.com/in/søs-wind-95a9a616b/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-75 transition" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Sektion - Placeret i bunden */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm">
          <p>© 2025 Søs Wind. Alle rettigheder forbeholdes.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

