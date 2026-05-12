/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";

const About = React.memo(({ id }: any) => {
  return (
    <div id={id} className="bg-[#111] pb-[4rem] pt-[12vh] md:pt-[120px]">
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
                My transition from Agriculture to Web Development has taught me
                the importance of adaptability and a growth mindset. After
                graduating from Universitas Jenderal Soedirman, I joined
                Purwadhika's Full Stack Web Development bootcamp, where I
                completed multiple projects and honed my skills in React.js,
                Next.js, Tailwind CSS, Express.js, MySQL, and RESTful APIs.
                Additionally, I gained hands-on experience with Docker for
                containerization and GitHub for version control and collaborative
                development. These experiences have equipped me to build modern,
                user-centric web applications while continuously learning and
                adapting to new challenges. I'm passionate about creating
                efficient and scalable solutions, and I enjoy leveraging the
                latest technologies to deliver high-quality results.
              </p>
            </div>
          </div>
        </FadeInWrapper>
        
        <FadeInWrapper direction="right" delay={200} duration={800}>
          <div className="relative mx-auto lg:mx-0 flex items-center justify-center w-[300px] h-[400px] md:w-[400px] md:h-[520px] lg:w-[450px] lg:h-[580px]">
            <div className="absolute inset-0 bg-yellow-400/5 rounded-full blur-3xl" />
            <div className="relative w-[90%] h-[90%] rounded-2xl overflow-hidden border-2 border-yellow-400/20 shadow-2xl">
              <Image
                src="/images/foto_profesional.jpeg"
                alt="Daffa"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
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
