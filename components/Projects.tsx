import Image from "next/image";
import React from "react";
import router from "next/router";
import dynamic from "next/dynamic";

const GlareCard = dynamic(
  () => import("./ui/glare-card").then((mod) => mod.GlareCard),
  { ssr: false }
);

const Projects = ({ id }: any) => {
  return (
    <div id={id} className="pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <h1 className="heading mb-10">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("https://web-company-profile-three.vercel.app/home")
            }
          >
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">
                Best Martial Arts
              </p>
            </GlareCard>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("https://employee-list-liard.vercel.app/")
            }
          >
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">Employee List</p>
            </GlareCard>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("https://random-quotes-generator-puce.vercel.app/")
            }
          >
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">
                Quotes Generator
              </p>
            </GlareCard>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("https://my-contact-app-kappa.vercel.app/")
            }
          >
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">Contact App</p>
            </GlareCard>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("https://breaking-bad-characters-rose.vercel.app/")
            }
          >
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">
                Breaking Bad Characters
              </p>
            </GlareCard>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open("https://drum-machine-opal-iota.vercel.app/")
            }
          >
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">Drum Machine</p>
            </GlareCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
