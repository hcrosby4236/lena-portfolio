export default function Projects() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-xl font-semibold">Projects</h2>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li>
          <a
            href="https://github.com/hcrosby4236/debate-arena"
            target="_blank"
            rel="project link"
            className="block border rounded-lg p-4 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md"
          >
            <h3 className="font-medium">Debate Arena</h3>
            <p className="text-sm text-gray-600 mt-1">An AI-powered debate arena using multiple agents to research both sides of a question, provide sources, and deliver a final verdict. Built for MLH Global Hack Week: Agents.</p>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/hcrosby4236/school-planner"
            target="_blank"
            rel="project link"
            className="block border rounded-lg p-4 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md"
          >
            <h3 className="font-medium">School Planner</h3>
            <p className="text-sm text-gray-600 mt-1">A desktop school planner built with Python, Tkinter, and SQLite for managing assignments, class schedules, and productivity. Plan to rewrite as a web application.</p>
          </a>
        </li>
      </ul>
    </main>
  );
}