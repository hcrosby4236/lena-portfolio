import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Helena Crosby | Portfolio",
  description: "A portfolio site for Helena Crosby, a UCF student and aspiring software engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Nav />
        {children}
      </body>
    </html>
  );
}