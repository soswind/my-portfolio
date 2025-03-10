import React, { useRef, useEffect } from "react";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Cv = () => {
    const cvRef = useRef(null);

    // Debugging: Sikrer at cvRef eksisterer
    useEffect(() => {
        if (cvRef.current) {
            console.log("cvRef er korrekt sat:", cvRef.current);
        } else {
            console.error("cvRef er NULL - Noget er galt!");
        }
    }, []);

    const handleDownload = async () => {
        const input = cvRef.current;

        if (!input) {
            console.error("CV-sektion blev ikke fundet");
            return;
        }

        try {
            console.log("✅ Genererer PDF...");
            const canvas = await html2canvas(input, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save("Søs_Wind_CV.pdf");   

            console.log("PDF blev genereret og gemt!");
        } catch (error) {
            console.error("Fejl under generering af PDF:", error);
        }
    };

  return (
    <div className="p-6 pt-32 max-w-6xl mx-auto">
      <h1 className="text-4xl text-center text-gray-800">Mit CV</h1>
      <p className="p-6 text-center text-lg text-gray-600">Her kan du læse om min uddannelse og erhvervserfaring.</p>


      {/* CV-indhold til PDF */}
      <div ref={cvRef} className="bg-white p-6 shadow-lg rounded-lg border">

      {/* Grid layout for Uddannelse & Erhvervserfaring */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Uddannelse Sektion */}
        <div className="p-6 border rounded-xl shadow-lg bg-[#e1ccbe] text-white">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={30} className="text-darkchoco" />
            <h2 className="text-3xl text-darkchoco font-semibold">Uddannelse</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-lg text-darkchoco">2023 - 2025</p>
              <p className="font-semibold text-darkchoco">Professionsbachelor i Webudvikling, Erhvervsakademi Aarhus</p>
              <ul className="list-disc list-inside text-darkchoco">
                <li>React, Remix</li>
                <li>PHP, MySQL, MongoDB</li>
                <li>Node.js, Express.js</li>
                <li>HTML, CSS, JavaScript</li>
                <li>UX, Figma</li>
                <li>Tailwind CSS, GitHub</li>
              </ul>
            </div>

            <div>
              <p className="text-lg text-darkchoco">2018 - 2020</p>
              <p className="font-semibold text-darkchoco">Multimediedesigner, Erhvervsakademi Aarhus</p>
              <ul className="list-disc list-inside text-darkchoco">
                <li>WordPress</li>
                <li>Adobe Suite</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>

            <div>
              <p className="text-lg text-darkchoco">2018</p>
              <p className="font-semibold text-darkchoco">Kursus i IT, Afsætning & Erhvervsøkonomi, BSS Aarhus</p>
              <ul className="list-disc list-inside text-darkchoco">
                <li>Informationsteknologi</li>
                <li>Erhvervsøkonomi</li>
                <li>Afsætning</li>
              </ul>
            </div>

            <div>
              <p className="text-lg text-darkchoco">2014 - 2016</p>
              <p className="font-semibold text-darkchoco">STX på 2 år, Studenterkurset Toftlund</p>
              <ul className="list-disc list-inside text-darkchoco">
                <li>Engelsk A</li>
                <li>Matematik B</li>
                <li>Samfundsfag A</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Erhvervserfaring Sektion */}
        <div className="p-6 border rounded-xl shadow-lg bg-terracotta">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={30} className="text-white" />
            <h2 className="text-3xl text-white font-semibold">Erhvervserfaring</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-lg text-white">2021 - nu</p>
              <p className="font-semibold text-white">Nioba ApS</p>
              <p className="text-white">Webudvikler (Fuldtid 2021-2023, Deltid 2023-nu)</p>
              <ul className="list-disc list-inside text-white">
                <li>Webdesign & Webudvikling</li>
                <li>SEO & Hosting</li>
                <li>SMTP, DKIM opsætning</li>
                <li>Udarbejdelse af WordPress-webshops</li>
                <li>Kundekontakt & møder</li>
              </ul>
            </div>

            <div>
              <p className="text-lg text-white">2024 (4 måneder)</p>
              <p className="font-semibold text-white">Nspire</p>
              <p className="text-white">Praktikant, Webudvikling</p>
              <ul className="list-disc list-inside text-white">
                <li>PHP & REST API</li>
                <li>MySQL, HTML, CSS, JavaScript</li>
              </ul>
            </div>

            <div>
              <p className="text-lg text-white">2018 - 2021</p>
              <p className="font-semibold text-white">IKEA A/S</p>
              <p className="text-white">Servicemedarbejder</p>
              <ul className="list-disc list-inside text-white">
                <li>Kundeservice & Oplæring</li>
                <li>Kassebetjening, Kasseopgørelse</li>
                <li>Rengøring</li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
      </div>
      
      
         {/* Download PDF-knap - Flyttet nederst */}
      <div className="flex justify-center mt-10">
        <button 
          onClick={handleDownload} 
          className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          <Download size={20} /> Download CV (PDF)
        </button>
      
        </div>
        </div>
    
  );
};

export default Cv;
