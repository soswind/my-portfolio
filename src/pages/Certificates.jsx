import React from "react";

import { useState } from "react";

const certificates = [
    { id: 1, image: "/LinkedIn Learning Course - React.png", title: "React.js", description: "Learning React.js Kursus fra LinkedIn Learning"},
    { id: 2, image: "/LinkedIn Learning Course - Git & Github.png", title: "Git & Github", description: "Learning Git & Github Kursus fra LinkedIn Learning"},
    { id: 3, image: "/LinkedIn Learning Course - RESTful APIs.png", title: "RESTful APIs", description: "Designing RESTful API's Kursus fra LinkedIn Learning"}
];

const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="p-6 pt-32 max-w-6xl mx-auto">
            <h1 className="text-4xl text-center text-gray-800">Mine Certifikater</h1>
            <p className="p-6 text-center text-lg text-gray-600">Jeg holder mig opdateret ved regelmæssigt at gennemføre kurser</p>
            
            {/* Certifikater grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {certificates.map((cert) => (
                    <div key={cert.id} className="p-4 border rounded-xl shadow-lg text-center cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                        <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-xl font-semibold mt-4">{cert.title}</h2>
                        <p className="text-lg text-gray-600">{cert.description}</p>
                        <p className="text-md text-gray-500">Dato: {cert.date}</p>
                    </div>
                ))}
            </div>
            
            {/* Modal til større billede */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Certifikat" className="max-w-3xl max-h-full rounded-lg" />
                </div>
            )}
        </div>
    );
};

export default Certificates;
