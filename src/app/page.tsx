"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Reviews />
      <Footer />
    </main>
  );
}
