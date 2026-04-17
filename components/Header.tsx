'use client';

import { useState } from "react";
import { navigation } from "./data";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-20 md:h-24 bg-linear-to-r from-[#fdf7ea] to-[#eed5a6] overflow-hidden flex items-center font-sans shadow-sm border-t-8 border-t-[#7a5281]">
      
      {/* 1. The Background Curve (Purple section on the left) */}
      <svg 
        className="absolute top-0 left-0 h-full w-[45%] md:w-[35%] lg:w-[25%] z-0" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <path 
          d="M0,0 L100,0 C75,0 50,100 20,100 L0,100 Z" 
          fill="#7a5281" 
        />
      </svg>

      {/* 2. The Content Wrapper */}
      <div className="relative z-10 flex items-center justify-between w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo Area - Sticky on the Left */}
        <div className="flex flex-col text-white font-bold text-xl md:text-3xl leading-none w-32 md:w-48">
          <span className="tracking-wide">Tasty</span>
          <span className="flex items-center gap-1 tracking-wide">
            Kisso
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#d6ae61] fill-current" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C22 3 21 8 17 8Z" />
            </svg>
          </span>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[#2d1a11] font-medium text-sm xl:text-base">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#b58c42] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-linear-to-r from-[#d6ae61] to-[#b58c42] text-black px-5 py-2 rounded-full font-semibold text-sm shadow-sm hover:scale-105 transition-transform ml-4">
            Shop Now
          </button>
        </nav>

        {/* Right Side - Drawer Toggle (Mobile Only) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 text-[#2d1a11]"
            aria-label="Open Menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Stack Menu) */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />
        
        {/* Drawer Content - Slides from right */}
        <nav className="absolute right-0 w-[280px] h-full bg-[#fdf7ea] p-6 shadow-xl flex flex-col">
          <div className="flex items-center justify-between border-b border-[#7a5281]/20 pb-4 mb-6">
            {/*<span className="text-[#7a5281] font-bold text-xl uppercase tracking-tighter">Navigation</span>}*/}
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-[#2d1a11]" />
            </button>
          </div>
          
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#2d1a11] hover:bg-[#7a5281]/5 px-4 py-3 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Shop Now Button inside Drawer */}
          <div className="mt-8 px-4">
            <button className="w-full bg-linear-to-r from-[#d6ae61] to-[#b58c42] text-black py-3 rounded-full font-bold shadow-md">
              Shop Now
            </button>
          </div>

          {/* Empty bottom space as requested */}
        </nav>
      </div>
    </header>
  );
}