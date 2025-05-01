import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymBeam",
  description: "Case Study for GymBeam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <div className="container max-w-screen-desktop min-h-[40px] md:min-h-[70px] flex flex-col items-left justify-between px-5 pt-2.5 2xl:px-0">
          <Header />
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
