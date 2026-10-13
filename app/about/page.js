import GameShelf from "../components/GameShelf";
import CatGenerator from "../components/CatGenerator";

export const metadata = { title: "About" };

export default function About() {
  return (
    <main id="main-content" className="container page-main fade-in">
      <header className="page-heading"><p className="eyebrow">The person behind the projects</p><h1>A little about me<span>.</span></h1><p>Software, stories, and a healthy amount of curiosity.</p></header>
      <section className="about-intro" aria-labelledby="about-heading">
        <div className="prose"><h2 id="about-heading">Hello again, I’m Helena.</h2><p>I’m studying Computer Science at the University of Central Florida, with an expected graduation in 2029. Before UCF, I studied at Florida Southern College in Lakeland.</p><p>My main interests are software engineering and full-stack web development. I’d also love to explore cybersecurity and game development. This portfolio grows alongside me as I learn and experiment with Next.js, React, and Tailwind CSS.</p><p>Outside of tech, I enjoy video games, TV, music, and trips to the theme parks. I also have a cat named Leo. He was my emotional support animal at FSC, and now he lives at home with me.</p></div>
        <aside className="about-notes"><p className="eyebrow">A few things about me</p><dl><div><dt>Education</dt><dd>Computer Science, UCF<br /><span>Expected graduation: 2029</span></dd></div><div><dt>Interests</dt><dd>Software engineering<br />Full-stack web development</dd></div><div><dt>Next to explore</dt><dd>Cybersecurity & game development</dd></div></dl></aside>
      </section>
      <div className="photo-grid"><figure><img src="/about1.jpg" alt="The entrance to Universal’s Epic Universe" width="750" height="600" loading="lazy" /><figcaption>A little adventure at Epic Universe.</figcaption></figure><figure><img src="/about2.jpg" alt="Leo sleeping in Helena’s arm" width="750" height="600" loading="lazy" /><figcaption>And a little downtime with Leo.</figcaption></figure></div>
      <section className="content-section shelf-section" aria-labelledby="shelf-heading"><div className="section-heading"><div><p className="eyebrow">A few favorites</p><h2 id="shelf-heading">On my shelf.</h2></div><p className="section-hint">Pick a game to read my thoughts.</p></div><GameShelf /></section>
      <section className="cat-section" aria-labelledby="cat-heading"><div><p className="eyebrow">One more thing</p><h2 id="cat-heading">A cat break?</h2><p>Because the internet can always use another cat.</p></div><CatGenerator /></section>
    </main>
  );
}
