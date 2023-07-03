import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative">
        <h1 className="font-black text-5xl md:text-8xl max-w-[13ch] mx-auto text-center tracking-tight">
          <span className="animate-gradient">E-sports</span> like never before
        </h1>
      </div>
      <button className="active:translate-y-0 bg-primary mt-8 md:mt-12 mx-auto block mt font-bold text-white hover:text-black md:px-12 px-10 py-3 md:py-4 rounded-full hover:bg-white transition-all hover:-translate-y-1">
        Order Now
      </button>
    </>
  );
}
