export default function Projects() {
  const githubIcon = (
    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current text-gray-600 hover:text-gray-900">
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

  return (
    <main className="max-w-2xl mx-auto fade-in">
      <section>
        <h1 className="text-3xl text-center font-emilysCandy font-semibold mb-6">Projects</h1>
        <p className="text-gray-600 mb-6 tracking-wider">
          Here are some of the projects I've worked on. Click the GitHub icon to view the source code for each project.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font font-blinker font-semibold">Completed</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="font-medium">Debate Arena</h3>
              <p className="text-sm text-gray-600 mt-1">
                Multi-agent AI web app where three agents debate topics in real time
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Built for MLH Global Hack Week: Agents
              </p>
            </div>
            <a
              href="https://github.com/hcrosby4236/debate-arena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Debate Arena on GitHub"
            >
              {githubIcon}
            </a>
          </li>

          <li className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="font-medium">School Planner</h3>
              <p className="text-sm text-gray-600 mt-1">
                Desktop app for tracking assignments and class schedules
              </p>
            </div>
            <a
              href="https://github.com/hcrosby4236/school-planner"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View School Planner on GitHub"
            >
              {githubIcon}
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font font-blinker font-semibold">In Progress</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="font-medium">This Portfolio Site</h3>
              <p className="text-sm text-gray-600 mt-1">
                Next.js + React + Tailwind, built to learn and experiment
              </p>
            </div>
            <a
              href="https://github.com/hcrosby4236/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Portfolio Site on GitHub"
            >
              {githubIcon}
            </a>
          </li>
          <li className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="font-medium">Unnamed Discord Bot</h3>
              <p className="text-sm text-gray-600 mt-1">
                Built with Discord.js, designed to provide fun and utility features for Discord servers
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Code currently private, but will be made public once the bot is more complete.
              </p>
            </div>
            </li>
        </ul>
      </section>
    </main>
  );
}