import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import examLogo from "/src/assets/exam-logo.png";

const projects = [
    {
        id: 1,
        title: "Event Applikation",
        description: "Remix app, hvor brugere kan finde og oprette events, med MongoDB som database.",
        description1: "Opret en bruger og test løsningen!",
        image: examLogo,
        link: "https://remix-project-77b343a0b53c.herokuapp.com/events",
    },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf7] p-6 pt-32 max-w-6xl mx-auto">
      <h1 className="text-4xl text-center text-darkchoco">Mine Projekter</h1>
      <p className="mt-4 text-lg text-center text-gray-700">Opdateres løbende</p>

      {/* Grid af projekter */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-42 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-darkchoco">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-2 text-gray-600">{project.description1}</p>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-deepbrown text-white px-4 py-2 rounded-lg shadow-md hover:bg-terracotta transition"
              >
                Se mere →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

