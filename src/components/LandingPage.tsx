"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <main className="min-h-screen px-4 py-40 max-w-full overflow-hidden">
      <section className="flex w-full items-center justify-center">
        <div data-aos="fade-up">
          <h1 className="text-7xl font-bold tracking-tight max-w-max">
            Hej, I'm Fynn
          </h1>
          <p className="mt-4 text-2xl text-slate-400/50 max-w-max">
            Web Developer & <br /> Tech Enthusiast
          </p>
        </div>

        <Image
          src="/pfp.jpg"
          alt="Fynn's Profile Picture"
          width={250}
          height={250}
          layout="intrinsic"
          className="ml-[30vw] object-cover object-center select-none w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden"
          loading="eager"
          priority
          data-aos="fade-left"
        />
      </section>
    </main>
  );
}
