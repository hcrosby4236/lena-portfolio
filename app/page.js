import "./globals.css";

// This is your homepage. It's a React component that returns HTML-like
// markup (called JSX). Edit anything below and save — `npm run dev` will
// hot-reload the browser automatically.

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 fade-in">
      <h1 className="text-3xl font-bold">Hi, I'm Helena.</h1>
      <p className="mt-4 text-gray-600">
        I am a computer science student at the University of Central Florida, passionate about software engineering. This portfolio is in progress, but feel free to explore my projects and check out my resume.<br></br>
        You can also reach out to me via email or connect with me on LinkedIn.
      </p>
    </main>
  );
}
