import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-auto  mx-auto bg-black">
      <div className=" border-neutral-700 border-t py-12 px-5 md:px-12 flex gap-16 lg:justify-between items-start flex-col lg:flex-row">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Image
              quality={100}
              alt="logo"
              width={36}
              height={36}
              src="/logo.webp"
            />
          </Link>
          <span className="text-2xl font-medium">Esports Dao</span>
        </div>
        <div className="flex gap-x-32 gap-y-8 lg:justify-between flex-col lg:flex-row">
          {LINKS.map(({ links, title }, i) => (
            <div key={i}>
              <p className="text-lg">{title}</p>
              <ul className="text-neutral-400 mt-2">
                {links.map(({ label, link }, j) => (
                  <li className="hover:underline" key={j}>
                    <Link href={link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-neutral-700 border-t py-6 md:py-12 px-5 md:px-12 flex gap-x-16 gap-y-8 justify-between items-start flex-col lg:flex-row">
        <div className="lg:order-2 flex gap-x-8 gap-y-4 lg:items-center flex-col lg:flex-row items-start">
          <ul className="text-neutral-400 flex gap-x-8 flex-col lg:flex-row">
            <li>
              <Link href={"/terms-of-service"} className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={"/privacy-policy"} className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <ul className="text-neutral-400 flex gap-x-4">
            <li>
              <Link href={"/discord"}>
                <FaDiscord
                  size={20}
                  className="hover:text-white transition-colors"
                />
              </Link>
            </li>
            <li>
              <Link href={"/twitter"}>
                <FaTwitter
                  size={20}
                  className="hover:text-white transition-colors"
                />
              </Link>
            </li>
          </ul>
        </div>
        <span className="lg:order-1 text-neutral-400">
          © 2023 Solana Mobile, Inc.
        </span>
      </div>
    </footer>
  );
}

const LINKS = [
  {
    title: "Dao",
    links: [
      { label: "Marketplace", link: "/marketplace" },
      { label: "FAQ", link: "/faq" },
      { label: "About Us", link: "/about-us" },
      { label: "Contact Us", link: "/contact-us" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", link: "/support" },
      { label: "Returns", link: "/returns" },
      { label: "Warrenty service", link: "/warrenty" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", link: "/support" },
      { label: "Returns", link: "/returns" },
      { label: "Warrenty service", link: "/warrenty" },
    ],
  },
];
