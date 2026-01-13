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
    <section className="relative bg-[#2b2d32] pt-32 px-4 overflow-hidden">
      {/* Floating SVG icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-24 left-[6%] animate-float">
          <Image src="/pics.svg.svg" alt="" width={173} height={173} />
        </div>

        <div className="absolute top-40 left-[18%] animate-float-slow">
          <Image src="/pdf.svg.svg" alt="" width={142} height={142} />
        </div>

        <div className="absolute top-64 left-[10%] animate-float">
          <Image src="/teamwork.svg.svg" alt="" width={226} height={113} />
        </div>

        <div className="absolute top-28 right-[8%] animate-float">
          <Image src="/icons/code.svg" alt="" width={64} height={64} />
        </div>

        <div className="absolute top-52 right-[15%] animate-float-slow">
          <Image src="/icons/mac.svg" alt="" width={58} height={58} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/hero-log.svg"
            alt="Hero Logo"
            width={129}
            height={129}
          />
        </div>

        <h1 className="text-5xl text-white md:text-6xl font-bold mb-6">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          <span>$9.99</span>
        </h1>

        <div className="flex justify-center gap-3 md:gap-5 mt-6 mb-6">
          <button className="px-3 md:px-8 h-10 rounded-lg bg-white hover:opacity-80 transition flex items-center justify-center">
            <span className="text-sm md:text-base text-[#26262b] font-normal">
              Try free for 7 days
            </span>
          </button>

          <div className="flex gap-1">
            <button className="w-10 h-10 rounded-md bg-white border hover:opacity-80 transition flex items-center justify-center">
              <Image src="/apple.svg.svg" alt="Apple" width={32} height={32} />
            </button>

            <button className="w-10 h-10 rounded-md bg-white border hover:opacity-80 transition flex items-center justify-center">
              <Image src="/google.svg.svg" alt="Google" width={32} height={32} />
            </button>
          </div>
        </div>

        <p className="text-base md:text-lg font-normal text-white">
          Power up your workflow with Setapp, a
          <br />
          smart way to get apps.
        </p>

        <div className="hidden md:flex border-[0.5px] mb-4 mt-16 md:mb-10 border-[#E5E5E5]" />
      </div>
    </section>
  );
}
