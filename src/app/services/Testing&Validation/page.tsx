import React from 'react';
import Image from 'next/image';
import tandd from '../../../../public/tandv.png';

const Page = () => {
  return (
    <>
      {/* Background Gradient */}
      <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>
      <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>

      {/* Image at the Top with H1 Overlay */}
      <div className="relative w-full h-[50vh]">
        <Image
          src={tandd}
          layout="fill"
          objectFit="cover"
          alt="Testing & Validation"
          className="rounded-xl"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center">
            Testing & Validation
          </h1>
        </div>
      </div>

      {/* Text Content Below */}
      <div className="relative min-h-[calc(100vh-20rem)] flex flex-col justify-center text-white px-10 sm:px-20">
        <p className="text-xl text-gray-300 leading-relaxed mt-6">
          At Fiksu Global Solutions, we ensure the reliability, safety, and performance of automotive systems through rigorous testing and validation processes. Our expertise covers functional, automated, and hardware-in-the-loop (HIL) testing for in-vehicle infotainment, embedded software, and ADAS solutions. By adhering to industry standards and best practices, we identify and resolve potential issues early in the development cycle, reducing risks and accelerating time to market.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-4">
          By leveraging advanced test automation and real-world simulations, we help automotive companies reduce development risks, enhance product quality, and accelerate time to market. At Fiksu Global Solutions, we are committed to delivering flawless, high-performance solutions that drive the future of mobility.
        </p>
      </div>
    </>
  );
};

export default Page;
