import React from "react";
import Hero from "@/components/organisms/Hero";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import AboutPreview from "@/components/molecules/AboutPreview";
import FinalCTA from "@/components/molecules/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero id="home" />
      <FeaturedProjects />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
