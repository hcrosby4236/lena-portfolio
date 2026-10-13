import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import ProjectList from "./components/ProjectList";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main id="main-content" className="container fade-in">
      <section className="hero" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Computer science @ UCF</p>
          <h1 id="intro-heading">Hi, I’m<br />Helena Crosby<span>.</span></h1>
          <p className="hero-subtitle">Curious mind. Creative builder.</p>
          <p className="hero-description">I’m a Computer Science student with a passion for software engineering, full-stack development, and turning cool ideas into things you can actually use.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">Explore my work <ArrowUpRight size={17} /></Link>
            <a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={16} /></a>
          </div>
          <a href="#selected-work" className="scroll-cue">A little of what I’m working on <ArrowDown size={14} /></a>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/introduction.png" alt="Helena standing beside a lake" width="1080" height="1350" fetchPriority="high" /></div>
          <span className="portrait-caption"><MapPin size={13} /> Florida, USA</span>
          <p className="portrait-note">Learning by building.</p>
        </div>
      </section>
      <dl className="quick-facts">
        <div><dt>Studying</dt><dd>Computer Science <span>at UCF</span></dd></div>
        <div><dt>Exploring</dt><dd>Software & full-stack development</dd></div>
        <div><dt>Beyond the code</dt><dd>Games, music & theme parks</dd></div>
      </dl>
      <section id="selected-work" className="content-section" aria-labelledby="work-heading">
        <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-heading">Built with curiosity.</h2></div><Link className="text-link" href="/projects">All projects <ArrowRight size={17} /></Link></div>
        <ProjectList projects={projects.slice(0, 3)} />
      </section>
      <section className="content-section" aria-labelledby="experience-heading">
        <div className="section-heading"><div><p className="eyebrow">02 / Experience</p><h2 id="experience-heading">Learning along the way.</h2></div><Link className="text-link" href="/resume">Full resume <ArrowRight size={17} /></Link></div>
        <div className="experience-list">
          <article className="experience-row"><p className="experience-date">Feb — Aug 2026</p><div><h3>Software Engineer Intern</h3><p className="company">MascotGO <span>· Remote</span></p><p>Built Python backend applications and AI-assisted automation workflows, working with datasets of over 1,000 records.</p></div><span className="experience-kind">Engineering</span></article>
          <article className="experience-row"><p className="experience-date">Feb — Mar 2026</p><div><h3>Mentor</h3><p className="company">ReDesignHer <span>· Remote</span></p><p>Guided students through a four-week program in design thinking, creative problem-solving, and innovation.</p></div><span className="experience-kind">Community</span></article>
        </div>
      </section>
      <section className="personal-preview content-section" aria-labelledby="personal-heading">
        <div><p className="eyebrow">03 / Away from the keyboard</p><h2 id="personal-heading">A little more human.</h2><p>When I’m not building something, you’ll probably find me playing a game, listening to music, exploring a theme park, or hanging out with my cat, Leo.</p><Link className="text-link" href="/about">Get to know me <ArrowRight size={17} /></Link></div>
        <figure><img src="/about2.jpg" alt="Leo the cat sleeping in Helena’s arm" width="600" height="600" loading="lazy" /><figcaption>Leo, my favorite coding companion.</figcaption></figure>
      </section>
    </main>
  );
}
