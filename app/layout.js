import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "My Portfolio",
  description: "Lena's portfolio site",
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