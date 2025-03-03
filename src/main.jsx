import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcfbf7]">
        <nav className="fixed top-0 left-0 w-full bg-sandbeige shadow-md p-4 flex justify-end items-center z-50">
          <div className="flex gap-6 pr-6">
            <Link to="/" className="text-lg text-white hover:text-darkchoco transition-all duration-300">Hjem</Link>
            <Link to="/projects" className="text-lg text-white hover:text-darkchoco transition-all duration-300">Projekter</Link>
            <Link to="/contact" className="text-lg text-white hover:text-darkchoco transition-all duration-300">Kontakt</Link>
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
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);







