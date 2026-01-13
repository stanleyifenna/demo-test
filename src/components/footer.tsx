"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2b2d32] border-t border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-[60x] pt-16 pb-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-[78px]">
              <div className="flex items-center justify-center">
                <Image
                  src="/footer-logo.svg"
                  alt="Setapp Logo"
                  width={20}
                  height={32}
                />
              </div>
              <span className="font-bold text-white text-xl">SETAPP</span>
            </div>

            <div className="flex">
              <p className="font-normal text-white text-sm">
                Updates from our team, written with love{" "}
              </p>
              <span className="flex">
                <Image
                  src="/love.svg"
                  alt="Setapp Logo"
                  width={13}
                  height={10}
                />{" "}
              </span>
            </div>
            <div>
              <form className="mt-6 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#404547]  text-[#9d9ca2] px-4 h-[50px] py-2 rounded-l-[6px] border border-[#404547] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-white h-[50px] px-6 py-2 rounded-r-[6px] hover:opacity-90 transition"
                >
                  <Image
                    src="/footer-arrow-left.svg"
                    alt="Submit"
                    width={6}
                    height={12}
                  />
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-1 text-white font-normal text-base">
            <h3 className=" mb-1">Home</h3>
            <ul className="space-y-1 ">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  All Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Setapp for Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 text-white font-normal text-base">
            <h3 className="mb-1">About</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Education Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Family Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  For Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Redeem Card or Code
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Setapp Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Mac Developer Survey 2023
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 text-white font-normal text-base">
            <h3 className="mb-1">Getting started with Setapp</h3>
            <ul className="space-y-1 ">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Remote access to other Mac
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Fix macOS Ventura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                 Problems
                </a>
              </li>
               <li>
                <a href="#" className="hover:text-foreground transition">
                 Best productivity apps
                </a>
              </li>
               <li>
                <a href="#" className="hover:text-foreground transition">
                 Best YouTube downloaders 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Uninstall apps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex  items-center justify-between my-2 md:my-8">
            <div className="flex text-[11px] font-bold text-white justify-center md:justify-start  gap-0">
                <button className="bg-[#969799] p-1 h-[26px] text-center ">DMCA</button>
                <button className="bg-[#404547] p-1 h-[26px] text-center ">PROTECTED</button>
            </div>
            <div className="flex gap-[10px]">
                <Image
                  src="/flag.svg"
                  alt="Separator"
                  width={18}
                  height={13}
                  
                />
                <p className="text-base text-white font-normal ">English</p>
                <Image
                  src="/footer-arrow-down.svg"
                  alt="Separator"
                  width={10}
                  height={10}
                />  
            </div>
        </div>

        <div className="border-t border-[#E5E5E5] pt-8 flex mb-3 md:mb-6 flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white font-normal text-xs">
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID:IE3425001BH
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="text-foreground/50 hover:text-foreground transition"
            >
               <Image
                  src="/foot-facebook.svg"
                  alt="facebook"
                  width={26}
                  height={26}
                />
            </a>
            <a
              href="#"
              className="text-foreground/50 hover:text-foreground transition"
            >
              <Image
                  src="/foot-x.svg"
                  alt="x"
                  width={26}
                  height={26}
                />
            </a>
            <a
              href="#"
              className="text-foreground/50 hover:text-foreground transition"
            >
              <Image
                  src="/foot-instagram.svg"
                  alt="instagram"
                  width={26}
                  height={26}
                />
            </a>
             <a
              href="#"
              className="text-foreground/50 hover:text-foreground transition"
            >
              <Image
                  src="/foot-youtube.svg"
                  alt="Youtube"
                  width={26}
                  height={26}
                />
            </a>
          </div>
        </div>
        <div className="gap-3 text-[#969799] text-xs flex mb-2 md:mb-8">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
