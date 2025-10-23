"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Modal from "./ui/modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  previewImages: string[];
}

const Projects: React.FC<{ id?: string }> = ({ id }) => {
  const items: Project[] = [
    {
      title: "Best Martial Arts",
      description: "Visit the Best Martial Arts website.",
      image: "/images/companyWeb.png",
      link: "https://web-company-profile-three.vercel.app/home",
      previewImages: [
        "/images/ssCompanyWeb1.png",
        "/images/ssCompanyWeb2.png",
        "/images/ssCompanyWeb3.png",
      ],
    },
    {
      title: "Contact App",
      description: "Manage and organize your contacts easily with this app.",
      image: "/images/contactApp.png",
      link: "https://my-contact-app-kappa.vercel.app/",
      previewImages: ["/images/ssContactApp1.png", "/images/ssContactApp2.png"],
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix-inspired movie streaming platform with Firebase authentication and TMDB API integration.",
      image: "/images/netflixClone.png",
      link: "https://netflix-clone-pink-mu.vercel.app/",
      previewImages: [
        "/images/ssNetflix1.png",
        "/images/ssNetflix2.png",
        "/images/ssNetflix3.png",
      ],
    },
    {
      title: "Drum Machine",
      description: "Create beats with the drum machine.",
      image: "/images/drumMachine.png",
      link: "https://drum-machine-opal-iota.vercel.app/",
      previewImages: ["/images/ssDrum.png"],
    },
    {
      title: "NewsApp Mobile",
      description:
        "A clean and responsive mobile news application built with React Native and Expo. Browse the latest headlines, read full articles, and explore detailed news screens in a smooth native experience.",
      image: "/images/newsApp.png",
      link: "https://drive.google.com/file/d/1QobBGOPB1XhnAGyh_77hW78bMxQzI6An/view?usp=drive_link",
      previewImages: ["/images/ssNewsApp1.png", "/images/ssNewsApp2.png"],
    },
    {
      title: "SIMPS PPOB",
      description:
        "SIMS PPOB is an online platform that allows users to pay bills and manage their transactions easily.",
      image: "/images/ssSimsppob1.png",
      link: "https://sims-ppob-daffa-naufal-ramadhan.vercel.app/",
      previewImages: ["/images/ssSimsppob2.png", "/images/ssSimsppob1.png", "/images/ssSimsppob3.png", "/images/ssSimsppob4.png", "/images/ssSimsppob5.png"],
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedImages, setSelectedImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id={id} className="pt-[4rem] md:pt-[8rem] pb-[8rem] px-4">
      <h1 className="heading mb-10">
        Pro<span className="text-yellow-400">ject</span>
      </h1>

      <BentoGrid className="max-w-[1500px] mx-auto sm:px-6 lg:px-8 pt-[2rem] gap-y-16 gap-x-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            onPreview={() => {
              setSelectedImages(item.previewImages);
              setIsOpen(true);
            }}
            className="cursor-default h-auto"
          />
        ))}
      </BentoGrid>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-md"
        >
          {selectedImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center w-full h-[60vh]">
                <img
                  src={src}
                  alt={`Preview ${idx}`}
                  className="max-h-[60vh] w-auto object-contain rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </div>
  );
};

export default Projects;
