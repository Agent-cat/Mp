import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  useGSAP(() => {
    gsap.from(".navbar", {
      width: "0%",
      duration: 1,
      delay: 0.5,
    });
    gsap.from(".links", {
      opacity: 0,
      duration: 0.2,
      scale: 0,
      stagger: 0.2,
      delay: 2,
    });
  }, []);

  return (
  <center className="flex items-center justify-center">
    <nav className=" z-50 backdrop-filter   backdrop-blur-xl navbar w-[80%] h-16 bg-black outline-none bg-opacity-35 fixed top-5 rounded-lg  ">
      <div className=" flex justify-center  gap-11 p-5 items-center font-bold text-white text-xl">
       
      </div>
    </nav>
  </center>
    
  );
};

export default Navbar;
