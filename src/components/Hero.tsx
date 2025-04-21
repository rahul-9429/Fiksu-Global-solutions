import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rotate-0 transform rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>

      <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>

      <div className="relative flex flex-col min-h-[calc(100vh-7rem)] w-full px-10 sm:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-[50px]"
          style={{
            backgroundImage: "url('/steptodown.com930479.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative flex flex-col h-full items-center justify-center w-[100%] min-h-[calc(100vh-7rem)]">
          <h1 className="text-5xl sm:text-7xl pt-20 font-bold -mt-20 sm:w-[50%] w-[100%] text-center drop-shadow-[0_0_60px_#000]">
            Transforming In-Car Experiences with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#70C6FE] to-[#7985FA]">
              {' '}Smart Infotainment
            </span>
          </h1>

          <span className="flex justify-between items-center gap-5">
            <button className="font-bold transition-all duration-100 text-xl px-4 py-1 rounded-3xl bg-[#7985FA] hover:bg-[#7985FA]/50 border border-[#7985FA] mt-6 z-100">
              <Link href="/AboutUs">About Us</Link>
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
