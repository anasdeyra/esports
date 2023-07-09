"use client";

import Chip from "@/components/Chip";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Tokenomics() {
  return (
    <div className="mt-32 mx-auto max-w-[1440px]">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-bold text-5xl md:text-6xl pt-16 text-center"
      >
        Tokenomics
      </motion.h2>
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 1 }}
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="4"
        viewBox="0 0 125 4"
        fill="none"
        className="mx-auto mt-4"
      >
        <path d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z" fill="#2F2DB4" />
      </motion.svg>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Image
          alt="tokenomics pie chart"
          src={"/chart.webp"}
          width={785}
          height={393}
          className="mx-auto mt-32    "
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Image
          alt="tokenomics bar chart"
          src={"/bar.webp"}
          width={1224}
          height={57}
          className="mx-auto mt-16 w-full max-sm:hidden max-w-[1224px]"
        />
      </motion.div>

      <div className="mt-32 grid lg:grid-cols-2 max-lg:divide-y-2  lg:divide-x-2 divide-dashed">
        <motion.ul
          layout
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col gap-y-5 items-center max-lg:mb-16"
        >
          {LEFT.map((props, i) => (
            <motion.div key={i} variants={item}>
              <Chip {...props} />
            </motion.div>
          ))}
        </motion.ul>
        <motion.ul
          layout
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col gap-y-5 items-center max-lg:pt-16"
        >
          {RIGHT.map((props, i) => (
            <motion.div key={i} variants={item}>
              <Chip {...props} />
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
