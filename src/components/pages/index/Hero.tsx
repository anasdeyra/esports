import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative">
        <h1 className="font-black text-5xl md:text-8xl max-w-[13ch] mx-auto text-center tracking-tight">
          <span className="animate-gradient">E-sports</span> like never before
        </h1>
        <Image
          width={1310}
          height={1000}
          alt="bg"
          className="absolute  -z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/bg1.webp"
        />
      </div>
      <button className="active:translate-y-0 bg-primary mt-8 md:mt-12 mx-auto block mt font-bold text-white hover:text-black md:px-12 px-10 py-3 md:py-4 rounded-full hover:bg-white transition-colors hover:-translate-y-1 transition-transform">
        Order Now
      </button>
    </>
  );
}
