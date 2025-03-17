import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import { NavLink } from "react-router-dom";
import "./index.css";
import Footer from "./pages/Footer";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Certificates from "./pages/Certificates";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#fcfbf7]">
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-end items-center z-50">
          <div className="hidden lg:flex gap-6 pr-6">
        <NavLink 
          to="/" 
            className={({ isActive }) => isActive ? "text-terracotta" : "text-darkchoco hover:text-darkchoco"}
          >
        Hjem
       </NavLink>

        <NavLink 
          to="/projects" 
            className={({ isActive }) => isActive ? "text-terracotta" : "text-darkchoco hover:text-darkchoco"}
            >
          Projekter
        </NavLink>

        <NavLink
          to="/certificates"
          className={({ isActive }) => isActive ? "text-terracotta" : "text-darkchoco hover:text-darkchoco"}
          >
          Certifikater
        </NavLink>

        <NavLink 
          to="/contact" 
            className={({ isActive }) => isActive ? "text-terracotta" : "text-darkchoco hover:text-darkchoco"}
             >
            Kontakt
            </NavLink>

            <NavLink
            to="/cv"
            className={({ isActive }) => isActive ? "text-terracotta" : "text-darkchoco hover:text-darkchoco"}
            >
            CV
            </NavLink>

            <div className="flex gap-4 pr-6">
              {/* GitHub ikon (sort) */}
              <a href="https://github.com/soswind" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-all duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              {/* LinkedIn ikon (sort) */}
              <a href="https://www.linkedin.com/in/søs-wind-95a9a616b/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-all duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <button className="lg:hidden text-darkchoco pr-4 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

        {/* Mobilmenu */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md p-4 flex flex-col items-center pt-24 transition-transform duration-200 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button className="absolute top-6 right-6 text-darkchoco focus:outline-none" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>

          <NavLink to ="/" className="text-2xl text-darkchoco hover:text-terracotta" onClick={() => setMenuOpen(false)}>Hjem</NavLink>
          <NavLink to ="/projects" className="text-2xl text-darkchoco hover:text-terracotta" onClick={() => setMenuOpen(false)}>Projekter</NavLink>
          <NavLink to ="/contact" className="text-2xl text-darkchoco hover:text-terracotta" onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
          <NavLink to ="/cv" className="text-2xl text-darkchoco hover:text-terracotta" onClick={() => setMenuOpen(false)}>CV</NavLink>

          <div className="flex gap-4 mt-6">
            {/* GitHub ikon (sort) */}
            <a href="https://github.com/soswind" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-all duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            {/* LinkedIn ikon (sort) */}
            <a href="https://www.linkedin.com/in/søs-wind-95a9a616b/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-all duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);







