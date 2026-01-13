"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-[#2b2d32] pt-32  px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Elements */}
        {/* <div className="absolute -top-20 left-10 w-32 h-32 opacity-40">
          <div className="relative w-full h-full">
            <div
              className="absolute w-24 h-24 rounded-3xl transform -rotate-12 opacity-80"
             
            ></div>
            <div
              className="absolute w-20 h-20 rounded-full top-8 right-0 opacity-80"
            
            ></div>
          </div>
        </div> */}

        {/* <div className="absolute -bottom-10 right-10 w-40 h-40 opacity-40">
          <div className="relative w-full h-full">
            <div
              className="absolute w-28 h-28 rounded-2xl transform rotate-12 opacity-80"
          
            ></div>
            <div
              className="absolute w-24 h-24 rounded-3xl top-10 right-8 opacity-80"
             
            ></div>
            <div
              className="absolute w-20 h-20 rounded-full bottom-0 left-0 opacity-80"
          
            ></div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="flex item-center justify-center mb-4">
          <Image
            src="/hero-log.svg"
            alt="Features Top Background"
            width={129}
            height={129}
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl text-white md:text-6xl font-bold mb-6 leading-tight text-balance">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            <span>$9.99</span>
          </h1>
        

     
          <div className="flex justify-center gap-4 md:gap-6.75 mb-6">

            <button
              className="w-10 h-10 rounded-lg border hover:opacity-80 transition flex items-center justify-center"
              style={{ backgroundColor: "#2d2d44", borderColor: "#404050" }}
            >
              <span className="text-lg">f</span>
            </button>

            <div className="flex justify-center gap-1 mb-6">
               <button
              className="w-10 h-10 rounded-md bg-white border hover:opacity-80 transition flex items-center justify-center"

            >
                <Image
            src="/apple.svg.svg"
            alt="Features Top Background"
            width={32}
            height={32}
          />
            </button>  
             <button
              className="w-10 h-10 rounded-md bg-white border hover:opacity-80 transition flex items-center justify-center"

            >
                <Image
            src="/google.svg.svg"
            alt="Features Top Background"
            width={32}
            height={32}
          />
            </button>
            </div>
          </div>

          <p className="text-base md:text-lg font-normal text-white">
            Power up your workflow with Setapp, a
            <br />
smart way to get apps.
          </p>
        </div>

        <div className="hidden md:flex border-[0.5px] mb-4 mt-16 md:mb-10 border-[#E5E5E5] "></div>
      </div>
    </section>
  );
}
