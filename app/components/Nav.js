import Link from "next/link";

export default function Nav() {
  return (
    <nav className="max-w-2xl mx-auto px-6 py-6 flex gap-6">
      <Link href="/" className="font-medium hover:underline">
        Home
      </Link>
      <Link href="/projects" className="font-medium hover:underline">
        Projects
      </Link>
    </nav>
  );
}