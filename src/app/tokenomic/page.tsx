import UseCard, { Use } from "@/components/pages/Tokenomic/UseCard";
import { TbCoin, TbUsersGroup, TbGift } from "react-icons/tb";

export default function Tokenomic() {
  return (
    <>
      <h1 className="text-center text-5xl md:text-6xl font-bold">Tokenomic</h1>
      <div className="font-medium text-xl md:text-2xl mx-auto max-w-4xl text-center mt-8">
        The SITY token is a key element of the Versity metaverse and is used for
        every exchange. It runs on the Polygon blockchain and has several uses.
      </div>
      <div className="mt-32 md:mt-64">
        <h2 className="text-3xl md:text-4xl font-bold text-center ">
          What are the token uses?
        </h2>
        <div className="grid md:grid-cols-3 md:mt-16 mt-8 gap-4 max-w-7xl mx-auto">
          {USES.map((props, i) => (
            <UseCard {...props} key={i} />
          ))}
        </div>
      </div>
    </>
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
