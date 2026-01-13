"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section
      className="py-20 px-4 bg-[#2b2d32] "
      style={{ borderColor: "#404050", borderTopWidth: "1px" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-16 gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-white ">
            What you got on Setapp.
          </h2>
          <p className="text-base md:text-lg text-white font-normal">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        <div className="bg-[#DF96AE] rounded-[20px] mb-2 md:mb-5 pt-4 md:pt-15 overflow-hidden">
          <div className="flex items-center px-4 md:px-15  mb-0 md:mb-0">
            <div className="pr-2 md:pr-6">
              <Image
                src="/clean-icon.svg"
                alt="Features Top Background"
                width={80}
                height={80}
              />
            </div>
            <div className="grid ">
              <h1 className="text-xl md:text-[26px] text-[#26262b] font-semibold">
                Keep your Mac clean
              </h1>
              <p className="text-base md:text-lg font-normal text-[#26262b] ">
                Remove junk, scan for malware, wipe email attachments
              </p>
            </div>
          </div>
          <div className="w-full items-center justify-center flex ">
            <Image
              src="/clean-image.svg"
              alt="Features Top Background"
              width={1106}
              height={465}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-[#F4F0E4] h-auto rounded-[20px]  text-white  flex flex-col justify-end relative overflow-hidden">
            <Image
              src="/code.svg"
              alt="Features Top Background"
              width={580}
              height={400}
            />
            <div className="mb-4.75 px-6 md:px-15  ">
              <Image
                src="/write-code.svg"
                alt="Features Top Background"
                width={80}
                height={80}
              />
            </div>
            <span className="px-6 md:px-15 mb-6 md:mb-8 ">
              <h2 className="text-xl md:text-[26px] text-[#26262b] font-semibold mb-2">
                Write code
              </h2>
              <p className="text-base md:text-lg text-[#26262b] font-normal ">
                Create applications in more than 25 languages
              </p>
            </span>
          </div>

          <div className="bg-[#384C75]  h-auto rounded-[20px]  text-white  flex flex-col justify-end relative overflow-hidden">
            <div className="mb-4.75 pt-4 md:pt-0 px-6 md:px-15  ">
              <Image
                src="/icon-meeter.svg"
                alt="Features Top Background"
                width={68}
                height={68}
              />
            </div>
            <span className="px-6 md:px-15 mb-4 md:mb-8 ">
              <h2 className="text-xl md:text-[26px] text-white font-semibold mb-2">
                Join meetings in a click
              </h2>
              <p className="text-base md:text-lg text-white font-normal ">
                Quickly access links to your meetings from menu bar
              </p>
            </span>

            <Image
              src="/meeter-image.svg"
              alt="Features Top Background"
              width={580}
              height={360}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-22 ">
          <button className="flex items-center justify-center gap-2 text-base md:text-xl text-white transition font-medium">
            <span className="flex items-center gap-2">
              <Image
                src="/white-arrow.svg"
                alt="Arrow Right"
                width={20}
                height={20}
              />{" "}
              View all superpowers
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
