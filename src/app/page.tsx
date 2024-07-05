"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Page() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <main className="flex flex-col items-center min-h-screen mx-auto max-w-4xl px-4 py-20">
      <section className="flex w-full items-center" data-aos="fade-up">
        <Image
          src="/pfp.jpg"
          alt="Fynn's Profile Picture"
          width={250}
          height={250}
          layout="intrinsic"
          className="mr-6 object-cover object-center select-none w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden"
          loading="eager"
          priority
        />
        <div>
          <h1 className="text-5xl font-semibold tracking-tight max-w-max">
            Hej, I'm Fynn
          </h1>
          <p className="mt-4 text-lg text-slate-400/50 max-w-max">
            Web Developer & <br /> Tech Enthusiast
          </p>
        </div>
      </section>
    </main>
  );
}
