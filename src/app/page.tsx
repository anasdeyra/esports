import Hero from "@/components/pages/index/Hero";
import Supply from "@/components/pages/index/Supply";
import Tokenomics from "@/components/pages/index/Tokenomics";
import What from "@/components/pages/index/What";

export default function Home() {
  return (
    <>
      <Hero />
      <What />
      <Supply />
      <Tokenomics />
    </>
  );
}
