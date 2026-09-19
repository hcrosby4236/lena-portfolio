import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Helena Crosby | Portfolio",
  description: "A portfolio site for Helena Crosby, a UCF student and aspiring software engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 relative overflow-x-hidden">
        {/* Background blobs — sit behind everything else */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div
            className="blob bg-blue-400 w-96 h-96 top-0 left-0"
            style={{ animation: "float1 12s ease-in-out infinite" }}
          />
          <div
            className="blob bg-cyan-300 w-80 h-80 top-1/2 right-0"
            style={{ animation: "float2 14s ease-in-out infinite" }}
          />
          <div
            className="blob bg-blue-300 w-72 h-72 bottom-0 left-1/3"
            style={{ animation: "float1 16s ease-in-out infinite reverse" }}
          />
        </div>

        <Nav />
        {children}
      </body>
    </html>
  );
}