import "./globals.css";
import { Reenie_Beanie } from 'next/font/google';
import { Gulzar } from 'next/font/google';
import { Ruwudu } from 'next/font/google';
import Nav from "./components/Nav";
import { ThemeProvider } from "./context/ThemeContext";
import ParticleBackground from "./components/ParticleBackground";

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
    <html
      lang="en"
      className={`${reenie.variable} ${gulzar.variable} ${ruwudu.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white relative overflow-x-hidden fade-in">
        <ThemeProvider>
          <ParticleBackground />

          <div className="site-content">
            <Nav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}