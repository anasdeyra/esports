export default function Roadmap() {
  return (
    <div className="py-16">
      <h2 className="font-bold text-5xl md:text-6xl text-center">
        Our Roadmap
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="4"
        viewBox="0 0 125 4"
        fill="none"
        className="mx-auto mt-4"
      >
        <path d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z" fill="#2F2DB4" />
      </svg>

      <div className="mt-40 ">
        <div className="flex flex-col gap-14">
          {QUARTERS.slice(0, 2).map(({ title, items }, i) => (
            <div className="flex justify-between" key={i}>
              <div className="flex flex-col">
                <h3 className="font-bold text-4xl">{title}</h3>
                <ul className="ml-2 pl-8 border-l border-white border-dashed mt-4 list-disc grow">
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
              <div
                className=" w-fit h-fit bg-no-repeat py-16 px-8 max-md:hidden"
                style={{
                  backgroundImage: "url(/a.webp)",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center 0",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span className="font-bold text-5xl md:text-6xl text-center block">
                  {title.substring(0, 2)} <br />
                  {title.substring(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-14 mt-32">
          {QUARTERS.slice(2).map(({ title, items }, i) => (
            <div
              className="grid md:grid-cols-[1fr_minmax(0,360px)] justify-end md:justify-between"
              key={i}
            >
              <div
                className=" w-fit h-fit bg-no-repeat py-16 px-8 max-md:hidden"
                style={{
                  backgroundImage: "url(/a.webp)",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center 0",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span className="font-bold text-5xl md:text-6xl text-center block">
                  {title.substring(0, 2)} <br />
                  {title.substring(2)}
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-4xl text-right">{title}</h3>
                <ul className="border-r pr-4 border-white border-dashed mt-4 list-disc grow">
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const QUARTERS = [
  {
    title: "Q2 2023",
    items: [
      "Idea",
      "Team allignment",
      "Whitepapper",
      "Website development",
      "Community development",
      "Smart Contract",
      "Private sale",
      "Audit & KYC",
      "Tournament start",
    ],
  },
  {
    title: "Q3 2023",
    items: [
      "Airdrop",
      "Marketing",
      "Presale",
      "Public sale",
      "Listing on CMC and Coingecko",
    ],
  },
  {
    title: "Q4 2023",
    //     Merchandise shop Development
    // Partnership with Esports team
    // Item games shop development
    // Esports DAO wallet development
    items: [
      "Merchandise shop Development",
      "Partnership with Esports team",
      "Item games shop development",
      "Esports DAO wallet development",
    ],
  },
  {
    title: "Q1 2024",
    items: [
      "Staking platforms",
      "NFT release",
      "Listing on CEX",
      "Esports team development",
      "Live streaming platforms development",
    ],
  },
];
