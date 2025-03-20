import React from 'react';
import Image from 'next/image';
import ost from '../../../../public/ost.jpg';

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
          src={ost}
          layout="fill"
          objectFit="cover"
          alt="Talent Outsourcing"
          className="rounded-xl"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center">
            Talent Outsourcing
          </h1>
        </div>
      </div>

      {/* Text Content Below */}
      <div className="relative min-h-[calc(100vh-20rem)] flex flex-col justify-center text-white px-10 sm:px-20">
        <p className="text-xl text-gray-300 leading-relaxed mt-6">
          Fiksu Global Solutions is a trusted partner in technical talent outsourcing, helping Tier 1 automotive companies access specialized expertise with speed and precision. In an industry where innovation and efficiency are paramount, we provide highly skilled engineers, developers, and project managers who seamlessly integrate into your teams, driving success in infotainment, embedded systems, software development, and more.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-4">
          With over 30+ successful placements, we have built a reputation for delivering exceptional talent that accelerates product development and enhances operational efficiency. Whether you need short-term project support or long-term workforce augmentation, our flexible outsourcing solutions adapt to your needs.
        </p>
      </div>
    </>
  );
};

export default Page;
