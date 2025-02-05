import React from "react";

const Skils = ({ id }: any) => {
  
  const techStack = [
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    {
      name: "GitHub",
      logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    },
  ];

  const tools = [
    {
      name: "VS Code",
      logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    },
    { name: "NPM", logo: "https://cdn.worldvectorlogo.com/logos/npm.svg" },
    { name: "Yarn", logo: "https://cdn.worldvectorlogo.com/logos/yarn.svg" },
  ];

  return (
    <div id={id} className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#09101a]">
      <h1 className="heading">
        <span>Tech&nbsp;</span>
        <span className="text-yellow-400">Stack</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="p-4 bg-[#424c5f] rounded-lg text-center text-white hover:bg-[#d8ce3c] transition-all duration-300 flex flex-col items-center justify-center"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2" />
            <h3 className="text-lg font-semibold">{tech.name}</h3>
          </div>
        ))}
      </div>

    
      <h1 className="heading mt-12">
        <span className="text-yellow-400">Tools&nbsp;</span> 
        <span>I Use</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-4 bg-[#424c5f] rounded-lg text-center text-white hover:bg-[#d8ce3c] transition-all duration-300 flex flex-col items-center justify-center"
          >
            <img src={tool.logo} alt={tool.name} className="w-12 h-12 mb-2" />
            <h3 className="text-lg font-semibold">{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
