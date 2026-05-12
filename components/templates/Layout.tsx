import React, { useState, useEffect } from "react";
import Nav from "@/components/organisms/Nav";
import MobileNav from "@/components/molecules/MobileNav";
import Footer from "@/components/organisms/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Animation AOS setup
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
        <div className="bg-black min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer id="footer" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
