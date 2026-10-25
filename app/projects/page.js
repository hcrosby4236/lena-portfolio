import FadeIn from "../components/FadeIn";
import { Trophy } from "lucide-react";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
      .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
      .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82
      .44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
      0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}

const projects = [
  {
    title: "Omnibelt",
    description:
      "An AI-powered wearable system that helps blind and low-vision users navigate obstacles and locate objects using haptic feedback.",
    details:
      "Developed the iOS application using Swift and Xcode during Knight Hacks IX.",
    technologies: ["Swift", "Xcode", "ARKit", "AI"],
    award: "Best First Time Hacker",
    github: "https://github.com/Whyhellotheir/Omnibelt",
  },
  {
    title: "Debate Arena",
    description:
      "A multi-agent AI web application where three agents debate topics in real time.",
    details: "Built for MLH Global Hack Week: Agents.",
    technologies: ["Python", "Flask", "AI Agents"],
    github: "https://github.com/hcrosby4236/debate-arena",
  },
  {
    title: "Setlistics",
    description:
      "A full-stack web app that transforms concert setlist data into artist dashboards, highlighting popular songs, touring cities, and tour comparisons.",
    technologies: ["Full Stack", "Data Visualization"],
    github: "https://github.com/hcrosby4236/setlistics",
  },
  {
    title: "This Portfolio Site",
    description:
      "My personal portfolio, built to showcase my projects while experimenting with modern web development and interactive animations.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Motion"],
    github: "https://github.com/hcrosby4236/portfolio-site",
  },
  {
    title: "School Planner",
    description:
      "A desktop application for organizing assignments, managing class schedules, and tracking productivity.",
    details: "Planning to eventually rebuild it as a web application.",
    technologies: ["Python", "Tkinter", "SQLite"],
    github: "https://github.com/hcrosby4236/school-planner",
  },
  {
    title: "Python Console Games",
    description:
      "A collection of interactive command-line games, including a branching adventure, cat simulator, and Rock, Paper, Scissors.",
    technologies: ["Python", "CLI"],
    github: "https://github.com/hcrosby4236/python-console-games",
  },
  {
    title: "Cat App",
    description:
      "A fun, interactive web application that generates random cat images.",
    technologies: ["JavaScript", "Web Development"],
    github: "https://github.com/hcrosby4236/cat-app",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <FadeIn delay={0.1}>
        <h1 className="text-4xl text-center font-ruwudu font-semibold mb-6 dark:text-white">
          Projects
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-gray-600 font-gulzar text-center tracking-wide dark:text-gray-300 max-w-2xl mx-auto mb-12">
          A collection of things I've built, experimented with,
          and learned along the way. Click the GitHub icon to
          explore the source code!
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeIn
            key={project.title}
            onScroll
            delay={(index % 2) * 0.12}
            className="h-full"
          >
            <article className="h-full flex flex-col rounded-2xl border border-purple-200 dark:border-purple-900 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500">

              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl font-ruwudu font-semibold dark:text-white">
                  {project.title}
                </h2>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>

              {project.award && (
                <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300 mb-4">
                  <Trophy className="w-4 h-4" />
                  <span className="font-semibold">
                    {project.award}
                  </span>
                </div>
              )}

              <p className="font-gulzar text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                {project.description}
              </p>

              {project.details && (
                <p className="font-gulzar text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.details}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </article>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
