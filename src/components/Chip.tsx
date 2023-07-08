export default function Chip({ color, text }: { color: string; text: string }) {
  return (
    <li className="hero-btn text-center w-[250px] md:w-[350px]  font-light text-sm md:text-xl py-4 pr-16 md:pr-24 flex pl-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="26"
        viewBox="0 0 18 26"
        fill="none"
        className="md:mr-8 mr-4 w-[18px] h-[26px] object-contain"
      >
        <path d="M0.5 8L11 0H18V19L11 26H0.5V8Z" fill={color} />
      </svg>
      <span>{text}</span>
    </li>
  );
}
