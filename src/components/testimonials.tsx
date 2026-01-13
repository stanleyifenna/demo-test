"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
      author: "Jason Staczek",
      bgColor: "#765070",
    },
    {
      quote:
        "Setapp has transformed how I work. With all the tools I need in one place, I'm more productive than ever.",
      author: "Sarah John",
      bgColor: "#7B5BA8",
    },
    {
      quote:
        "The value for money is incredible. I save hundreds every month compared to buying apps individually.",
      author: "Mike",
      bgColor: "#8B6BB8",
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className=" ">
      <section className="px-4 bg-[#2b2d32] h-auto md:h-145 ">
        <div className="max-w-6xl mx-auto ">
          <div className=" flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-16 gap-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-white ">
              Your Setapp journey.
            </h2>
            <p className="text-base md:text-lg text-white font-normal">
              Type in your task into Setapp search and get instant app
              recommendations.
            </p>
          </div>
          <div className="border-[0.5px] mb-4 md:mb-25 border-[#E5E5E5] "></div>

          <div className="relative">
            <div className="rounded-2xl pt-8 md:t-16 px-4 h-auto md:h-145  text-white min-h-80 flex flex-col justify-between relative overflow-hidden bg-[#765070]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="grid max-w-xl pl-2 md:pl-10">
                  <h2 className="text-xl md:text-[26px] text-white font-medium mb-2">
                    {testimonials[current].quote}
                  </h2>
                  <p className="text-white pt-1.5 md:pt-5 font-normal text-xs md:text-base ">
                    {testimonials[current].author}
                  </p>

                  <div className="mt-4 md:mt-32.75">
                    <Image
                      src="/watch-icon.svg"
                      alt="Features Top Background"
                      width={74}
                      height={74}
                    />
                  </div>
                </div>

                <div className="relative gap-6 flex items-center justify-center ">
                  <Image
                    src="/man-image.svg"
                    alt="Features Top Background"
                    width={670}
                    height={690}
                  />
                  <div className="absolute top-0 right-2 flex items-center gap-8">
                    <span>
                      <Image
                        src="/prev-left.svg"
                        alt="Features Top Background"
                        width={14}
                        height={24}
                        onClick={prev}
                      />
                    </span>

                    <span>
                      <Image
                        src="/prev-right.svg"
                        alt="Features Top Background"
                        width={14}
                        height={24}
                        onClick={next}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex gap-3 md:gap-6.25 justify-center mt-4 items-center ">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition ${
                    idx === current ? "bg-[#1D1D22]" : "bg-[#D5D4D4]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 bg-white  h-auto md:h-64 flex items-center justify-center ">
        <div className="max-w-6xl mx-auto">
          <div className="flex md:hidden gap-3 md:gap-6.25 justify-center items-center ">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition ${
                  idx === current ? "bg-[#1D1D22]" : "bg-[#D5D4D4]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
