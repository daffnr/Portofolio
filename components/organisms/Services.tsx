import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = ({ id }: any) => {
  return (
    <div id={id} className="pt-[12vh] md:pt-[120px] pb-[4rem] bg-[#111]">
      <p className="heading">
        MY <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[85%] mx-auto items-stretch gap-8 mt-[4rem] text-white">
        {/* Frontend */}
        <div className="bg-emerald-700/80 rounded-[3rem] hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center p-8 border border-white/10">
          <CodeBracketSquareIcon className="w-16 h-16 text-emerald-200 mb-6" />
          <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Frontend
          </h1>
          <p className="text-sm text-slate-200 leading-relaxed">
            I create responsive, user-friendly interfaces with HTML, CSS, and
            JavaScript. Using frameworks like React and Next.js, I focus on
            delivering clean, engaging designs that work seamlessly across all
            devices.
          </p>
        </div>

        {/* Backend */}
        <div className="bg-orange-700/80 rounded-[3rem] hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center p-8 border border-white/10">
          <RocketLaunchIcon className="w-16 h-16 text-orange-200 mb-6" />
          <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Backend
          </h1>
          <p className="text-sm text-slate-200 leading-relaxed">
            I focus on building reliable and efficient server-side systems
            using Node.js and MySQL. My expertise lies in creating well-structured
            databases and writing optimized queries to ensure fast and secure
            data handling.
          </p>
        </div>

        {/* Mobile */}
        <div className="bg-purple-700/80 rounded-[3rem] hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center p-8 border border-white/10">
          <DevicePhoneMobileIcon className="w-16 h-16 text-purple-200 mb-6" />
          <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Mobile
          </h1>
          <p className="text-sm text-slate-200 leading-relaxed">
            I build cross-platform mobile applications using React Native.
            Focusing on smooth performance, intuitive UI, and seamless
            integration with backend services to provide a native-like experience.
          </p>
        </div>

        {/* Fullstack */}
        <div className="bg-blue-700/80 rounded-[3rem] hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center p-8 border border-white/10">
          <CommandLineIcon className="w-16 h-16 text-blue-200 mb-6" />
          <h1 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Fullstack
          </h1>
          <p className="text-sm text-slate-200 leading-relaxed">
            I work across both front-end and back-end to build complete web
            applications. From responsive UI to robust server logic, I deliver
            scalable and user-centric solutions from end to end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
