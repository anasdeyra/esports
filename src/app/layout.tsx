import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Esports Dao",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "url('/blob1.webp')",
          backgroundSize: "1306px 1523px",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
        }}
        id="root"
        className={space_grotesk.className}
      >
        <Navbar />
        <div className="lg:pt-[91px] max-w-[1440px] mx-auto mb-64">
          <main className="mt-32 px-5 md:px-12">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
