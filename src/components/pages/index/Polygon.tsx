import Image from "next/image";

export default function Polygon() {
  return (
    <div className="bg-[#DCDCDC] pt-28 -mx-5 md:-mx-12 pb-64">
      <Image
        src={"/polygon.png"}
        width={96}
        height={96}
        alt="polygon"
        className="mx-auto"
      />
      <h2 className="font-bold text-6xl text-center text-black mt-6">
        Powered by <br />
        Polygon chain
      </h2>
      <p className="text-xl text-black text-center mt-6 max-w-4xl mx-auto">
        Polygon PoS is a solution that achieves unprecedented transaction speed
        and cost savings by utilizing side-chains for transaction processing.
        POS ensures asset security using the robust Plasma bridging framework
        and a decentralized network of Proof-of-Stake (PoS) validators.
      </p>
    </div>
  );
}
