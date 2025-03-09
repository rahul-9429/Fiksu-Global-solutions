import React from 'react';
// import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Linkedin , Mail } from 'lucide-react';
import Link from 'next/link';

const FooterD = () => {
  return (
    <div className="text-white py-16 bg-black">
        
      <div className="container mx-auto flex flex-col sm:flex-row gap-5 justify-between px-5">
        
        {/* Fiksu Global Solutions, Socials */}
        <div className="flex flex-col items-center gap-3 sm:w-1/4">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#70C6FE] to-[#7985FA]">
                 Fiksu<br />Global Solutions</h1>
            <span className=' flex gap-6 '>
                {/* <a href="" className=''><Instagram className=' text-white/70 hover:text-white transition-all duration-200 '/>
                </a>                 */}
                <a href=""><Linkedin className='text-white/70 hover:text-white transition-all duration-200 ' />
                </a>
                <a href=""><Mail className='text-white/70 hover:text-white transition-all duration-200 ' />
                </a>
            </span>
          <div className="flex gap-4">
            
          </div>
        </div>

        {/* Useful Links and Services */}
        <div className="flex sm:w-1/2 justify-around gap-5">
        <div>
  <h1 className="text-2xl font-semibold pb-2">Useful Links</h1>
  <ul className="text-gray-400 space-y-2">
    <li>
      <Link href="/" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold">
        Home
      </Link>
    </li>
    <li>
      <Link href="/AboutUs" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold">
        About
      </Link>
    </li>
    <li>
      <Link href="/Careers" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold">
        Careers
      </Link>
    </li>
    <li>
      <Link href="/ContactUs" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold">
        Contact
      </Link>
    </li>
  </ul>
</div>
<div>
  <h1 className="text-2xl font-semibold pb-2">Our Services</h1>
  <ul className="text-gray-400 space-y-2 list-none">
    <li>
      <Link href="/services/TalentOutsourcing" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold cursor-pointer">
        Outsourcing
      </Link>
    </li>            
    <li>
      <Link href="/services/SoftwareDevelopment" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold cursor-pointer">
        Software Development
      </Link>
    </li>
    <li>
      <Link href="/services/Testing&Validation" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold cursor-pointer">
        Testing & Validation
      </Link>
    </li>
    <li>
      <Link href="/services/AutomotiveInfotainment" className="hover:text-[#7985FA] transform transition-all duration-150 font-semibold cursor-pointer">
      Automotive Infotainment
      </Link>
    </li>
  </ul>
</div>
        </div>

        <div className="sm:w-1/4 items-center flex flex-col">
          <div className="mt-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.1901536487826!2d77.708598!3d12.8203997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d00040a661f%3A0x6350e28ead6edae2!2sFiksu%20Global%20Solutions!5e1!3m2!1sen!2sin!4v1740931028538!5m2!1sen!2sin" width="300" height="175" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
            {/* <p className="text-gray-400 text-sm text-center">F B-208, Royalmist apartment
                Bangalore 560099</p> */}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text mt-6">
        <p>Fiksu Global Solutions &reg;. All rights reserved 2025</p>
      </div>
    </div>
  );
};

export default FooterD;
