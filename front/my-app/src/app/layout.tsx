import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Context_Provider } from "@/context/Context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Inti-Tech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <Context_Provider>
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </Context_Provider>

  );
}
