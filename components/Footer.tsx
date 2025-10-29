import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect, useCallback } from "react";

const Footer = React.memo(({ id }: any) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id={id} className="relative bg-[#02050a]">
      <div 
        className="pt-16 pb-8 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                Daffa Naufal Ramadhan
              </h2>
              <p className="text-gray-400 text-sm">
                Full Stack Developer
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a 
                href="#project" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </div>

            <div className="flex justify-center lg:justify-end space-x-6">
              <a
                href="https://github.com/daffnr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/daffa-naufal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/daffnr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaInstagram className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="mailto:daffanr20@gmail.com"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <EnvelopeIcon className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div className="lg:hidden space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Daffa Naufal Ramadhan
              </h2>
              <p className="text-gray-400 text-sm">
                Full Stack Developer
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a 
                href="#project" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-[#f3f04a] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/daffnr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/daffa-naufal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/daffnr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaInstagram className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="mailto:daffanr20@gmail.com"
                className="w-12 h-12 bg-gray-800 hover:bg-[#f3f04a] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <EnvelopeIcon className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300" />
              </a>
            </div>
        </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Daffa Naufal Ramadhan. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#f3f04a] hover:bg-yellow-400 text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
});

Footer.displayName = 'Footer';

export default Footer;
