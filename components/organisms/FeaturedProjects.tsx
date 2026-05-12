import React from "react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/molecules/bento-grid";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";

const FeaturedProjects = () => {
  const featuredItems = [
    {
      title: "ngoCare Medical Supplies",
      description:
        "A modern company profile and semi e-commerce website for a medical equipment business.",
      image: "/images/ngoCare1.png",
      link: "https://ngo-care-solutions.vercel.app/",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix-inspired movie streaming platform with Firebase authentication and TMDB API integration.",
      image: "/images/netflixClone.png",
      link: "https://netflix-clone-pink-mu.vercel.app/",
    },
    {
      title: "SIMPS PPOB",
      description:
        "SIMS PPOB is an online platform that allows users to pay bills and manage their transactions easily.",
      image: "/images/ssSimsppob1.png",
      link: "https://sims-ppob-daffa-naufal-ramadhan.vercel.app/",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWrapper direction="up" delay={100} duration={600}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="text-yellow-400">Projects</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                A selection of my best work, spanning from medical supply platforms to entertainment clones.
              </p>
            </div>
            <Link 
              href="/services#project"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-all duration-300 font-semibold"
            >
              View All Projects →
            </Link>
          </div>
        </FadeInWrapper>

        <BentoGrid className="gap-8">
          {featuredItems.map((item, i) => (
            <FadeInWrapper 
              key={i}
              direction="up" 
              delay={200 + i * 100} 
              duration={600}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                className="bg-[#111] border-neutral-800"
              />
            </FadeInWrapper>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default FeaturedProjects;
