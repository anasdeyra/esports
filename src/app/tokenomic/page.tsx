import DistributionSection from "@/components/pages/Tokenomic/DistributionSection";
import UsesSection from "@/components/pages/Tokenomic/UsesSection";

export default function Tokenomic() {
  return (
    <div className="flex flex-col gap-32 md:gap-64">
      <section>
        <h1 className="text-center text-5xl md:text-6xl font-bold">
          Tokenomic
        </h1>
        <div className="font-medium text-xl md:text-2xl mx-auto max-w-4xl text-center mt-8">
          The SITY token is a key element of the Versity metaverse and is used
          for every exchange. It runs on the Polygon blockchain and has several
          uses.
        </div>
      </section>
      <UsesSection />
      <DistributionSection />
    </div>
  );
}
