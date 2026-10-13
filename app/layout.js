import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: { default: "Helena Crosby | Portfolio", template: "%s | Helena Crosby" },
  description: "Helena Crosby is a Computer Science student at UCF exploring software engineering, full-stack development, and creative projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
