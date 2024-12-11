import "./globals.css";
import Navbar from "./navbar/Navbar";
import ThemeProvider, { ThemeContext } from "./lib/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-gray-200 dark:bg-[#141625]">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
