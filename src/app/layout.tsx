import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
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
    <SessionProvider>
      <html lang="en">
        <body
          className={`${openSans.variable} min-h-screen flex flex-col`}
          style={{ minHeight: "100vh" }}
        >
          <div className="container max-w-screen-desktop min-h-[40px] md:min-h-[70px] items-center justify-between px-5 mx-auto pt-6 2xl:px-0">
            <Header />
            <Navbar />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
