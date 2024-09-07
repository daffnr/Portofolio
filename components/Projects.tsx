import Image from "next/image";
import React from "react";
import router from 'next/router'
    
const Projects = ({id}:any) => {
  return (
    <div id={id} className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
          <div onClick={() => router.push("https://web-company-profile-three.vercel.app/home")} className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/companyWeb.png"
              alt="portofolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div onClick={() => router.push ("https://employee-list-liard.vercel.app/")} className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/employeeList.png"
              alt="portofolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="/images/project.png"
              alt="portofolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
