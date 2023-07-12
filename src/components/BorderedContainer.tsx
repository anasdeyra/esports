"use client";
import { useEffect, useRef, useState } from "react";

export default function BorderedContainer({
  children,
  className,
  color = "white",
  isDhased = false,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  isDhased?: boolean;
}) {
  const [{ width, height }, setDimentions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const ref = useRef<HTMLDivElement | null>(null);

  const bgColor = `bg-${color}`;

  const tl = 0.3;
  const br = 0.15;

  const minTl = Math.min(height * tl, width * tl);
  const minBr = Math.min(height * br, width * br);
  const topWidth = width - minTl;
  const leftHeight = height - minTl;
  const tlWidth = Math.sqrt(Math.pow(minTl, 2) * 2);

  const bottomWidth = width - minBr;
  const rightHeight = height - minBr;
  const brWidth = Math.sqrt(Math.pow(minBr, 2) * 2);

  useEffect(() => {
    if (!ref.current) return;
    setDimentions({
      width: ref.current?.clientWidth,
      height: ref.current?.clientHeight,
    });
    window.addEventListener("resize", () => {
      if (!ref.current) return;
      setDimentions({
        width: ref.current?.clientWidth,
        height: ref.current?.clientHeight,
      });
    });
  }, [ref]);

  return (
    <div className={className + " relative"} ref={ref}>
      {/* top  */}
      <div
        className={`absolute h-1 ${bgColor}`}
        style={{ top: 0, right: 0, width: topWidth }}
      />
      {/* tl  */}
      <div
        className={`absolute h-1 ${bgColor}`}
        style={{
          top: minTl - 1,
          left: 1,
          width: tlWidth,
          transform: `rotate(-45deg)`,
          transformOrigin: "left center",
        }}
      />
      {/* left */}
      <div
        className={`absolute w-1 ${bgColor}`}
        style={{ bottom: 0, left: 0, height: leftHeight }}
      />
      {/* bottom */}
      <div
        className={`absolute h-1 ${bgColor}`}
        style={{ bottom: 0, left: 0, width: bottomWidth }}
      />
      {/* br  */}
      <div
        className={`absolute h-1 ${bgColor}`}
        style={{
          bottom: minBr - 1,
          right: 1,
          width: brWidth,
          transform: `rotate(-45deg)`,
          transformOrigin: "right center",
        }}
      />
      {/* right */}
      <div
        className={`absolute w-1 ${bgColor}`}
        style={{ top: 0, right: 0, height: rightHeight }}
      />

      {children}
    </div>
  );
}
