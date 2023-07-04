import Image from "next/image";

export default function DistributionSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-center ">
        What about the distibution?
      </h2>
      <div className="md:mt-32 mt-16">
        <Image
          src={"/chart-small.webp"}
          width={1408}
          height={1693}
          quality={100}
          className="mx-auto w-[500px] block md:hidden"
          alt="chart"
        />
        <Image
          src={"/chart-big.webp"}
          width={1980}
          height={1508}
          quality={100}
          className="mx-auto w-[700px] hidden md:block"
          alt="chart"
        />
      </div>
    </section>
  );
}
