import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Herosection from "./_components/Herosection";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head> <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap" rel="stylesheet"></link></head>
      <body className={inter.className}>
        <Navbar />

        <main>{children}</main>
        <Footer/>
      </body>

    </html>
  );
}
