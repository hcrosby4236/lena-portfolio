export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto fade-in">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-semibold font-ruwudu">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="text-sm font-medium font-gulzar border rounded-lg px-3 py-1.5 hover:bg-gray-50"
        >
          Download PDF
        </a>
      </div>

      {/* Education */}
      <section className="mb-10">
        <h3 className="text-lg font-ruwudu font-semibold border-b pb-1 mb-3">Education</h3>
        <div className="flex justify-between">
          <div>
            <p className="font-medium font-gulzar">University of Central Florida</p>
            <p className="text-gray-600 font-gulzar">Bachelor of Science in Computer Science</p>
          </div>
          <div className="text-right text-gray-500 text-sm font-gulzar">
            <p>Orlando, FL</p>
            <p>Aug. 2026 - Current</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h3 className="text-lg font-ruwudu font-semibold border-b pb-1 mb-3">Experience</h3>

        <div className="mb-6">
          <div className="flex justify-between">
            <p className="font-medium font-gulzar">Software Engineer Intern — MascotGO</p>
            <p className="font-gulzar text-gray-500 text-sm">Feb. 2026 - Aug. 2026</p>
          </div>
          <p className="text-gray-500 text-sm mb-2 font-gulzar">Remote</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 font-gulzar">
            <li>Developed backend applications and workflows using Python and related development tools</li>
            <li>Built AI-assisted automation workflows to improve and streamline data processing tasks</li>
            <li>Analyzed datasets containing over 1,000 records to support data-driven application development</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="font-medium font-gulzar">Mentor — ReDesignHer</p>
            <p className="text-gray-500 text-sm font-gulzar">Feb. 2026 - Mar. 2026</p>
          </div>
          <p className="text-gray-500 text-sm mb-2 font-gulzar">Remote</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 font-gulzar">
            <li>Mentored students in a 4-week virtual program focused on design thinking, creative problem-solving, and innovation</li>
            <li>Provided weekly guidance and feedback as students developed solutions to real-world challenges</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h3 className="text-lg font-ruwudu font-semibold border-b pb-1 mb-3">Projects</h3>

        <div className="mb-6">
          <p className="font-medium font-gulzar">Debate Arena</p>
          <p className="text-gray-500 text-sm mb-2 font-gulzar">Python, Flask, Backboard AI, HTML/CSS</p>
          <ul className="list-disc list-inside font-gulzar text-gray-600 space-y-1">
            <li>Architected a multi-agent AI web app where three autonomous agents (PRO, CON, JUDGE) debate and evaluate topics in real time using the Backboard AI API</li>
            <li>Built a responsive single-page interface with Flask backend integration and light/dark mode theming</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium font-gulzar">School Planner</p>
          <p className="text-gray-500 text-sm mb-2 font-gulzar">Python, Tkinter, SQLite</p>
          <ul className="list-disc list-inside font-gulzar text-gray-600 space-y-1">
            <li>Developed a desktop application in Python/Tkinter for tracking assignments and class schedules, replacing manual planning methods</li>
            <li>Implemented persistent data storage using SQLite for assignments and scheduling information</li>
            <li>Designed and implemented a multi-page GUI from custom Figma mockups, translating design specs into functional Tkinter views</li>
          </ul>
        </div>

        <div>
          <p className="font-medium font-gulzar">Text-Based Adventure Game</p>
          <p className="text-gray-500 text-sm mb-2 font-gulzar">Python</p>
          <ul className="list-disc list-inside font-gulzar text-gray-600 space-y-1">
            <li>Devised an interactive command-line adventure game using branching decisions and game-state logic</li>
            <li>Implemented user input handling and multiple paths based on player choices</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold border-b font-gulzar pb-1 mb-3">Certifications</h3>
        <p className="text-gray-600 font-gulzar">AI Fundamentals: Foundations for Understanding AI from IBM</p>
      </section>

      {/* Technical Skills */}
      <section>
        <h3 className="text-lg font-semibold font-gulzar border-b pb-1 mb-3">Technical Skills</h3>
        <ul className="text-gray-600 space-y-1 font-gulzar">
          <li><span className="font-medium">Languages:</span> Python, Java, SQL, HTML, CSS, C</li>
          <li><span className="font-medium">Frameworks + Libraries:</span> Flask, Tkinter</li>
          <li><span className="font-medium">Developer Tools:</span> Git, GitHub, Docker, Linux, VS Code</li>
          <li><span className="font-medium">Databases:</span> SQLite, PostgreSQL</li>
          <li><span className="font-medium">Design:</span> Figma</li>
          <li><span className="font-medium">AI:</span> Backboard AI</li>
        </ul>
      </section>
    </main>
  );
}