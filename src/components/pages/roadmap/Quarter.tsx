export default function Quarter({
  quarter,
  year,
  className = "",
}: {
  quarter: string;
  year: string;
  className?: HTMLDivElement["className"];
}) {
  return (
    <div className="grid content-center w-24 lg:w-48  aspect-square">
      <div className="grid content-center row-start-1 col-start-1 text-center ">
        <span className="block font-bold text-2xl lg:text-4xl">{quarter}</span>
        <span className="block font-bold text-xl lg:text-3xl">{year}</span>
      </div>
      <div
        style={{
          background:
            "linear-gradient(143deg, rgba(54, 49, 204, 0.70) 0%, rgba(8, 0, 255, 0.20) 100%)",
        }}
        className={
          "w-24 lg:w-48 -z-[1] blur-xl aspect-square rounded-full row-start-1 col-start-1" +
          className
        }
      />
    </div>
  );
}
