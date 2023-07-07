export default function What() {
  return (
    <div
      style={{
        backgroundImage: "url('/what.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
      className="-mx-5 md:-mx-12 pt-48 pb-56"
    >
      <div className="w-fit">
        <div className="relative border-b-white border-b-2 b-r-half px-5 pb-8 w-fit">
          <h1 className="font-bold text-6xl tracking-tight">
            <span className="block font-light text-xl">What is </span>
            E-Sports DAO?
          </h1>
          <p className="mt-16 max-w-[735px] text-3xl font-light">
            E-sports DAO is a community that builds and provides the E-sports
            industry. On early stage we will focus on building an E-sports team
            in Indonesia and after that we will expand to the world wide. Our
            product will be a gaming shop that provides in-game items,
            Merchandise, Advertising, etc.
          </p>
        </div>
        <button className="ml-auto block mt-14  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn-alt px-10 py-5 text-xl font-bold">
          EXPLORE
        </button>
      </div>
    </div>
  );
}