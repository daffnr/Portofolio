"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { TECH_LOGOS, DARK_LOGOS } from "./bento-grid";

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack?: string[];
  previewImages?: string[];
}

export const ProjectModalContent = ({ project }: { project: ProjectData }) => {
  return (
    <div className="flex flex-col space-y-6 text-white pb-2">
      <div className="relative mt-2">
        <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-3 pr-8">
          {project.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6"></div>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {project.techStack && project.techStack.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg"
              >
                {TECH_LOGOS[tech] ? (
                  <img
                    src={TECH_LOGOS[tech]}
                    alt={tech}
                    className={cn(
                      "w-4 h-4 object-contain",
                      DARK_LOGOS.has(tech) ? "filter invert brightness-0 opacity-90" : ""
                    )}
                  />
                ) : null}
                <span className="text-xs text-slate-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        {project.liveUrl && (
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-400 text-black text-sm font-bold hover:bg-yellow-300 hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
          >
            <FaExternalLinkAlt size={14} /> Live Demo
          </button>
        )}
        {project.githubUrl && (
          <button
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#24292e] text-white border border-white/10 text-sm font-bold hover:bg-[#2f363d] hover:scale-[1.02] transition-all duration-200"
          >
            <FaGithub size={16} /> GitHub Repository
          </button>
        )}
      </div>

      {project.previewImages && project.previewImages.length > 0 && (
        <div className="pt-4 border-t border-white/10 mt-6">
          <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Project Previews</h3>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl overflow-hidden border border-white/5"
          >
            {project.previewImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-[40vh] md:h-[50vh] bg-black/50 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`${project.title} Preview ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
