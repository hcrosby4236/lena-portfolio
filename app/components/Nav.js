import Link from "next/link";
import { Mail } from "lucide-react";

export default function Nav() {
  return (
    <nav className=" mx-auto px-6 py-6 flex items-center justify-between fade-in">
      <div className="flex gap-6">
        <Link href="/" className=" font-medium font-ruwudu text-xl hover:underline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 text-black ">
          Home
        </Link>
        <Link href="/projects" className="font-medium font-ruwudu hover:underline text-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 text-black ">
        Projects
        </Link>
        <Link href="/resume" className="font-medium font-ruwudu hover:underline text-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 text-black ">
          Resume
        </Link>
      </div>

      <div className="flex gap-4">
        <a href="mailto:hcrosby4236@gmail.com" aria-label="Email me">
          <Mail className="w-5 h-5 text-black-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 " />
        </a>
        <a
          href="https://www.linkedin.com/in/hcrosby4236"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current text-black-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xlpx-6 "
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}