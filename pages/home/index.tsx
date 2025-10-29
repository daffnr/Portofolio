import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skils from "@/components/Skils";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
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
      disableMutationObserver: true,
      debounceDelay: 100,
      throttleDelay: 200,

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
        <Nav openNav={openNav} />
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

export default HomePage;
