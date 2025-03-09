"use client";   
// import Team from '@/components/Team';
import React, { useState } from 'react'

const Page = () => {
    const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100 + "%";
    const y = ((e.clientY - top) / height) * 100 + "%";
    setPosition({ x, y });
  };
  return (
    <div className='px-10 sm:px-20 min-h-screen '> 
     <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rotate-0 transform rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>
     <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
     <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div></div>
        <div className='w-[100%] sm:w-[60%] pt-14'>
            <h1 className="text-4xl py-4 font-bold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#70C6FE] to-[#7985FA]">
            About Fiksu</h1>
            <p className='text-lg text-justify py-2'>
            At Fiksu Global Solutions , we are pioneering the future of in-car infotainment. Our cutting-edge technology transforms vehicles into intelligent, connected hubs—enhancing safety, entertainment, and driving convenience.
            </p>
            <p className='text-lg py-2'>
            With a deep focus on AI, IoT, and next-gen UX/UI, we build infotainment systems that seamlessly integrate with Android Auto, Apple CarPlay, 5G connectivity, and cloud-based services. Whether its intuitive voice control, immersive entertainment, or smart navigation, we empower automakers with state-of-the-art solutions.
            </p>
            
        </div>
        <div className='flex flex-col  sm:flex-row gap-10 py-20 justify-center items-center'>
<div
      className="relative group overflow-hidden border-2  border-[#70C6FE] rounded-xl shadow-md transition duration-300 w-[90%] sm:w-[28%]"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle 100px at ${position.x} ${position.y}, #70c5fe5f  , transparent)`,
        }}
      />
<div className='px-6 py-6'> <h1 className="text-2xl pb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#70C6FE] to-[#7985FA]">
                Our Mission</h1>
                <p className='tracking-wide text-lg text-center'>To deliver seamless, intuitive, and intelligent infotainment solutions that enhance every journey with innovation, safety, and convenience.</p></div>
            </div>
                

            <div
      className="relative group overflow-hidden border-2 border-[#70C6FE]  rounded-xl shadow-md transition duration-300 w-[90%] sm:w-[28%]"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle 100px at ${position.x} ${position.y}, #70c5fe5f  , transparent)`,
        }}
      />
<div className='px-6 py-6'> <h1 className="text-2xl pb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#70C6FE] to-[#7985FA]">
                Our Vision</h1><p className='tracking-wide text-lg text-center' >To create a fully connected automotive future where technology and human interaction blend seamlessly for safer, smarter, and more enjoyable mobility.</p></div>
            </div>
    </div>
    {/* <Team   /> */}
    </div>
  )
}

export default Page