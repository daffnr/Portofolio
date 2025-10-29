/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import FadeInWrapper from "./FadeInWrapper";

const About = React.memo(({ id }: any) => {
  return (
    <div id={id} className="bg-[#121121] pb-[4rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <FadeInWrapper direction="left" delay={100} duration={800}>
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
          <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
            <Image
              src="/images/Daffa5.jpeg"
              alt="user"
              layout="fill"
              objectFit="contain"
              className="relative z-[11] w-[100%] h-[100%] object-contain"
              loading="lazy"
              priority={false}
            />
            <div className="absolute w-[63%] h-[100%] z-[10] bg-[#55e6a5] top-[1.2rem] right-[4.5rem]"></div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
