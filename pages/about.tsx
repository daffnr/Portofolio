import React from "react";
import AboutComponent from "@/components/organisms/About";
import SkilsComponent from "@/components/organisms/Skils";
import Certifications from "@/components/organisms/Certifications";

export default function About() {
  return (
    <>
      <AboutComponent id="about" />
      <SkilsComponent id="skills" />
      <Certifications id="certifications" />
    </>
  );
}
