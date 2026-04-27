import React, { useEffect, useState } from "react";
import Nav from "@/components/organisms/Nav";
import MobileNav from "@/components/molecules/MobileNav";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Services from "@/components/organisms/Services";
import Skils from "@/components/organisms/Skils";
import Projects from "@/components/organisms/Projects";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeTemplate = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  //Animation AOS setup
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 100,
      delay: 0,
      duration: 600,
      easing: "ease-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} nav={nav} />
        <div className="bg-black h-full">
          <Hero id="home" />
          <div className="relative z-[30]">
            <About id="about" />
            <Services id="services" />
            <Skils id="skills" />
            <Projects id="project" />
            <ContactSection id="contact" />
            <Footer id="footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
