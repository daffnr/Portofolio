import React, { useState } from "react";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";
import { FaCertificate, FaSearchPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Certifications = ({ id }: { id?: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certs = [
    {
      title: "Full Stack Web Development",
      issuer: "Purwadhika Digital Technology School",
      year: "2024",
      image: "/images/cert_placeholder.png", // Ganti dengan path gambar sertifikat Anda
    },
    {
      title: "Next.js & Modern Web Architecture",
      issuer: "Online Certification",
      year: "2025",
      image: "/images/cert_placeholder.png",
    },
    {
      title: "Backend Development with Node.js & MySQL",
      issuer: "Professional Bootcamp",
      year: "2024",
      image: "/images/cert_placeholder.png",
    }, 
  ];

  return (
    <section id={id} className="py-20 bg-[#09101a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWrapper direction="up" delay={100} duration={600}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            PROFESSIONAL <span className="text-yellow-400">CERTIFICATIONS</span>
          </h2>
        </FadeInWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <FadeInWrapper 
              key={i}
              direction="up" 
              delay={200 + i * 100} 
              duration={600}
              className="h-full"
            >
              <div 
                onClick={() => setSelectedImage(cert.image)}
                className="group relative p-5 bg-[#111] border border-white/10 rounded-3xl hover:border-yellow-400/50 transition-all duration-500 flex flex-col h-full cursor-pointer overflow-hidden shadow-2xl"
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
                    View Cert <FaSearchPlus className="ml-2" />
                  </div>
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[20000] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Certificate"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
