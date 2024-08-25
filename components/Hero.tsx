/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = ({id}:any) => {
  return (
    <div id={id} className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">DAFFA!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            With a strong foundation in HTML, CSS, JavaScript, Node.js,
            TypeScript, and MySQL, I create dynamic, responsive, and
            user-friendly websites and applications. My focus is on writing
            clean, efficient code and crafting seamless user experiences. I'm
            always eager to learn and adapt to new technologies, striving to
            push the boundaries of web development.
          </p>
          {/* <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="/cv/cv.pdf"
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[0.8rem] text-[18px]
            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </a>
          </div> */}
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/Daffa4.jpeg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
