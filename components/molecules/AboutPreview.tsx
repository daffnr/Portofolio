import React from "react";
import Link from "next/link";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInWrapper direction="left" delay={100} duration={800}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-3xl" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Passion for <span className="text-yellow-400">Innovation</span> & Problem Solving
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                My transition from Agriculture to Web Development has taught me the importance of adaptability and a growth mindset. 
                I am passionate about creating efficient and scalable solutions, leveraging the latest technologies like Next.js and Node.js to deliver high-quality results.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-yellow-400 font-bold text-lg group"
              >
                Read More About Me 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </FadeInWrapper>

          <FadeInWrapper direction="right" delay={300} duration={800}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-[#111] border border-white/10 rounded-3xl">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">10+</h3>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Projects Completed</p>
              </div>
              <div className="p-8 bg-[#111] border border-white/10 rounded-3xl mt-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">Fullstack</h3>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Specialization</p>
              </div>
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
