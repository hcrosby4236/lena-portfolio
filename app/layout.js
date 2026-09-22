import "./globals.css";
import { Reenie_Beanie } from 'next/font/google';
import { Gulzar } from 'next/font/google';
import { Ruwudu } from 'next/font/google';
import Nav from "./components/Nav";



const reenie = Reenie_Beanie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-reenie",
})

const gulzar = Gulzar({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gulzar",
})

const ruwudu = Ruwudu({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ruwudu",
})


export const metadata = {
  title: "Helena Crosby | Portfolio",
  description: "Helena Crosby is a aspriring software engineer currently attending University of Central Florida.",
  keywords: "Helena Crosby, Portfolio, Software Engineer, Computer Science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${reenie.variable} ${gulzar.variable} ${ruwudu.variable}`}>
      <body className="bg-white text-gray-900 relative overflow-x-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="blob bg-blue-500 w-96 h-96 top-0 left-0"
            style={{ animation: "float1 12s ease-in-out infinite, hueShift 8s ease-in-out infinite" }}
          />
          <div
            className="blob bg-cyan-500 w-80 h-80 top-1/2 right-0"
            style={{ animation: "float2 14s ease-in-out infinite, hueShift 10s ease-in-out infinite" }}
          />
          <div
            className="blob bg-blue-500 w-72 h-72 bottom-0 left-1/3"
            style={{ animation: "float1 16s ease-in-out infinite reverse, hueShift 11s ease-in-out infinite" }}
          />
          <div
            className="blob bg-pink-600 w-64 h-64 bottom-1/4 right-1/4"
            style={{ animation: "float2 18s ease-in-out infinite reverse, hueShift 11s ease-in-out infinite" }}
          />
        </div>

        <Nav />
        {children}
      </body>
    </html>
  );
}