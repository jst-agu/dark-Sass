"use client";
import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { ResponsiveNavbar } from "./ResponsiveNavbar";

export const navLinks = [
  {
    id: 1,
    link: "Home"
  },
  {
    id: 2,
    link: "About"
  },
  {
    id: 3,
    link: "Features"
  },
  {
    id: 4,
    link: "Pricing"
  },
  {
    id: 5,
    link: "Customers"
  }
]

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ToggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between"> 
        <div className="relative">
        <div className="absolute w-full top-2 bottom-0 
        bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFD098,#C2F0B1,#2FD8FE)] blur-md">  
        </div>
        <Image 
        src={logoImage} 
        alt="Logo"  
        className="h-12 w-12 relative z-50"
        />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10
        inline-flex justify-center items-center rounded-lg sm:hidden">
        {  
          open ? 
          <CiMenuFries className="text-white text-3xl font-bold z-50 border-2 border-white" onClick={ToggleMenu} /> :
          <MenuIcon className="text-white" onClick={ToggleMenu} />
        }
        </div>
        <nav className="gap-6 items-center hidden sm:flex">
          {navLinks.map((item, i) => (
            <a key={i} href={item.link} 
            className="text-white text-opacity-60 hover:text-opacity-100 transition">
              {item.link}
              </a>
          ))}
          <button className="bg-white px-4 py-2 rounded-lg">Free Demo</button>
        </nav>
        <ResponsiveNavbar open={open} onClose={ToggleMenu} />
      </div>
    </div>
    </div>
  );
};
