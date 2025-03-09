import React from 'react';
import ServicesCard from './ServicesCard';
import { Services } from '@/lib/Services';

const ServicesHome = () => {
  return (
    <div className="px-10 sm:px-20 ">
      <h1 className="sm:text-5xl text-4xl  text-center text-white pb-1 sm:pl-20">Our Services</h1>
      <p className="text-lg tracking-wide text-center pb-5  text-white/60 sm:pl-20">
        We provide cutting-edge automotive technology solutions, from next-generation infotainment systems and custom software development to comprehensive testing & validation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 ">
        {Services.map((service, i) => (
          <div
            key={i}
            className={`
              ${i % 2 === 0 ? 'sm:border-r-2 sm:border-[#788DFA]/40' : ''} 
              ${i < Services.length - 2 ? 'border-b-2 border-[#788DFA]/40' : ''}  
            `}
          >
            <ServicesCard data={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
