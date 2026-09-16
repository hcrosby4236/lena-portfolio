export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="text-sm font-medium border rounded-lg px-3 py-1.5 hover:bg-gray-50"
        >
          Download PDF
        </a>
      </div>

      <iframe
        src="/resume.pdf"
        className="w-full h-[80vh] border rounded-lg"
        title="Resume"
      />
    </main>
  );
}