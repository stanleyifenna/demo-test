"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#26262B] z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <Image
                src="/footer-logo.svg"
                alt="Setapp Logo"
                width={20}
                height={32}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-white font-medium hover:text-foreground  transition"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="text-sm text-white font-medium  hover:text-foreground transition"
            >
              All apps
            </Link>
            <Link
              href="#"
              className="text-sm text-white hover:text-foreground transition"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-white hover:text-foreground transition"
            >
              For Teams
            </Link>
            <Link
              href="#"
              className="text-sm text-white hover:text-foreground transition"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm text-white hover:text-foreground transition"
            >
              Podcast
            </Link>
            <Image src="/pseudo.svg" alt="Separator" width={1} height={20} />
            <Image src="/flag.svg" alt="Separator" width={18} height={13} />

            <Link
              href="#"
              className="text-sm text-white hover:text-foreground transition hidden sm:inline"
            >
              Sign In
            </Link>
            <button className="bg-none border border-white text-white px-6 py-2 rounded-[6px] text-sm font-medium hover:opacity-90 transition">
              Try free
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              For Teams
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              Log in
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
