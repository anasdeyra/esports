"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdChevronLeft } from "react-icons/md";
import Drawer from "./Drawer";
import { Fragment, useState } from "react";
import NavbarDrawerConent from "./NavbarDrawerContent";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      id="navbar"
      className="z-40 border-b border-neutral-800  px-5 md:px-12 backdrop-blur-xl lg:fixed w-full bg-black bg-opacity-25 py-6"
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image alt="logo" width={36} height={36} src="/logo.png" />
        </Link>

        <div
          className={`flex items-center gap-x-2 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <ul className="gap-x-4 mr-4 hidden lg:flex items-center">
            {NAVLINKS.map((props, key) => (
              <NavLink {...props} key={key} />
            ))}
          </ul>
          <button className="bg-primary active:translate-y-0 text-sm font-semibold text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors hover:-translate-y-1 transition-transform">
            Order Now
          </button>
          <FiMenu
            onClick={() => {
              setIsOpen(true);
            }}
            className="transition-transform lg:hidden"
            size={32}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <ul className="flex flex-col gap-y-2">
              {" "}
              {NAVLINKS.map((props, key) => (
                <MblNavLink key={key} {...props} />
              ))}
            </ul>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ label, link, links }: NavbarLinks) {
  if (link)
    return (
      <li>
        <Link
          className="block font-bold text-sm transition-colors hover:text-primary-dark"
          href={link}
        >
          {label}
        </Link>
      </li>
    );
  if (links)
    return (
      <li>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center gap-1 font-bold text-sm transition-colors hover:text-primary-dark">
              <span>{label}</span>
              <MdChevronLeft className="-rotate-90" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-10 w-56 origin-top-right rounded-md bg-black shadow-2xl bg-opacity-50">
              {links.map((l, key) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <Link
                      href={l.link}
                      className={`${
                        active ? " bg-primary" : ""
                      } block transition-colors font-bold w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {l.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    );
}

const NAVLINKS: NavbarLinks[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Marketplace",
    link: "/marketplace",
  },
  {
    label: "Explore",
    links: [
      {
        label: "Whitepaper",
        link: "/whitepaper",
      },
      {
        label: "Roadmap",
        link: "/roadmap",
      },
      {
        label: "Tokenomic",
        link: "/tokenomic",
      },
      {
        label: "Team",
        link: "/team",
      },
    ],
  },
  {
    label: "Activity",
    links: [
      {
        label: "Streams",
        link: "/streams",
      },
      {
        label: "Events",
        link: "/events",
      },
      {
        label: "Tournament",
        link: "/tournament",
      },
      {
        label: "Esport team",
        link: "/esport-team",
      },
    ],
  },
  {
    label: "Finance",
    links: [
      {
        label: "Staking",
        link: "/staking",
      },
      {
        label: "Wallet",
        link: "/wallet",
      },
    ],
  },
  {
    label: "Pages",
    links: [
      {
        label: "Source Code",
        link: "/source-code",
      },
      {
        label: "About Us",
        link: "/about_us",
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

interface NavbarLink {
  label: string;
  link: string;
}

interface NavbarLinks {
  label: string;
  link?: string;
  links?: NavbarLink[];
}

function MblNavLink({ label, link, links }: NavbarLinks) {
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
  if (links)
    return (
      <li>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full gap-x-1 items-center rounded-lg py-2 text-left font-medium `}
              >
                <span>{label}</span>
                <MdChevronLeft className="-rotate-90" aria-hidden="true" />
              </Disclosure.Button>
              <div className="flex flex-col">
                {links.map((l, key) => (
                  <Disclosure.Panel
                    as={Link}
                    href={l.link}
                    key={key}
                    className="p-2  text-white active:text-primary-dark"
                  >
                    {l.label}
                  </Disclosure.Panel>
                ))}
              </div>
            </>
          )}
        </Disclosure>
      </li>
    );
}
