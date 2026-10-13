import ProjectList from "../components/ProjectList";
import { projects } from "../data/projects";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <main id="main-content" className="container page-main fade-in">
      <header className="page-heading">
        <p className="eyebrow">Ideas into things</p>
        <h1>Things I’ve built<span>.</span></h1>
        <p>From hackathon experiments to everyday tools. Each project is a chance to learn something new and make something useful.</p>
      </header>
      <section aria-labelledby="all-projects-heading">
        <h2 id="all-projects-heading" className="sr-only">All projects</h2>
        <ProjectList projects={projects} />
      </section>
      <p className="endnote">Always learning. Always adding to the list.</p>
    </main>
  );
}
