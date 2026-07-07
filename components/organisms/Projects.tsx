"use client";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/molecules/bento-grid";
import Modal from "@/components/molecules/modal";
import {
  ProjectModalContent,
  ProjectData,
} from "@/components/molecules/ProjectModalContent";
import FadeInWrapper from "@/components/molecules/FadeInWrapper";

const Projects: React.FC<{ id?: string }> = ({ id }) => {
  const items: ProjectData[] = [
    {
      title: "Bank Sampah BERLIAN",
      description:
        "A modern, integrated waste bank management system that enables users to trade sorted plastic waste for financial savings, featuring role-based dashboards, pickup scheduling, and interactive branch maps.",
      image: "/images/berlian1.png",
      liveUrl: "https://berlian-neon.vercel.app/",
      githubUrl: "https://github.com/daffnr/berlian",
      techStack: ["Next.js", "React", "Tailwind CSS", "Prisma", "NextAuth.js"],
      previewImages: [
        "/images/berlian1.png",
        "/images/berlian2.png",
        "/images/berlian3.png",
        "/images/berlian4.png",
      ],
    },
    {
      title: "ngoCare Medical Supplies",
      description:
        "A modern company profile and semi e-commerce website for a medical equipment business.",
      image: "/images/ngoCare1.png",
      liveUrl: "https://ngo-care-solutions.vercel.app/",
      githubUrl: "https://github.com/daffnr/ngoCare-Solutions",
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
      description:
        "SaaS-inspired CRM dashboard for managing contacts, relationships, and business networks.",
      image: "/images/heroCH.png",
      liveUrl: "https://contact-hub-kohl.vercel.app/",
      githubUrl: "https://github.com/daffnr/ContactHub",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Framer Motion",
      ],
      previewImages: [
        "/images/heroCH.png",
        "/images/ch1.png",
        "/images/ch2.png",
      ],
    },
    {
      title: "SIMS PPOB",
      description:
        "SIMS PPOB is an online platform that allows users to pay bills and manage their transactions easily.",
      image: "/images/ssSimsppob1.png",
      liveUrl: "https://sims-ppob-daffa-naufal-ramadhan.vercel.app/",
      githubUrl: "https://github.com/daffnr/SIMS-PPOB-Daffa-Naufal-Ramadhan",
      techStack: [
        "React",
        "Redux Toolkit",
        "React Router",
        "Styled Components",
      ],
      previewImages: [
        "/images/ssSimsppob2.png",
        "/images/ssSimsppob1.png",
        "/images/ssSimsppob3.png",
        "/images/ssSimsppob4.png",
        "/images/ssSimsppob5.png",
      ],
    },
    {
      title: "Cermind",
      description:
        "Cermind is a mobile quiz game designed to train concentration and quick thinking.",
      image: "/images/ssCermind2.png",
      liveUrl:
        "https://drive.google.com/file/d/1JiLFaEAb8TTPKoAIqyNJMoSJiEAvIv_v/view?usp=drive_link",
      githubUrl: "https://github.com/daffnr/Cermind",
      techStack: ["React Native", "Expo", "React Navigation", "Reanimated"],
      previewImages: [
        "/images/ssCermind1.png",
        "/images/ssCermind2.png",
        "/images/ssCermind3.png",
        "/images/ssCermind4.png",
        "/images/ssCermind5.png",
        "/images/ssCermind6.png",
        "/images/ssCermind7.png",
      ],
    },
    {
      title: "NewsApp Mobile",
      description:
        "A responsive mobile news app built with React Native and Expo for browsing headlines and reading articles.",
      image: "/images/newsApp.png",
      liveUrl:
        "https://drive.google.com/file/d/1QobBGOPB1XhnAGyh_77hW78bMxQzI6An/view?usp=drive_link",
      githubUrl: "https://github.com/daffnr/News-App",
      techStack: ["React Native", "Expo", "React Navigation", "Axios"],
      previewImages: ["/images/ssNewsApp1.png", "/images/ssNewsApp2.png"],
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix-inspired movie streaming platform with Firebase authentication and TMDB API integration.",
      image: "/images/netflixClone.png",
      liveUrl: "https://netflix-clone-pink-mu.vercel.app/",
      githubUrl: "https://github.com/daffnr/Netflix-Clone",
      techStack: ["React", "Firebase", "React Router"],
      previewImages: [
        "/images/ssNetflix1.png",
        "/images/ssNetflix2.png",
        "/images/ssNetflix3.png",
      ],
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectData | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id={id} className="pt-[12vh] md:pt-[120px] pb-[8rem] px-4">
      <FadeInWrapper direction="up" delay={100} duration={600}>
        <h1 className="heading mb-10">
          Pro<span className="text-yellow-400">ject</span>
        </h1>
      </FadeInWrapper>

      <FadeInWrapper direction="up" delay={200} duration={600}>
        <BentoGrid className="max-w-[1500px] mx-auto sm:px-6 lg:px-8 pt-[2rem] gap-y-16 gap-x-8">
          {items.map((item, i) => (
            <FadeInWrapper
              key={i}
              direction="up"
              delay={300 + i * 100}
              duration={500}
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
      </FadeInWrapper>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedProject && <ProjectModalContent project={selectedProject} />}
      </Modal>
    </div>
  );
};

export default Projects;
