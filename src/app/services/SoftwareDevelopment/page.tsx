import React from 'react';
import Image from 'next/image';
import sd from '../../../../public/sd.jpg';

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
          src={sd}
          layout="fill"
          objectFit="cover"
          alt="Software Development"
          className="rounded-xl"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center">
            Software Development
          </h1>
        </div>
      </div>

      {/* Text Content Below */}
      <div className="relative min-h-[calc(100vh-20rem)] flex flex-col justify-center text-white px-10 sm:px-20">
        <p className="text-xl text-gray-300 leading-relaxed mt-6">
          At Fiksu Global Solutions, we specialize in cutting-edge software development services tailored to meet the evolving needs of the automotive industry. From infotainment systems to embedded software, our team of expert developers, engineers, and architects delivers scalable, high-performance solutions that drive innovation.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-4">
          Our software development expertise spans across various domains, including in-vehicle infotainment (IVI), human-machine interfaces (HMI), advanced driver-assistance systems (ADAS), and cloud-based automotive applications. We utilize the latest technologies, frameworks, and agile methodologies to build robust, secure, and future-ready solutions that enhance vehicle functionality and user experience.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-4">
          With a strong focus on quality and efficiency, we offer end-to-end development services—from software architecture design, integration, testing, and deployment. Our commitment to excellence ensures seamless integration with existing automotive ecosystems while meeting industry standards and regulatory requirements.
        </p>
      </div>
    </>
  );
};

export default Page;
