"use client";

import { SOCIALS } from "@/components/Socials";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className=" pt-24 mx-auto max-w-[1440px] ">
      <div className="w-fit">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-bold text-5xl md:text-6xl "
        >
          Contact Us
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
          <path
            d="M125 0H0V1.5H29L39 3.5H87.5L96.5 1.5H125V0Z"
            fill="#ffffff"
          />
        </motion.svg>
      </div>
      <div className="grid md:grid-cols-2 gap-x-20 mt-8">
        <div>
          <p className="text-xl ">
            Proin gravida nibh vel velit auctor aliquet. Aenean velit
            sollicitudin, lorem quis bibendum auctor, nisi elit ipsum consequat
            ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet mauris.
          </p>
          <nav className="gap-3 flex mt-16 ">
            {SOCIALS.map(({ Icon, link }, i) => (
              <Link
                className="p-4 border-4 border-white border-opacity-5 rounded-full block"
                key={i}
                href={link}
              >
                <Icon size={20} />
              </Link>
            ))}
          </nav>
        </div>
        <form className="grid content-start mx-auto max-w-lg w-full gap-3">
          <input
            type="text"
            name="name"
            className="px-3 py-6 bg-[#D9D9D9] placeholder:text-[#6D6D6D] font-bold text-xl text-black"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className="px-3 py-6 bg-[#D9D9D9] placeholder:text-[#6D6D6D] font-bold text-xl text-black"
            placeholder="Email address"
          />
          <textarea
            className="resize-none px-3 py-6 bg-[#D9D9D9] placeholder:text-[#6D6D6D] font-bold text-xl text-black"
            name="message"
            rows={2}
          />
          <button className="bg-[#42257A] px-3 py-6">Submit</button>
        </form>
      </div>
    </div>
  );
}
