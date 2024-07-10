import React from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
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
  <center className=" items-center md:flex hidden justify-center">
    <nav className=" z-50 backdrop-filter   backdrop-blur-xl navbar w-[80%] h-16 bg-black outline-none bg-opacity-35 fixed top-5 rounded-lg  ">
      <div className=" flex justify-center  gap-11 p-5 items-center font-bold text-white text-xl">
       <Link className="links hover:cursor-pointer" spy={true} smooth={true} offset={50} duration={500}  to="Chintalapudi">Chintalapudi</Link>
       <Link className="links hover:cursor-pointer"spy={true} smooth={true} offset={50} duration={500} to="Denduluru">Denduluru</Link>
       <Link className="links hover:cursor-pointer" spy={true} smooth={true} offset={50} duration={500} to="Eluru">Eluru</Link>
       <Link className="links hover:cursor-pointer" spy={true} smooth={true} offset={50} duration={500} to="Kaikaluru">Kaikaluru</Link>
       <Link className="links hover:cursor-pointer" spy={true} smooth={true} offset={50} duration={500} to="Nuzivid">Nuzivid</Link>
       <Link className="links hover:cursor-pointer" spy={true} smooth={true} offset={50} duration={500} to="Polavaram">Polavaram</Link>
       <Link className="links hover:cursor-pointer" spy={true} smooth={true} offset={50} duration={500} to="Unguturu">Unguturu</Link>
      </div>
    </nav>
  </center>
    
  );
};

export default Navbar;
