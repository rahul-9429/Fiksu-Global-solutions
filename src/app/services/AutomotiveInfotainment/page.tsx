import React from 'react';
import Image from 'next/image';
import auto from '../../../../public/auto.jpg';

const Page = () => {
  return (
    <>
      <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>
      <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>

      <div className="relative w-full h-[50vh]">
        <Image
          src={auto}
          layout="fill"
          objectFit="cover"
          alt="Automotive Infotainment"
          className="rounded-xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center">
            Automotive Infotainment
          </h1>
        </div>
      </div>

      <div className="relative min-h-[calc(100vh-20rem)] flex flex-col justify-center text-white px-10 sm:px-20">
        <p className="text-xl text-gray-300 leading-relaxed mt-6">
          We specialize in developing cutting-edge infotainment systems that enhance the driving experience. Our solutions integrate seamlessly with both traditional and electric vehicles, providing intuitive interfaces and advanced connectivity features. As vehicles transition into software-driven systems, electronic architectures are evolving to support an increasing number of ECUs and advanced functionalities.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-4">
          The automotive industry is undergoing a transformation driven by innovations in connectivity, electrification, and shared mobility. To stay ahead, OEMs and Tier 1 suppliers are reshaping their product strategies and business models. With deep technological expertise and strong software engineering capabilities, we help automakers and suppliers accelerate their journey toward the future of mobility, offering advanced software solutions for connected, autonomous, and electric vehicle technologies.
        </p>
      </div>
    </>
  );
};

export default Page;
