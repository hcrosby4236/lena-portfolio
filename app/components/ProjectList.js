import { ArrowUpRight, Trophy } from "lucide-react";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article className="project-row" key={project.name}>
          <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-content">
            <p className="eyebrow">{project.category}</p>
            <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.name} <ArrowUpRight size={23} /></a></h3>
            <p className="project-description">{project.description}</p>
            <ul className="tags" aria-label={`${project.name} technologies`}>
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            {project.note && <p className="project-note">{project.note}</p>}
          </div>
          <div className="project-aside">
            {project.award && <span className="award"><Trophy size={16} /> Winner: {project.award}</span>}
            <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>View source <ArrowUpRight size={15} /></a>
          </div>
        </article>
      ))}
    </div>
  );
}
