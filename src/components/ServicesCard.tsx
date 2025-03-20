import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServicesCardProps {
  title: string;
  description: string;
  imagePath: string;
  diffUrl: string;
  icon: string;
  detailedDescription: string;
  className?: string;
}

const ServicesCard: React.FC<{ data: ServicesCardProps }> = ({ data }) => {
  return (
    <div className={`bg-black `}>
      <div 
        className="relative flex flex-col justify-center items-center py-20 "
        style={{ 
          backgroundImage: 'url("/Ellipse75.svg")', 
          backgroundSize: "40rem 50rem", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center" 
        }}
      >
        <Image src={data.icon} width={100} height={100} alt={data.title} className={`rounded-md ${data.className}`} />

        <h1 className="text-xl font-bold mt-2">{data.title}</h1>
        <p className="text-gray-400 line-clamp-2 max-w-[80%] text-center">{data.detailedDescription}</p>

        <a href={`${data.diffUrl}`} className="hover:text-[#7cb2ec] transtio duration-75 underline text-white my-2 flex justify-center items-center gap-1" target='_blank' >
          <p className='text-right' >Learn more</p> 
          <ArrowRight className="h-5 mt-1" />
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
