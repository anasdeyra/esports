import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-auto py-6 max-w-[1440px] mx-auto bg-black border-neutral-700 px-5 md:px-12">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image
            quality={100}
            alt="logo"
            width={36}
            height={36}
            src="/logo.png"
          />
        </Link>
        <span className="text-xl font-medium">Esport Dao</span>
      </div>
    </footer>
  );
}
