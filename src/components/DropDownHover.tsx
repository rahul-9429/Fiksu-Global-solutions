"use client";
import React, { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

const DropDowHover: React.FC<{ closeMenu?: () => void }> = ({ closeMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="cursor-pointer focus:outline-none flex justify-center items-center hover:text-[#7985FA] transform transition-all duration-150"
        >
          <h1 className="text-lg font-bold hover:text-[#7985FA] transform transition-all duration-150">
            Services
          </h1>
          <ChevronDown className={`ml-2 ${open ? "rotate-180 transition-transform duration-200" : "mt-1 transition-transform duration-200"}`} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="w-fit bg-black shadow-md border border-transparent rounded-md"
        >
          <DropdownMenuItem className="hover:bg-gray-500 text-lg">
            <Link href="/services/AutomotiveInfotainment" className="flex justify-center text-white font-semibold items-center hover:text-[#7985FA] transition-all duration-150" onClick={closeMenu}>
              Automotive Infotainment <ArrowUpRight />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-500 text-lg">
            <Link href="/services/SoftwareDevelopment" className="flex justify-center text-white font-semibold items-center hover:text-[#7985FA] transition-all duration-150" onClick={closeMenu}>
              Software Development <ArrowUpRight />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-500 text-lg">
            <Link href="/services/Testing&Validation" className="flex justify-center text-white font-semibold items-center hover:text-[#7985FA] transition-all duration-150" onClick={closeMenu}>
              Testing & Validation <ArrowUpRight />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-500 text-lg">
            <Link href="/services/TalentOutsourcing" className="flex justify-center text-white font-semibold items-center hover:text-[#7985FA] transition-all duration-150" onClick={closeMenu}>
              Technical Talent Outsourcing <ArrowUpRight />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>  
  );
};

export default DropDowHover;
