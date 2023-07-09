"use client";

import { motion } from "framer-motion";

export default function Objective() {
  return (
    <div
      style={{
        backgroundImage: "url('/objective.webp')",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
      className="px-5 md:px-12 -mx-5 md:-mx-12 py-64 md:bg-cover"
    >
      <div className="grid lg:grid-cols-2">
        <div></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-bold text-5xl md:text-6xl tracking-tight">
            <span className="block font-light text-xl">
              About E-Sports DAO{" "}
            </span>
            Our <br />
            Objective
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-sm pl-4 border-l-2 border-white border-dashed ml-16 text-xl font-light"
          >
            E-sports DAO is a community that builds and provides the E-sports
            industry. On early stage we will focus on building an E-sports team
            in Indonesia and after that we will expand to the world wide. Our
            product will be a gaming shop that provides in-game items,
            Merchandise, Advertising, etc.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
