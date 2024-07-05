import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-4xl max-w-max font-semibold tracking-tight">
          Hey, I&apos;m Fynn
        </h1>
        <p className="mt-4 text-lg max-w-max text-white/50">
          a web developer <br /> while developing some of my own.
        </p>
      </div>

      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden hidden md:block mr-6">
        <Image
          src="/pfp.png"
          alt="Hugo"
          width={250}
          height={250}
          layout="intrinsic"
          className="object-cover object-center select-none w-full h-full"
          loading="eager"
          priority
        />
      </div>
    </div>
  );
}
