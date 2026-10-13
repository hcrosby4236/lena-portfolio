"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="Helena Crosby home">hc<span>.</span></Link>
        <div className="nav-links">
          {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
        </div>
        <div className="nav-actions">
          <a className="nav-contact" href="mailto:hcrosby4236@gmail.com">Say hello <ArrowUpRight size={15} /></a>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
