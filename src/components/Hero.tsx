import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
   <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rotate-0 transform rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>

     <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
     <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div></div>
    <div className='flex flex-col  h-fit px-10 sm:px-20 '>
     
      <div className='flex flex-col  h-full sm:w-[50%] w-[100%] min-h-screen bg-cover bg-center'
      // style={{ backgroundImage: "url('/heroImg.pg')" }}
      >
      <h1 className='text-6xl sm:text-7xl pt-20 font-bold  '>Transforming In-Car Experiences with 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#70C6FE] to-[#7985FA]"
    > Smart Infotainment</span></h1>
        <span className="flex justify-between items-center gap-5">
        <button className="font-bold transition-all duration-100 text-xl px-4 py-1 rounded-3xl bg-[#7985FA]/30 hover:bg-[#7985FA]/50 border border-[#7985FA] mt-6 z-100">
         <Link href="/AboutUs">About Us</Link> 
        </button>
      </span>
      </div>
        
    </div>
    </>

  )
}

export default Hero