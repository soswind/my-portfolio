import React from "react";

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">Mine Projekter</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-xl shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Projekt 1</h2>
          <p className="text-gray-600">Beskrivelse af projektet...</p>
        </div>
        <div className="p-4 border rounded-xl shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Projekt 2</h2>
          <p className="text-gray-600">Beskrivelse af projektet...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
