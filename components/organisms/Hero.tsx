/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "@/components/atoms/Particle";
import TextEffect from "@/components/molecules/TextEffect";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="min-h-screen relative overflow-hidden z-10 bg-transparent flex items-center justify-center pt-[150px] pb-20"
    >
      <Particle />
      
      {/* Background elements removed for cleaner look */}
      
      <div className="w-[85%] mx-auto flex flex-col items-start text-left relative z-20">
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
      </div>
    </div>
  );
};

export default Hero;
