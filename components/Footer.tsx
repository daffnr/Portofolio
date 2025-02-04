import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = ({ id }: any) => {
  return (
    <div id={id} className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-[90%] mx-auto gap-[3rem]">
        {/* GitHub */}
        <div className="flex items-center space-x-6">
          <div className="w-[6.5rem] h-[6.5rem] flex items-center justify-center rounded-full bg-[#55e6a5] aspect-square">
            <FaGithub className="w-[4rem] h-[4rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              GitHub
            </h1>
            <p className="text-[17px] w-[90%] text-white">
              <a
                href=" https://github.com/daffnr"
                className="text-green-400 underline ml-[0.1rem] whitespace-nowrap"
              >
                daffnr
              </a>
            </p>
          </div>
        </div>

        {/* Linkedln */}
        <div className="flex items-center space-x-6">
          <div className="w-[6.5rem] h-[6.5rem] flex items-center justify-center rounded-full bg-[#55e6a5] aspect-square">
            <FaLinkedin className="w-[4rem] h-[4rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              LinkedIn
            </h1>
            <p>
              <a
                href="https://www.linkedin.com/in/daffa-naufal/"
                className="text-green-400 underline ml-[0.1rem] whitespace-nowrap"
              >
                Daffa Naufal Ramadhan
              </a>
            </p>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-center space-x-6">
          <div className="w-[6.5rem] h-[6.5rem] flex items-center justify-center rounded-full bg-[#55e6a5] aspect-square">
            <FaInstagram className="w-[4rem] h-[4rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Instagram
            </h1>
            <p className="text-[17px] w-[90%] text-white">
              <a
                href="https://www.instagram.com/daffnr/"
                className="text-green-400 underline ml-[0.1rem] whitespace-nowrap"
              >
                Daffa Ramadhan
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-6">
          <div className="w-[6.5rem] h-[6.5rem] flex items-center justify-center rounded-full bg-[#55e6a5] aspect-square">
            <EnvelopeIcon className="w-[4rem] h-[4rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Email
            </h1>
            <a
              href="mailto:daffanr20@gmail.com"
              className="text-green-400 underline ml-[0.1rem] whitespace-nowrap"
            >
              daffanr20@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          DNRWeb 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
