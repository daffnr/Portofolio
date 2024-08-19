import React, { useEffect, useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Skils from "@/Components/Skils";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  //Animation AOS setup
useEffect(() =>{
  
  AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99,
    
  
    
    offset: 120, 
    delay: 0, 
    duration: 1000, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  
  });
},[])

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <div className="bg-black h-[1000px]">
          <Hero id="home" />
          <div className="relative z-[30]">
            <About id="about"/>
            <Services id="services" />
            <Skils id="skill"/>
            <Projects id="project"/>
            <Footer id="contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
