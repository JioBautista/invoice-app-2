import "./globals.css";
import Navbar from "./navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
