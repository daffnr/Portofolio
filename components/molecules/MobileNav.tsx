import { XMarkIcon } from "@heroicons/react/24/outline";
import router from "next/router";
import React, { useEffect, useState } from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleRedirect = (path: string) => {
    router.push(path);
    closeNav();
  };

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
      {/* Overlay Gelap yang bisa diklik untuk menutup */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity duration-500 ${
          nav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Side Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[75vw] sm:w-[60vw] bg-black/20 backdrop-blur-md border-l border-white/10 z-[10000] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl flex flex-col ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Drawer */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5">
          <div className="text-[20px] font-bold text-white tracking-widest">
            DNR<span className="text-[#facc15]">.</span>
          </div>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col flex-grow py-8 px-8 space-y-6 overflow-y-auto">
          {navLinks.map((item, index) => (
            <div
              key={index}
              onClick={() => handleRedirect(item.path)}
              className="group flex items-center justify-between cursor-pointer"
            >
              <span className="text-[24px] font-light text-white/70 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                {item.name}
              </span>
              <span className="text-[#facc15] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </span>
            </div>
          ))}
        </div>

        {/* Footer Drawer */}
        <div className="px-8 py-10">
          <button 
              onClick={() => handleRedirect("#contact")}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#facc15] to-yellow-300 text-black font-bold text-[15px] hover:shadow-[0_0_20px_rgba(85,230,165,0.4)] transition-all active:scale-95"
          >
            SAY HELLO
          </button>
          <p className="text-center text-white/30 text-[12px] mt-6">
            © 2026 DNR Studio
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
