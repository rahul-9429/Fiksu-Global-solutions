import React from 'react';
import Image from 'next/image';
import tandd from '../../../../public/tandv.png';

const Page = () => {
  return (
    <>
      <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>
      <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>

      <div className="relative min-h-[calc(dvh-20rem)] flex flex-col justify-center md:flex-row text-white">
        <div className="w-full md:w-1/2 px-10 sm:px-20 flex flex-col justify-center ">
  <h1 className="text-3xl text-center sm:text-left pt-10 sm:text-5xl font-bold mb-6 text-gradient">
 Testing & Validation
  </h1>
  <Image
    src={tandd}
    alt="Automotive Infotainment"
    className="transition-transform duration-700 ease-in-out rounded-xl block sm:!hidden"
  />
  <p className="text-lg text-gray-300 leading-relaxed">
  At Fiksu Global Solutions, we ensure the reliability, safety, and performance of automotive systems through rigorous testing and validation processes. Our expertise covers functional, automated, and hardware-in-the-loop (HIL) testing for in-vehicle infotainment, embedded software, and ADAS solutions. By adhering to industry standards and best practices, we identify and resolve potential issues early in the development cycle, reducing risks and accelerating time to market. With advanced testing methodologies and state-of-the-art tools, we help automotive companies deliver high-quality, error-free solutions that enhance vehicle performance and user experience.
  </p>

  <p className="text-lg text-gray-300 leading-relaxed mt-4">
  By leveraging advanced test automation and real-world simulations, we help automotive companies reduce development risks, enhance product quality, and accelerate time to market. At Fiksu Global Solutions, we are committed to delivering flawless, high-performance solutions that drive the future of mobility.
  </p>    
</div>

<div className="relative w-full md:w-1/2 h-[calc(100vh-10rem)] sm:block hidden">

  <Image
    src={tandd}
    layout="fill"
    objectFit="cover"
    alt="Automotive Infotainment"
    className="transition-transform duration-700 ease-in-out rounded-tl-full rounded-bl-full sm:block hidden"
  />
  
  {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1e3a8a]/40 to-black"></div> */}
  
  {/* <div className="absolute inset-0 bg-[#7985FA] mix-blend-multiply"></div> */}
</div>

      </div>
    </>
  );
};

export default Page;
