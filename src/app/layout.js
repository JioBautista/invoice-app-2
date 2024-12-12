import "./globals.css";
import Navbar from "./navbar/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-200 dark:bg-[#141625] relative">
        <ThemeProvider attribute={"class"} enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
