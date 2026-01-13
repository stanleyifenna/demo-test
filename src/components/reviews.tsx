"use client";

import { useState } from "react";
import Image from "next/image";

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const DOTS_COUNT = 6;

  return (
    <section className="py-5 px-4 bg-whtite">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:flex flex-col md:flex-row items-center md:justify-between mb-3 md:mb-6 gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#26262b] ">
            Setapp in your words.
          </h2>
          <div className="grid md:flex gap-4 md:gap-24 item-center justify-between md:justify-center ">
            <p className="text-base md:text-lg  text-[#26262b] max-w-2xl font-normal">
              What you say about how Setapp powers you up.
            </p>

            <div className="flex gap-2 md:gap-2.5">
              <a
                href="#"
                className="hover:opacity-90 transition flex items-center justify-center text-white"
              >
                <Image
                  src="/facebook-icon.svg"
                  alt="Features Top Background"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="#"
                className="hover:opacity-90 transition flex items-center justify-center text-white"
              >
                <Image
                  src="/x-icon.svg"
                  alt="Features Top Background"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="#"
                className="hover:opacity-90 transition flex items-center justify-center text-white"
              >
                <Image
                  src="/instagram-icon.svg"
                  alt="Features Top Background"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="#"
                className="hover:opacity-90 transition flex items-center justify-center text-white"
              >
                <Image
                  src="/youtube-icon.svg"
                  alt="Features Top Background"
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end mb-3 md:mb-8 ">
          <div className=" flex items-center gap-8">
            <span>
              <Image
                src="/right.svg"
                alt="Features Top Background"
                width={14}
                height={24}
                //onClick={prev}
              />
            </span>

            <span>
              <Image
                src="/left.svg"
                alt="Features Top Background"
                width={14}
                height={24}
                //onClick={next}
              />
            </span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 mb-8">
            <div className="rounded-xl p-1.75 bg-[#f5f5f5] h-auto">
              <div className="rounded-[15px] py-9.5 px-5.5 h-auto md:h-64 flex flex-col justify-between bg-[#71719A]">
                <p className="text-xl md:text-2xl font-medium text-white ">
                  Have been using Setapp for almost two years, and I have to say
                  its the best and the most cost-effective way of having apps on
                  Mac.
                </p>
              </div>

              <div className="p-5">
                <p className="font-semibold text-sm md:text-lg text-[#26262b] pt-2">
                  Arash Parekhan
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex item-center">
                    <p className="text-xs md:text-sm text-[#9f9f9f] font-semibold ">
                      @ArashPourhabibi
                    </p>
                  </div>

                  <Image
                    src="/x.svg"
                    alt="Features Top Background"
                    width={22}
                    height={18}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl p-1.75 bg-[#f5f5f5] h-auto">
              <div className="rounded-[15px] py-9.5 px-5.5 h-auto md:h-64 flex flex-col justify-between bg-[#D9AE89]">
                <p className="text-xl md:text-2xl font-medium text-white ">
                  My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste,
                  MindNode, Swift Publisher.
                </p>
              </div>

              <div className="p-5">
                <p className="font-semibold text-sm md:text-lg text-[#26262b] pt-2">
                  Mauricio Sanchez
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex item-center">
                    <p className="text-xs md:text-sm text-[#9f9f9f] font-semibold ">
                      @m741s
                    </p>
                  </div>

                  <Image
                    src="/insta.svg"
                    alt="Features Top Background"
                    width={22}
                    height={18}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl p-1.75 bg-[#f5f5f5] h-auto">
              <div className="rounded-[15px] py-9.5 px-5.5 h-auto md:h-64 flex flex-col justify-between bg-[#765070]">
                <p className="text-xl md:text-2xl font-medium text-white ">
                  For those of you that wonder where I discover/get all the
                  awesome apps for my Mac that I use, a lot of them are from
                  Setapp!
                </p>
              </div>

              <div className="p-5">
                <p className="font-semibold text-sm md:text-lg text-[#26262b] pt-2">
                  Meredith Sweet
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex item-center">
                    <p className="text-xs md:text-sm text-[#9f9f9f] font-semibold ">
                      @meredith.sweet.silberstein
                    </p>
                  </div>

                  <Image
                    src="/x.svg"
                    alt="Features Top Background"
                    width={22}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-3 justify-center items-center md:hidden">
            {Array.from({ length: DOTS_COUNT }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 w-2  transition ${
                  idx === current ? "bg-[#1D1D22]" : "bg-[#D5D4D4]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
