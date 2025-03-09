import React from 'react';
import Image from 'next/image';
import ost from '../../../../public/ost.jpg';

const Page = () => {
  return (
    <>
      <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>
      <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>

      <div className="relative min-h-[calc(dvh-10rem)] flex flex-col justify-center  md:flex-row text-white">
        <div className="w-full md:w-1/2 px-10 sm:px-20 flex flex-col justify-center ">
  <h1 className="text-3xl sm:text-5xl pt-10  text-center sm:text-left font-bold mb-6 text-gradient">
    Talent Outsourcing
  </h1>
<Image
    src={ost}
    alt="Automotive Infotainment"
    className="rounded-xl mb-4 block sm:!hidden"
  />
  <p className="text-lg text-gray-300 leading-relaxed">
  Fiksu Global Solutions is a trusted partner in technical talent outsourcing, helping Tier 1 automotive companies access specialized expertise with speed and precision. In an industry where innovation and efficiency are paramount, we provide highly skilled engineers, developers, and project managers who seamlessly integrate into your teams, driving success in infotainment, embedded systems, software development, and more.
  </p>

   <p className="text-lg text-gray-300 leading-relaxed mt-4">
   With over 30+ successful placements, we have built a reputation for delivering exceptional talent that accelerates product development and enhances operational efficiency. Whether you need short-term project support or long-term workforce augmentation, our flexible outsourcing solutions adapt to your needs.
  </p>  
</div>


<div className="relative w-full md:w-1/2 h-[calc(100vh-10rem)]  sm:block  hidden">
  <Image
    src={ost}
    layout="fill"
    objectFit="cover"
    alt="Automotive Infotainment"
    className="transition-transform duration-700 ease-in-out rounded-tl-full rounded-bl-full sm:block  hidden"
  />
  
  <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1e3a8a]/40 to-black"></div>
  
  <div className="absolute inset-0 bg-[#4654ca]/70 mix-blend-multiply"></div>
</div>

      </div>
    </>
  );
};

export default Page;
