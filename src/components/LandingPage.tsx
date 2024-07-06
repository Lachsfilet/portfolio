"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <main className="min-h-screen px-4 max-w-full flex justify-center items-center">
      <section className="flex w-full items-center justify-center">
        <div data-aos="fade-up">
          <h1 className="text-7xl font-bold tracking-tight max-w-max">
            Hej, I'm Fynn
          </h1>
          <p className="mt-4 text-2xl text-slate-400/50 max-w-max">
            a self taught web developer.
          </p>

          <div className="mt-4 flex">
            <Link href={"https://www.linkedin.com/in/fynn-berger-17b209318/"}>
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="LinkedIn"
              />
            </Link>
            <Link href={"https://github.com/Lachsfilet"} className="ml-2">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
            </Link>
          </div>
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
