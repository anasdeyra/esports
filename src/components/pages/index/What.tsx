"use client";

import { motion } from "framer-motion";

export default function What() {
  return (
    <div
      style={{
        backgroundImage: "url('/what.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
      className="-mx-5 md:-mx-12 px-5 md:px-12 pt-48 pb-56"
    >
      <div className="w-fit">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative border-b-white border-b-2 b-r-half px-5 pb-8 w-fit"
        >
          <h1 className="font-bold text-5xl md:text-6xl tracking-tight">
            <span className="block font-light text-xl">What is </span>
            E-Sports DAO?
          </h1>
          <p className="mt-16 max-w-[735px] text-xl md:text-3xl font-light">
            E-sports DAO is a community that builds and provides the E-sports
            industry. On early stage we will focus on building an E-sports team
            in Indonesia and after that we will expand to the world wide. Our
            product will be a gaming shop that provides in-game items,
            Merchandise, Advertising, etc.
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto md:mx-0 md:ml-auto block mt-14  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn-alt px-10 py-5 text-xl font-bold"
        >
          EXPLORE
        </motion.button>
      </div>
    </div>
  );
}
