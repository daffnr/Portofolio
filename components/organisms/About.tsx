/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";

const About = React.memo(({ id }: any) => {
  return (
    <div id={id} className="bg-black pb-[4rem] pt-[12vh] md:pt-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <FadeInWrapper direction="left" delay={100} duration={800}>
          <div>
            <h1 className="text-[20-px] font-bold uppercase text-[#facc15] mb-[1rem]">
              ABOUT ME
            </h1>
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
              Transforming <span className="text-yellow-400">Visions</span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
              <p className="text-[19px] text-slate-300 w-[80%]">
                I’m a fullstack developer passionate about building modern, scalable, and user-centered digital experiences. My experience includes developing web applications using React, Next.js, Tailwind CSS, Express.js, MySQL, and RESTful APIs, along with mobile application development using React Native. I enjoy turning ideas into clean, responsive, and functional products while continuously exploring new technologies and development practices. Familiar with tools like Docker and GitHub, I focus on creating applications that are efficient, maintainable, and visually engaging.
              </p>
            </div>
          </div>
        </FadeInWrapper>
        
        <FadeInWrapper direction="right" delay={200} duration={800}>
          <div className="relative mx-auto lg:mx-0 flex items-center justify-center w-[300px] h-[400px] md:w-[400px] md:h-[520px] lg:w-[450px] lg:h-[580px]">
            <div className="absolute inset-0 bg-yellow-400/5 rounded-full blur-3xl" />
            <div className="relative w-[90%] h-[90%] rounded-2xl overflow-hidden border-2 border-black shadow-2xl">
              <Image
                src="/images/foto_profesional2.png"
                alt="Daffa"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
                className="relative z-[11] hover:scale-105 transition-transform duration-500"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
