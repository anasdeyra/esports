import Quarter from "@/components/pages/roadmap/Quarter";

export default function Roadmap() {
  return (
    <>
      <h1 className="text-center text-5xl md:text-6xl font-bold">Roadmap</h1>
      <div className="grid gap-32 mt-32 lg:mt-48 max-w-4xl mx-auto">
        {ROADMAP.map(({ items, ...props }, i) => (
          <div key={i} className="flex justify-between items-start gap-16">
            {i % 2 === 0 ? (
              <>
                <ul className="mt-24 lg:mt-48 w-fit">
                  {items.map((item, j) => (
                    <li className="font-bold lg:text-2xl" key={j}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Quarter {...props} />
              </>
            ) : (
              <>
                <Quarter {...props} />
                <ul className="mt-24 lg:mt-48 w-fit">
                  {items.map((item, j) => (
                    <li className="font-bold lg:text-2xl" key={j}>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

const ROADMAP = [
  {
    quarter: "Q2",
    year: "2023",
    items: [
      "Idea",
      "Team allignment",
      "Whitepapper",
      "Website development",
      "Community development",
      "Smart Contract",
      "Private sale ",
      "Audit & KYC",
      "Tournament start",
    ],
  },
  {
    quarter: "Q3",
    year: "2023",
    items: [
      "Airdrop",
      "Marketing",
      "Presale ",
      "Public sale ",
      "Listing on CMC and Coingecko",
    ],
  },
  {
    quarter: "Q4",
    year: "2023",
    items: [
      "Merchandise shop Development",
      "Partnership with Esports team",
      "Item games shop development",
      "Esports DAO wallet development",
    ],
  },
  {
    quarter: "Q1",
    year: "2024",
    items: [
      "Staking platforms",
      "NFT release",
      "Listing on CEX",
      "Esports team development",
      "Live streaming platforms development",
    ],
  },
];
