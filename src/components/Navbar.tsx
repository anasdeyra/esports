"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdChevronLeft } from "react-icons/md";
import Drawer from "./Drawer";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      id="navbar"
      className="z-40 shadow-sm max-w-[1440px] mx-auto  px-5 md:px-12 backdrop-blur-xl w-full bg-black bg-opacity-25 pt-20 pb-6"
    >
      <nav className=" grid grid-cols-[1fr_minmax(140px,204px)_1fr] items-center justify-between">
        {/* left links */}

        <ul className="flex justify-between grow">
          {LEFT_LINKS.map((props, i) => (
            <NavLink key={i} {...props} isActive={props.link == pathname} />
          ))}
        </ul>

        <div className="relative">
          <Image
            alt="logo"
            quality={100}
            src={"/logo.png"}
            width={140}
            height={140}
            className="absolute -top-[70px] left-1/2 -translate-x-1/2 "
          />
        </div>

        {/* right links */}
        <div className="flex gap-8 items-center grow">
          <ul className="flex justify-between gap-4 grow">
            {RIGHT_LINKS.map((props, i) => (
              <NavLink key={i} {...props} isActive={props.link == pathname} />
            ))}
          </ul>
          <button className=" ml-12 glitch btn-cut hover:-translate-y-1 transition-transform active:brightness-[0.85] active:translate-y-0">
            PRESALE
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  label,
  link,
  isActive,
}: NavbarLink & { isActive: boolean }) {
  if (link)
    return (
      <li>
        <Link
          className={`block hover:text-neutral-300 font-bold transition-colors active:text-primary-dark ${
            isActive ? "underline underline-offset-8" : ""
          }`}
          href={link}
          style={isActive ? { textDecorationThickness: 3 } : {}}
        >
          {label}
        </Link>
      </li>
    );
}

interface NavbarLink {
  label: string;
  link: string;
}

const LEFT_LINKS: NavbarLink[] = [
  {
    label: "HOME",
    link: "/",
  },
  {
    label: "MARKETPLACE",
    link: "/marketplace",
  },
  {
    label: "EXPLORE",
    link: "/explore",
  },
  {
    label: "ACTIVITY",
    link: "/activity",
  },
];
const RIGHT_LINKS: NavbarLink[] = [
  {
    label: "FINANCE",
    link: "/finance",
  },
  {
    label: "PAGES",
    link: "/pages",
  },
  {
    label: "CONTACT",
    link: "/contact",
  },
];

function MblNavLink({ label, link }: NavbarLink) {
  if (link)
    return (
      <li>
        <Link
          className=" block wfull py-2 font-medium transition-colors active:text-primary-dark"
          href={link}
        >
          {label}
        </Link>
      </li>
    );
}
