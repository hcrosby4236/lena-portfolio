import { FileDown } from "lucide-react";

export const metadata = { title: "Resume" };

export default function Resume() {
  return (
    <main id="main-content" className="container page-main fade-in">
      <header className="resume-heading">
        <div className="page-heading"><p className="eyebrow">The path so far</p><h1>My resume<span>.</span></h1><p>Experience, education, and the tools I work with.</p></div>
        <a href="/resume.pdf" download className="button"><FileDown size={17} /> Download PDF</a>
      </header>
      <div className="resume-content">
      {/* Education */}
      <section>
        <h2>Education</h2>
        <div className="education-row">
          <div>
            <p>University of Central Florida</p>
            <p>Bachelor of Science in Computer Science</p>
          </div>
          <div>
            <p>Orlando, FL</p>
            <p>Aug. 2026 - Current</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2>Experience</h2>

        <div>
          <div>
            <p>Software Engineer Intern — MascotGO</p>
            <p>Feb. 2026 - Aug. 2026</p>
          </div>
          <p>Remote</p>
          <ul>
            <li>Developed backend applications and workflows using Python and related development tools</li>
            <li>Built AI-assisted automation workflows to improve and streamline data processing tasks</li>
            <li>Analyzed datasets containing over 1,000 records to support data-driven application development</li>
          </ul>
        </div>

        <div>
          <div>
            <p>Mentor — ReDesignHer</p>
            <p>Feb. 2026 - Mar. 2026</p>
          </div>
          <p>Remote</p>
          <ul>
            <li>Mentored students in a 4-week virtual program focused on design thinking, creative problem-solving, and innovation</li>
            <li>Provided weekly guidance and feedback as students developed solutions to real-world challenges</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <div>
          <p>Debate Arena</p>
          <p>Python, Flask, Backboard AI, HTML/CSS</p>
          <ul>
            <li>Architected a multi-agent AI web app where three autonomous agents (PRO, CON, JUDGE) debate and evaluate topics in real time using the Backboard AI API</li>
            <li>Built a responsive single-page interface with Flask backend integration and light/dark mode theming</li>
          </ul>
        </div>

        <div>
          <p>School Planner</p>
          <p>Python, Tkinter, SQLite</p>
          <ul>
            <li>Developed a desktop application in Python/Tkinter for tracking assignments and class schedules, replacing manual planning methods</li>
            <li>Implemented persistent data storage using SQLite for assignments and scheduling information</li>
            <li>Designed and implemented a multi-page GUI from custom Figma mockups, translating design specs into functional Tkinter views</li>
          </ul>
        </div>

        <div>
          <p>Text-Based Adventure Game</p>
          <p>Python</p>
          <ul>
            <li>Devised an interactive command-line adventure game using branching decisions and game-state logic</li>
            <li>Implemented user input handling and multiple paths based on player choices</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2>Certifications</h2>
        <p>AI Fundamentals: Foundations for Understanding AI from IBM</p>
      </section>

      {/* Technical Skills */}
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><span>Languages:</span> Python, Java, SQL, HTML, CSS, C</li>
          <li><span>Frameworks + Libraries:</span> Flask, Tkinter</li>
          <li><span>Developer Tools:</span> Git, GitHub, Docker, Linux, VS Code</li>
          <li><span>Databases:</span> SQLite, PostgreSQL</li>
          <li><span>Design:</span> Figma</li>
          <li><span>AI:</span> Backboard AI</li>
        </ul>
      </section>
      </div>
    </main>
  );
}
