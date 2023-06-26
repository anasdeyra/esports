"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import usePortal from "react-useportal";

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  const { Portal } = usePortal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Portal>
      <main
        className={
          " fixed overflow-hidden z-40 bg-black bg-opacity-50 backdrop-blur-xl inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : "opacity-0 -translate-x-full  ")
        }
      >
        <section>
          <div className="flex justify-between items-center px-5 py-6 border-b border-b-neutral-800">
            <Image alt="logo" width={140} height={16} src="/logo-big.svg" />
            <div className="flex items-center gap-x-2">
              <button className="bg-primary active:translate-y-0 border text-sm font-semibold text-white active:bg-white active:text-black px-5 py-2 border-black rounded-full hover:bg-white transition-colors hover:-translate-y-1 transition-transform">
                Order Now
              </button>
              <FiX
                onClick={() => {
                  setIsOpen(false);
                }}
                color="white"
                size={32}
              />
            </div>
          </div>
          <div className="px-5 mt-8">{children}</div>
        </section>
      </main>
    </Portal>
  );
}

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
