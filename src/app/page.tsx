"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Footer />

      {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
    </main>
  );
}
