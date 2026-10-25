
import { FileDown } from "lucide-react";
import FadeIn from "../components/FadeIn";

const experiences = [
  {
    title: "Software Engineer Intern",
    organization: "MascotGO",
    location: "Remote",
    dates: "Feb. 2026 – Aug. 2026",
    bullets: [
      "Wrote parameterized SQL joins to rank related schools by relationship strength, returning results through a recommendations endpoint.",
      "Designed PostgreSQL schema for tracking peer, competitor, and aspirational school relationships, with source attribution, foreign keys, and CHECK constraints for data integrity.",
    ],
  },
  {
    title: "Mentor",
    organization: "ReDesignHer",
    location: "Remote",
    dates: "Feb. 2026 – Mar. 2026",
    bullets: [
      "Mentored students in a 4-week virtual program focused on design thinking, creative problem-solving, and innovation.",
      "Provided weekly guidance and feedback as students developed solutions to real-world challenges.",
    ],
  },
];

const projects = [
  {
    title: "Omnibelt",
    technologies: "Swift · ARKit · Computer Vision · NVIDIA Jetson Orin Nano",
    award: "🏆 Best First Time Hacker — Knight Hacks IX",
    github: "https://github.com/Whyhellotheir/Omnibelt",
    bullets: [
      "Developed an iOS application using Swift and Xcode for an AI-powered wearable designed to assist blind and low-vision individuals with navigation.",
      "Integrated Apple's ARKit and computer vision capabilities to detect and store information about surrounding objects.",
      "Implemented Wi-Fi communication between the iOS application and an NVIDIA Jetson Orin Nano, connecting mobile software with embedded hardware.",
      "Collaborated with a team to develop an award-winning assistive technology prototype during Knight Hacks IX.",
    ],
  },
  {
    title: "Setlistics",
    technologies: "Next.js · React · REST API · Vercel",
    github: "https://github.com/hcrosby4236/setlistics",
    bullets: [
      "Built and deployed a full-stack Next.js app that pulls live data from the setlist.fm and iTunes Search APIs to rank an artist's most-played songs and cities.",
      "Wrote server-side API routes to keep credentials private, and added caching, retries, and request pacing to work within API rate limits.",
      "Implemented a tour filter, album art, and 30-second song previews, and built a responsive UI from my own Figma prototype.",
    ],
  },
  {
    title: "Debate Arena",
    technologies: "Python · Flask · Backboard AI · HTML/CSS",
    github: "https://github.com/hcrosby4236/debate-arena",
    bullets: [
      "Architected a multi-agent AI web app where three autonomous agents (PRO, CON, JUDGE) debate and evaluate topics in real time using the Backboard AI API.",
      "Built a responsive single-page interface with Flask backend integration and light/dark mode theming.",
    ],
  },
];

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl font-ruwudu font-semibold border-b border-purple-200 dark:border-purple-800 pb-2 mb-6 dark:text-white">
      {children}
    </h2>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-2 font-gulzar text-gray-600 dark:text-gray-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-12">
          <div>
            <h1 className="text-4xl font-ruwudu font-semibold dark:text-white">
              Resume
            </h1>
            <p className="font-gulzar text-gray-600 dark:text-gray-300 mt-2">
              A little more about my experience and what I've been building!
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Helena_Crosby_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 font-gulzar transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </FadeIn>

      {/* Education */}
      <FadeIn onScroll>
        <section className="mb-12">
          <SectionHeading>Education</SectionHeading>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 className="font-medium font-gulzar dark:text-white">
                University of Central Florida
              </h3>
              <p className="font-gulzar text-gray-600 dark:text-gray-300">
                Bachelor of Science in Computer Science
              </p>
            </div>

            <div className="text-sm font-gulzar text-gray-500 dark:text-gray-400 sm:text-right">
              <p>Orlando, FL</p>
              <p>Aug. 2026 – Jul. 2029</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Experience */}
      <FadeIn onScroll>
        <section className="mb-12">
          <SectionHeading>Experience</SectionHeading>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.title}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <h3 className="font-medium font-gulzar dark:text-white">
                    {experience.title} — {experience.organization}
                  </h3>

                  <p className="text-sm font-gulzar text-gray-500 dark:text-gray-400">
                    {experience.dates}
                  </p>
                </div>

                <p className="text-sm font-gulzar text-gray-500 dark:text-gray-400 mb-3">
                  {experience.location}
                </p>

                <BulletList items={experience.bullets} />
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Projects */}
      <FadeIn onScroll>
        <section className="mb-12">
          <SectionHeading>Projects</SectionHeading>

          <div className="space-y-10">
            {projects.map((project) => (
              <div key={project.title}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-medium font-gulzar dark:text-white">
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-gulzar text-purple-700 dark:text-purple-300 hover:underline"
                  >
                    View on GitHub ↗
                  </a>
                </div>

                {project.award && (
                  <p className="text-sm font-gulzar font-medium text-purple-700 dark:text-purple-300 mb-2">
                    {project.award}
                  </p>
                )}

                <p className="text-sm font-gulzar text-purple-700 dark:text-purple-300 mb-3">
                  {project.technologies}
                </p>

                <BulletList items={project.bullets} />
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Certifications */}
      <FadeIn onScroll>
        <section className="mb-12">
          <SectionHeading>Certifications</SectionHeading>

          <p className="font-gulzar text-gray-600 dark:text-gray-300">
            AI Fundamentals: Foundations for Understanding AI — IBM
          </p>
        </section>
      </FadeIn>

      {/* Technical Skills */}
      <FadeIn onScroll>
        <section className="mb-12">
          <SectionHeading>Technical Skills</SectionHeading>

          <div className="space-y-3 font-gulzar text-gray-600 dark:text-gray-300">
            {[
              ["Languages", "Python, Java, SQL, HTML, CSS, C"],
              ["Frameworks & Libraries", "FastAPI, Flask, Next.js, React, Tkinter"],
              ["Databases", "SQLite, PostgreSQL"],
              ["Developer Tools", "Git, GitHub, Docker, Linux, VS Code, Figma"],
            ].map(([category, skills]) => (
              <p key={category}>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {category}:
                </span>{" "}
                {skills}
              </p>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
