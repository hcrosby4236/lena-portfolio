import "./globals.css";
import { Poppins } from "next/font/google";
import Nav from "./components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Lena's portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div
              className="blob bg-blue-700 w-96 h-96 top-0 left-0"
              style={{ animation: "float1 12s ease-in-out infinite, hueshift 8s ease-in-out infinite" }}
            />
            <div
              className="blob bg-cyan-600 w-80 h-80 top-1/2 right-0"
              style={{ animation: "float2 14s ease-in-out infinite,  hueShift 10s ease-in-out infinite" }}
            />
            <div
              className="blob bg-blue-600 w-72 h-72 bottom-0 left-1/3"
              style={{ animation: "float1 16s ease-in-out infinite reverse hueShift 11s ease-in-out infinite" }}
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