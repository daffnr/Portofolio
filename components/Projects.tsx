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
      title: "Employee List",
      description: "Manage employee data easily.",
      image: "/images/employeeList.png",
      link: "https://employee-list-liard.vercel.app/",
    },
    {
      title: "Quotes Generator",
      description: "Generate random quotes.",
      image: "/images/quotesGenerator.png",
      link: "https://random-quotes-generator-puce.vercel.app/",
    },
    {
      title: "Drum Machine",
      description: "Create beats with the drum machine.",
      image: "/images/drumMachine.png", 
      link: "https://drum-machine-opal-iota.vercel.app/",
    },
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