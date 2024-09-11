import { XMarkIcon } from "@heroicons/react/20/solid";
import router from "next/router";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const handleRedirect = (path: string) => {
    router.push(path)
    closeNav()
  }

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile" onClick={() => handleRedirect('#home')}>HOME</div>
        <div className="nav-link-mobile" onClick={() => handleRedirect("#about")}>ABOUT</div>
        <div className="nav-link-mobile" onClick={() => handleRedirect('#services')}>SERVICES</div>
        <div className="nav-link-mobile" onClick={() => handleRedirect("#skill")}>SKILL</div>
        <div className="nav-link-mobile" onClick={() => handleRedirect("#project")}>PROJECT</div>
        <div className="nav-link-mobile" onClick={() => handleRedirect("#contact")}>CONTACT</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
