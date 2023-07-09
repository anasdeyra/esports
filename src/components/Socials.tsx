import Link from "next/link";
import { IconType } from "react-icons/lib";
import {
  FaRedditAlien,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaFacebookMessenger,
  FaTwitter,
} from "react-icons/fa";

export default function Socials() {
  return (
    <nav className="hidden fixed top-1/2 gap-3 md:flex flex-col -translate-y-1/2 left-0 px-2 min-w-[1440px]:px-8 z-50">
      {SOCIALS.map(({ Icon, link }, i) => (
        <Link
          className="min-w-[1440px]:p-4 p-2 border-4 border-white border-opacity-5 rounded-full block"
          key={i}
          href={link}
        >
          <div className="min-[1440px]:hidden">
            <Icon className="-rotate-90" size={16} />
          </div>
          <div className="max-[1440px]:hidden">
            <Icon className="-rotate-90" size={20} />
          </div>
        </Link>
      ))}
    </nav>
  );
}

export const SOCIALS: { Icon: IconType; link: string }[] = [
  {
    link: "/#",
    Icon: FaRedditAlien,
  },
  {
    link: "/#",
    Icon: FaGithub,
  },
  {
    link: "/#",
    Icon: FaMedium,
  },
  {
    link: "/#",
    Icon: FaInstagram,
  },
  {
    link: "/#",
    Icon: FaFacebookMessenger,
  },
  {
    link: "/#",
    Icon: FaTwitter,
  },
];
