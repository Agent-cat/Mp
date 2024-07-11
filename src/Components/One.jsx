import React from "react";
import Mp from "../assets/Mp.jpg";
import {MLA} from "../Constants/Constants.jsx"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Three from "./Three.jsx";
import Two from './Two.jsx'
import Four from "./Four.jsx";
import Five from "./Five.jsx";
import Six from "./Six.jsx";
import Seven from "./Seven.jsx";
import EIght from "./EIght.jsx";
import ScrollTriger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTriger);

const One = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(".Mp1", {
      x: -1000,
      duration: 1,
      
      scrollTrigger: {
        trigger: ".page1",
        start: "5% 10%",
        end: "60% top",
        scrub: 2,
        pin: true,
        
      },
    });
   
    timeline.to(".text", {
      x: 1500,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".Mp1",
        start: "0% 10%",
        end: "90% top",
        scrub: 2,
       
        
      },
    });
    timeline.from(".mla", {
      opacity:0,
     
      duration:0.5,
      
      scrollTrigger: {
        trigger: ".mla",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,
       
        
      },
    });
    timeline.from(".mla2", {
      opacity:0,
      
      duration: 0.5,
      
      scrollTrigger: {
        trigger: ".mla2",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

       
      },
    });
    timeline.from(".mla3", {
      opacity:0,
      
      duration:0.5,
     
      scrollTrigger: {
        trigger: ".mla3",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

        
      },
    });
    timeline.from(".mla4", {
      opacity:0,
      
      duration:0.5,
     
      scrollTrigger: {
        trigger: ".mla4",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

       
      },
    });
    timeline.from(".mla5", {
      opacity:0,
      
      duration:0.5,
     
      scrollTrigger: {
        trigger: ".mla5",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

        
      },
    });
    timeline.from(".mla6", {
      opacity:0,
      
      duration:0.5,
     
      scrollTrigger: {
        trigger: ".mla6",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

       
      },
    });
    timeline.from(".mla7", {
      opacity:0,
      
      duration:0.5,
     
      scrollTrigger: {
        trigger: ".mla7",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

       
      },
    });
    timeline.from(".mla8", {
      opacity:0,
      
      duration:0.5,
     
      scrollTrigger: {
        trigger: ".mla8",
        start: "-50% 10%",
        end: "80% top",
        scrub: 2,

       
      },
    });
    
    
  }, []);

  return (
    <div className="bg-yellow-400  overflow-hidden overflow-x-hidden ">
    
    
      
      <div className="w-full h-[60vh] page1 md:mt-52 mt-28   bg-yellow-400 flex-row md:flex  ">
        <img
          className="w-[29rem] ml-[-30px] Mp1 h-[25rem] rounded-r-full"
          src={Mp}
          alt="Vishnu"
        />
        
        <h1 className="md:text-8xl text-6xl  font-bold mt-10 text ">
          Putta Mahesh Kumar
          <br />
          <span className="text-2xl  md:text-4xl ml-8 text-red-500">
            Member of the Lok Sabha
          </span>
        </h1>
        
      </div>
      

      
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <Six/>
        <Seven/>
        <EIght/>

    
     
    </div>
  );
};

export default One;
