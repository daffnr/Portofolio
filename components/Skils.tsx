import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = ({id}: any) => {
  const dataDescriptor = [
    {
      title: "Next Js Developer",
      description: "I have learned Next.js, a React framework that facilitates the development of modern web applications, offering capabilities like server-side rendering, static site generation, and efficient API routes",
      year: "2024"
    },
    {
      title: "Node JS",
      description: "I have learned Node.js, a JavaScript runtime that allows me to build scalable and efficient server-side applications, leveraging an event-driven, non-blocking I/O model.",
      year: "2024"
    },
    {
      title: "React Developer",
      description: "I have learned React.js, a powerful JavaScript library for building dynamic user interfaces, enabling the creation of interactive and responsive web applications with reusable components",
      year: "2024"
    },
  ]

  return (
    <div id={id} className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-center">
        {/* <div>
          <SkilsItem title="React Developer" year="2023-2024" />
          <SkilsItem title="MERN Stack Developer" year="2023-2024" />
          <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkilsItem title="Next Js Developer" year="2023-2024"/>
          <SkilsItem title="Node Js Developer" year="2023-2024"/>
          <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]" />
        </div> */}

        {
          dataDescriptor.map((item, index) => (
             <div key={index}>
              <SkilsItem title={item.title} description={item.description} year={item.year} />
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-2 w-[80%] mx-auto gap-8">
          <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />

          <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]" 
          />
        </div>
    </div>
  );
};

export default Skils;
