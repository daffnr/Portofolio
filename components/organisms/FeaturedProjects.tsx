"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/molecules/bento-grid";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";
import Modal from "@/components/molecules/modal";
import { ProjectModalContent, ProjectData } from "@/components/molecules/ProjectModalContent";

const FeaturedProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const featuredItems: ProjectData[] = [
    {
      title: "ngoCare Medical Supplies",
      description:
        "A modern company profile and semi e-commerce website for a medical equipment business.",
      image: "/images/ngoCare1.png",
      liveUrl: "https://ngo-care-solutions.vercel.app/",
      githubUrl: "https://github.com/daffnr",
      techStack: ["Next.js", "React", "Framer Motion"],
      previewImages: [
        "/images/ngoCare2.png",
        "/images/ngoCare3.png",
        "/images/ngoCare4.png",
        "/images/ngoCare4.png",
      ],
    },
    {
      title: "ContactHub CRM",
      description: "SaaS-inspired CRM dashboard for managing contacts, relationships, and business networks.",
      image: "/images/heroCH.png",
      liveUrl: "https://contact-hub-kohl.vercel.app/",
      githubUrl: "https://github.com/daffnr/ContactHub",
      techStack: ["React","TypeScript","Tailwind CSS","TanStack Query","Framer Motion"],
      previewImages: ["/images/heroCH.png","/images/ch1.png", "/images/ch2.png"],
    },
    {
      title: "SIMS PPOB",
      description:
        "SIMS PPOB is an online platform that allows users to pay bills and manage their transactions easily.",
      image: "/images/ssSimsppob1.png",
      liveUrl: "https://sims-ppob-daffa-naufal-ramadhan.vercel.app/",
      githubUrl: "https://github.com/daffnr",
      techStack: ["React", "Redux Toolkit", "React Router", "Styled Components"],
      previewImages: [
        "/images/ssSimsppob2.png",
        "/images/ssSimsppob1.png",
        "/images/ssSimsppob3.png",
        "/images/ssSimsppob4.png",
        "/images/ssSimsppob5.png",
      ],
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
                A curated collection of projects showcasing modern web development, scalable architecture, and thoughtful user experiences.
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
                techStack={item.techStack}
                onOpenDetails={() => {
                  setSelectedProject(item);
                  setIsOpen(true);
                }}
                className="bg-[#0a0a0a] border-white/5"
              />
            </FadeInWrapper>
          ))}
        </BentoGrid>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedProject && <ProjectModalContent project={selectedProject} />}
        </Modal>
      </div>
    </section>
  );
};

export default FeaturedProjects;
