import React from "react";
const WhyUs = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-around items-center w-full  py-10 rounded-3xl">
      <div className="text-center sm:text-left sm:max-w-[50%] max-w-[90%]">
        <h1 className="sm:text-5xl text-4xl  text-white pb-5 sm:pl-20">Why Choose Us</h1>
        <p className="mt-2 text-xl sm:text-2xl tracking-wide text-white/90 sm:pl-20">
          Numbers tell our story. We bring
          <span className='hidden sm:contents'><br/></span> 
           years of experience and expertise in<span className='hidden sm:contents'><br/></span> 
          automotive technology solutions.
        </p>
      </div>

      <div 
  className="relative flex justify-center items-center sm:w-[50%] h-fit"
  style={{ backgroundImage: 'url("/Ellipse33.svg")', backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
>
  <div className="bg-black/70 max-w-[450px] rounded-2xl  py-16 px-10 flex flex-col gap-10 text-white">
    <div className="px-8">
      <h1 className="text-5xl py-2">30+</h1>
      <p className="tracking-wide text-lg">Placements with Tier 1 automotive companies.</p>
    </div>
    <hr className="h-[1px] w-full bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] border-0 rounded-full" />
    <div className="px-8">
      <h1 className="text-5xl py-2">100%</h1>
      <p className="tracking-wide text-lg">Customer Satisfaction</p>
    </div>
    <hr className="h-[1px] w-full bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] border-0 rounded-full" />
    <div className="px-8">
      <h1 className="text-5xl py-2">5+</h1>
      <p className="tracking-wide text-lg">Expert Team Members</p>
    </div>
  </div>
</div>

        </div>  
  );
};

export default WhyUs;
