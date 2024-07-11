import React from 'react'
import img2 from "../assets/Denduluru.jpg"
import Bar3 from './Bar3'
const Three = () => {
  return (
    <div>
      <div id='Denduluru' className="w-full h-screen bg-yellow-400    ">
        <div class="flex flex-col mla3 scale-125 justify-center h-screen">
          <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div class="w-full md:w-1/3 h-[16rem] overflow-hidden bg-white grid place-items-center">
              <img
                src={img2}
                alt="tailwind logo"
                class="rounded-xl"
              />
            </div>
            <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
              <div class="flex justify-between item-center">
                <p class="text-gray-500 font-medium ">MLA  <span className='text-red-500'>(Denduluru)</span></p>
              </div>
              <h3 class="font-black text-gray-800 md:text-3xl text-xl">
              Chintamaneni Prabhakar
              </h3>
              <Bar3/>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default Three
