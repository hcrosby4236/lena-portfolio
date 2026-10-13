import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer container">
      <div>
        <a className="footer-name" href="mailto:hcrosby4236@gmail.com">Let’s make something cool. <ArrowUpRight size={18} /></a>
        <p>Built with curiosity, Next.js, and a little help from Leo.</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/hcrosby4236" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
        <a href="https://www.linkedin.com/in/hcrosby4236" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
        <a href="mailto:hcrosby4236@gmail.com">Email <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
