import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC<{ id: string }> = ({ id }) => {
  const items: Project[] = [
    {
      title: "Best Martial Arts",
      description: "Visit the Best Martial Arts website.",
      image: "/images/companyWeb.png",
      link: "https://web-company-profile-three.vercel.app/home",
    },
    {
      title: "Contact App",
      description: "Manage and organize your contacts easily with this app.",
      image: "/images/contactApp.png",
      link: "https://my-contact-app-kappa.vercel.app/",
    },
    {
      title: "Netflix Clone",
      description: "A Netflix-inspired movie streaming platform with Firebase authentication and TMDB API integration.",
      image: "/images/netflixClone.png",
      link: "https://netflix-clone-pink-mu.vercel.app/",
    },
    {
      title: "Drum Machine",
      description: "Create beats with the drum machine.",
      image: "/images/drumMachine.png", 
      link: "https://drum-machine-opal-iota.vercel.app/",
    },
    {
      title: "WishCart E-commerce",
      description: "A simple and responsive e-commerce web application built with React and Redux. Browse products, manage your cart, and add new items with ease.",
      image: "/images/wishCart.png", 
      link: "https://react-redux-wishcart.vercel.app/",
    }
  ];

  return (
    <div id={id} className="pt-[4rem] md:pt-[8rem] pb-[8rem]">
      <h1 className="heading mb-10">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <BentoGrid className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-[2rem] gap-y-16 gap-x-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image} 
            className="cursor-pointer h-[320px]"
            onClick={() => window.open(item.link, "_blank")}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;