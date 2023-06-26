import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Esport Dad",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="root" className={space_grotesk.className}>
        <Navbar />
        <div className="lg:pt-[91px] max-w-[1440px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
