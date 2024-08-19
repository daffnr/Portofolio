/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = ({id} : any) => {
  return (
    <div id={id} className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20-px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I'm a Web Developer with a strong focus on creating responsive and
              user-friendly websites. I specialize in HTML, CSS, JavaScript,
              Node.js, TypeScript, and MySQL, allowing me to work across both
              front-end and back-end development. I’m a graduate of Purwadhika
              bootcamp, where I honed my skills and deepened my understanding of
              modern web technologies. I love solving problems through code and
              continuously improving my skills with the latest technologies. My
              goal is to build efficient and intuitive web applications that
              provide a great user experience. Outside of work, I enjoy learning
              about new web trends and contributing to open-source projects.
            </p>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/Daffa5.jpeg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[63%] h-[100%] z-[10] bg-[#55e6a5] top-[1.2rem] right-[4.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
