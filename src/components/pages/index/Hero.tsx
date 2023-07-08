export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
      className="-mx-5 md:-mx-12 px-5 md:px-12 pt-44 pb-52"
    >
      <div className="z-[1]">
        <h1 className="font-black text-6xl md:text-8xl mx-auto text-center tracking-tight">
          E-Sports <br /> DAO
        </h1>
        <h2 className="max-w-[700px] text-center text-2xl font-medium mx-auto mt-8">
          Introducing E-sportsDAO Project is an innovative initiative aimed at
          revolutionizing the esports industry <br />
          through the integration of blockchain
        </h2>
        <div className="flex gap-x-16 max-sm:gap-x-8 mt-32 mx-auto w-fit">
          <button className="max-sm:text-base max-sm:px-7 max-sm:py-3  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn px-10 py-5 text-xl font-bold">
            JOIN NOW
          </button>
          <button className="max-sm:text-sm max-sm:px-6 max-sm:py-3  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn-alt px-10 py-5 text-xl font-bold">
            WHITE PAPER
          </button>
        </div>
      </div>
    </div>
  );
}
