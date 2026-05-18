import React from "react";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = ({ id }: { id?: string }) => {
  const certs = [
    {
      title: "Full Stack Web Development",
      issuer: "Purwadhika Digital Technology School",
      year: "2024",
      link: "https://drive.google.com/file/d/14q8W6YEXJTT39jD6VRQEoqRmSZ5nHpJF/view?usp=drive_link",
    },
    {
      title: "Database MySql",
      issuer: "Online Certification",
      year: "2024",
      link: "https://drive.google.com/file/d/1F-YO-KKCB6K2OK8_oA8JuixO7cGA8JK_/view?usp=drive_link",
    },
    {
      title: "React Native",
      issuer: "Online Certification",
      year: "2025",
      link: "https://drive.google.com/file/d/15D-kuLhG4rBV2eu-OQR8dYh2PdrchbRG/view?usp=drive_link",
    }, 
  ];

  return (
    <section id={id} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWrapper direction="up" delay={100} duration={600}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            PROFESSIONAL <span className="text-yellow-400">CERTIFICATIONS</span>
          </h2>
        </FadeInWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[12vh]">
          {certs.map((cert, i) => (
            <FadeInWrapper 
              key={i}
              direction="up" 
              delay={200 + i * 100} 
              duration={600}
              className="h-full"
            >
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 bg-[#111] border border-white/10 rounded-3xl hover:border-yellow-400/50 transition-all duration-500 flex flex-col h-full cursor-pointer overflow-hidden shadow-2xl block"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-yellow-400/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400/20 transition-all duration-500">
                    <FaCertificate className="text-yellow-400 text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-500 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-400 font-medium mb-4 flex items-center text-sm">
                    <span className="w-4 h-[2px] bg-yellow-400/30 mr-3"></span>
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
                  <span className="px-4 py-1.5 bg-white/5 rounded-full text-slate-400 text-sm font-bold border border-white/5 group-hover:border-yellow-400/20 group-hover:text-slate-300 transition-all duration-500">
                    {cert.year}
                  </span>
                  <div className="flex items-center text-yellow-400 font-bold text-sm group-hover:translate-x-1 transition-transform duration-500">
                    View Cert <FaExternalLinkAlt className="ml-2" />
                  </div>
                </div>
              </a>
            </FadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
