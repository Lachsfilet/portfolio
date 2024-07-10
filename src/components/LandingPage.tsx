"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";
import { LandingTW } from "./ui/typewriter";

export default function LandingPage() {
  const [socialVisible, setSocialVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      setSocialVisible(true);
    }, 4000);
  }, []);

  const words = [
    {
      text: "a",
    },
    {
      text: "self",
    },
    {
      text: "taught",
    },
    {
      text: "web",
      className: "font-bold",
    },
    {
      text: "developer",
      className: "font-bold",
    },
    {
      text: ".",
    },
  ];

  return (
    <main className="min-h-screen max-w-full relative overflow-x-hidden">
      <div className="min-h-screen max-w-full px-4 flex justify-center items-center">
        <section className="flex flex-col-reverse sm:flex-row w-full items-center justify-center">
          <div data-aos="fade-up">
            <h1 className="text-7xl font-bold tracking-tight max-w-max">
              Hej, I'm Fynn
            </h1>
            <LandingTW words={words} className="text-2xl text-slate-400/50" />

            <div
              className={`mt-4 flex ${
                socialVisible ? "opacity-100" : "opacity-0"
              } transition-opacity ease-in-out delay-150 duration-300`}
            >
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
            src="/pfp.png"
            alt="Fynn's Profile Picture"
            width={1000}
            height={1000}
            layout="intrinsic"
            className="md:ml-[30vw] mb-10 md:mb-0 object-cover object-center select-none w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden"
            loading="eager"
            priority
            data-aos="fade-left"
          />
        </section>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="animate-bounce text-3xl">&darr;</div>
      </div>
    </main>
  );
}
