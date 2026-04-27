/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "@/components/atoms/Particle";
import TextEffect from "@/components/molecules/TextEffect";
import Image from "next/image";

const Hero = ({ id }: any) => {
  return (
    <div
      id={id}
      className="min-h-[88vh] relative pt-[12vh] overflow-hidden z-10 mb-[2rem] scroll-mt-[12vh]"
    >
      {/* Background Image Optimized */}
      <Image 
        src="/images/banner.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover z-[-1]"
        quality={75}
      />
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#09101a]/70 z-[-1]"></div>

      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center p-[1rem]">
        <div className="pt-[2rem]">
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">DAFFA!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            With expertise in front-end development using HTML, CSS, JavaScript,
            and Tailwind CSS, I create dynamic and responsive user interfaces. I
            also have experience in back-end development with Node.js,
            Express.js, and MySQL, allowing me to build full-stack
            applications that are both functional and user-friendly. My focus is
            on writing clean, efficient code and delivering seamless user
            experiences.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#facc15] relative mx-auto lg:mx-0 flex items-center justify-center mt-10 rounded-full overflow-hidden"
        >
          <Image
            src="/images/Daffa4.jpeg"
            alt="user"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
