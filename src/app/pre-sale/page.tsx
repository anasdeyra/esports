"use client";

import BottomDecoration from "@/components/BottomDecoration";
import TopBrackets from "@/components/TopBrackets";
import { FormEvent } from "react";
// @ts-ignore
import cookies from "@boiseitguru/cookie-cutter";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PreSale() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let code = e.currentTarget.code.value;
    cookies.set("pwd", code);
    router.refresh();
    router.push("/");
  };
  return (
    <div className="-mx-5 md:-mx-12 px-5 md:px-12 bg-[#DCDCDC] pb-52 pt-24 relative">
      <div className="relative grid md:grid-cols-[90%_10%] px-0 py-7 md:px-16 xl:px-32 max-w-[1289px] mx-auto mt-12">
        <div>
          <h1 className="md:ml-8 font-bold text-3xl text-black  max-md:text-center">
            Join Presale
          </h1>
          <form
            onSubmit={handleSubmit}
            className="relative z-[1] gap-x-8 gap-y-12 md:grid-cols-2 grid mt-12 md:mt-14"
          >
            <input
              placeholder="First Name"
              name="firstName"
              type="text"
              className=" px-3 py-5  block border border-[#6D6D6D] placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
            <input
              placeholder="Last Name"
              name="lastName"
              type="text"
              className=" px-3 py-5  block border border-[#6D6D6D] placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
            <input
              placeholder="Wallet Address"
              name="walletAddress"
              type="text"
              className=" px-3 py-5  block border h-fit border-[#6D6D6D] placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
            <div>
              <input
                placeholder="Amount"
                defaultValue={30000}
                name="amount"
                type="number"
                className="w-full px-3 py-5  block border border-[#6D6D6D] placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
              />
              <span className="text-sm text-[#ACACAC] mt-1">
                *Min. 1 BNB ≈ $200
              </span>
            </div>
            <input
              placeholder="Email Address"
              name="email"
              type="email"
              className="md:col-span-2 md:-mt-5 px-3 py-5  block border border-[#6D6D6D] placeholder:text-[#6D6D6D] text-xl font-light text-black bg-transparent"
            />
          </form>
          <div className="mt-5 relative z-[1]">
            <div className="flex items-center mb-4">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className="w-4 h-4 cursor-pointer text-[#ACACAC] bg-transparent border-[#ACACAC]"
              />
              <label htmlFor="agree" className="ml-2 text-sm text-[#ACACAC]">
                Terms & Agreement
              </label>
            </div>
            <div className="mt-4 flex items-start justify-start w-full">
              <button
                type="submit"
                className=" max-sm:text-base max-sm:px-7 max-sm:py-3  hover:-translate-y-1 active:translate-y-0 active:brightness-[0.85] hero-btn px-10 py-5 text-xl font-bold"
              >
                Join Presale
              </button>
              <p className="text-sm text-[#424344] ml-4 md:ml-24 max-w-xs">
                Stay up to date with the latest developments in the E-Sports DAO
                and enjoy exclusive access to unique benefits through our
                private newsletter.
              </p>
            </div>
          </div>
        </div>
        <div className="max-md:hidden">
          <Image
            width={381}
            height={563}
            alt="cong"
            src={"/sale-illu.png"}
            className="w-72 absolute top-0 right-0"
          />
        </div>
        {/* border  */}
        <img
          className="absolute top-0 left-0 w-full h-full z-0 max-md:hidden"
          src="/border.png"
          alt="border"
        />
      </div>
      <BottomDecoration color="black" />
      <TopBrackets color="black" />
    </div>
  );
}
