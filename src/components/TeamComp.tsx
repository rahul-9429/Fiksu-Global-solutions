import React from 'react'
// import Image from 'next/image'
const TeamComp = () => {
  return (
    <div className="">
    <div className="relative w-64 h-64 bg-black rounded-xl overflow-hidden p-2 border-4 border-pink-600">
      {/* Image */}
      <img
        src="/tesla.webp" // Replace with actual image path
        alt="Tesla Roadster"
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Title Tag (Top-Left) */}
      <div className="z-20 absolute top-0 left-0 bg-gray-800 text-white px-3 py-1 text-sm rounded-br-xl  border-r-4 border-gray-600">
        <p className="bg-gray-600 px-3 py-1 rounded-md">Tesla Roadster</p>
      </div>

      {/* Bottom-Right Tag (Price) */}
      <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-4 py-1 text-sm rounded-tl-xl border-t-4 border-l-4 border-gray-600">
        <p className="bg-gray-600 px-3 py-1 rounded-md">$200,000</p>
      </div>

    </div>
  </div>
  )
}

export default TeamComp