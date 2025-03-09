import React from 'react';
import Image from 'next/image';
import sd from '../../../../public/sd.jpg';

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
  Software Development
  </h1>
  <Image
    src={sd}
    alt="Automotive Infotainment"
    className="transition-transform duration-700 ease-in-out rounded-xl block sm:!hidden"
  />
  <p className="text-lg text-gray-300 leading-relaxed">
  At Fiksu Global Solutions, we specialize in cutting-edge software development services tailored to meet the evolving needs of the automotive industry. From infotainment systems to embedded software, our team of expert developers, engineers, and architects delivers scalable, high-performance solutions that drive innovation.
  </p>

  <p className="text-lg text-gray-300 leading-relaxed mt-4">
  Our software development expertise spans across various domains, including in-vehicle infotainment (IVI), human-machine interfaces (HMI), advanced driver-assistance systems (ADAS), and cloud-based automotive applications. We utilize the latest technologies, frameworks, and agile methodologies to build robust, secure, and future-ready solutions that enhance vehicle functionality and user experience.
With a strong focus on quality and efficiency, we offer end-to-end development services—from software architecture design, integration, testing, and deployment. Our commitment to excellence ensures seamless integration with existing automotive ecosystems while meeting industry standards and regulatory requirements.
  </p>    
</div>

<div className="relative w-full md:w-1/2 h-[calc(100vh-10rem)] sm:block hidden">

  <Image
    src={sd}
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
