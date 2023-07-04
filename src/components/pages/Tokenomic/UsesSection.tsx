import UseCard, { Use } from "@/components/pages/Tokenomic/UseCard";
import { TbCoin, TbUsersGroup, TbGift } from "react-icons/tb";

export default function UsesSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-center ">
        What are the token uses?
      </h2>
      <div className="grid md:grid-cols-3 md:mt-32 mt-16 gap-4 max-w-7xl mx-auto">
        {USES.map((props, i) => (
          <UseCard {...props} key={i} />
        ))}
      </div>
    </section>
  );
}

const USES: Use[] = [
  {
    feature: "Payement",
    description: "Merchandise,NFT,Item games shop",
    Icon: TbCoin,
  },
  {
    feature: "Defi",
    description: "Staking & Reward",
    Icon: TbGift,
  },
  {
    feature: "Governance",
    description: "Participate in Developing",
    Icon: TbUsersGroup,
  },
];
