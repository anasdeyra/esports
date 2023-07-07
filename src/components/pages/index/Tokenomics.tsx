import Chip from "@/components/Chip";
import Image from "next/image";

export default function Tokenomics() {
  return (
    <div className="mt-32">
      <h2 className="font-bold text-6xl text-center">Tokenomics</h2>
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

      <Image
        alt="tokenomics pie chart"
        src={"/chart.png"}
        width={785}
        height={393}
        className="mx-auto mt-32    "
      />

      <Image
        alt="tokenomics bar chart"
        src={"/bar.png"}
        width={1224}
        height={57}
        className="mx-auto mt-16 w-full "
      />

      <div className="mt-32 grid grid-cols-2  divide-x-2 divide-dotted">
        <ul className="flex flex-col gap-y-5 items-center">
          {LEFT.map((props, i) => (
            <Chip key={i} {...props} />
          ))}
        </ul>
        <ul className="flex flex-col gap-y-5 items-center">
          {RIGHT.map((props, i) => (
            <Chip key={i} {...props} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const LEFT = [
  { text: "Ecosystem", color: "#5F008B" },
  { text: "Staking", color: "#8C52FF" },
  { text: "Liquidity", color: "#2C2BAC" },
  { text: "Team and Advisor", color: "#AFAFB8" },
];

const RIGHT = [
  { text: "Seeds", color: "#FFBD59" },
  { text: "Pre-Sale", color: "#0080B3" },
  { text: "Launchpad", color: "#00C2CB" },
  { text: "Treasury", color: "#7E91E9" },
];
