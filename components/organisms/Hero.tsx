/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "@/components/atoms/Particle";
import TextEffect from "@/components/molecules/TextEffect";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const techIcons = [
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", darkLogo: true },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", darkLogo: true },
];

const Hero = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="min-h-screen relative overflow-hidden z-10 bg-transparent flex items-center justify-center pt-[150px] pb-20"
    >
      <Particle />
      
      {/* Background elements removed for cleaner look */}
      
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-[40px] md:text-[40px] lg:text-[60px] text-white font-black leading-[1.1] tracking-tighter uppercase">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Daffa!
            </span>
          </h1>
          <div className="text-[20px] md:text-[25px] font-semibold text-slate-300">
            <TextEffect />
          </div>
          <p className="text-[16px] md:text-[18px] text-slate-400 leading-relaxed max-w-2xl">
            With expertise in front-end development using modern frameworks, I create dynamic and responsive user interfaces. I also build robust back-end systems, delivering full-stack applications that are scalable and user-friendly.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-start">
            <Link href="/services#project" className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              View My Work
            </Link>
            <Link href="/contact" className="px-6 py-3 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition">
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Abstract Glowing Core + Orbiting Tech Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center h-[350px] lg:h-[500px] w-full pointer-events-none mt-10 lg:mt-0"
        >
          {/* Subtle Orbit Ring Backgrounds */}
          <div className="absolute w-[280px] h-[280px] lg:w-[440px] lg:h-[440px] rounded-full border border-white/5 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]" />
          <div className="absolute w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] rounded-full border border-yellow-400/10 shadow-[0_0_60px_rgba(250,204,21,0.05)]" />

          {/* Central Glowing Core (Replaces Photo) */}
          <div className="relative flex items-center justify-center z-10 pointer-events-auto group">
            <div className="absolute w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-yellow-400/20 rounded-full blur-[40px] group-hover:bg-yellow-400/30 transition-colors duration-700" />
            <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border border-yellow-400/30 bg-black/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.2)]">
              <div className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)] animate-pulse" />
            </div>
          </div>

          {/* Orbiting Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute w-[280px] h-[280px] lg:w-[440px] lg:h-[440px]"
          >
            {techIcons.map((tech, i) => {
              const angle = (i * 360) / techIcons.length;

              return (
                <div
                  key={tech.name}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <motion.div
                    initial={{ rotate: -angle }}
                    animate={{ rotate: -angle - 360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                      className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center p-2.5 lg:p-3.5 shadow-[0_0_20px_rgba(250,204,21,0.1)] pointer-events-auto hover:border-yellow-400/40 hover:bg-black/60 transition-colors cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <Image 
                          src={tech.logo} 
                          alt={tech.name} 
                          fill 
                          className={`object-contain ${tech.darkLogo ? 'invert brightness-0 opacity-90' : ''}`} 
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
