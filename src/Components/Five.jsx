import React from 'react'
import img4 from "../assets/Kaikaluru.jpg"
import Bar5 from './Bar5'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTriger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTriger);
const Five = () => {
  useGSAP(()=>{
    gsap.from('.Kaikaluru',{
      x:-200,
      opacity:0,
      scrollTrigger: {
        trigger: ".Kaikaluru",
        start: "-20% 10%",
        end: "60% top",
        scrub:2,
        markers:true,

      },
    })
  })
  return (
    <div>
      <div id='Kaikaluru' className="w-full h-screen bg-yellow-400    ">
        <div class="flex flex-col mla5 scale-125 justify-center h-screen">
        <h1  className='text-center md:text-4xl mb-10  text-3xl Kaikaluru font-bold text-red-500'>KAIKALURU</h1>
          <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div class="w-full md:w-1/3 h-[16rem] overflow-hidden bg-white grid place-items-center">
              <img
                src={img4}
                alt="tailwind logo"
                class="rounded-xl"
              />
            </div>
            <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
              <div class="flex justify-between item-center">
                <p class="text-gray-500 font-medium ">MLA   <span className='text-red-500'>(Kaikaluru)</span></p>
              </div>
              <h3 class="font-black text-gray-800 md:text-3xl text-xl">
              Kamineni Srinivas
              </h3>
              <Bar5/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Five
