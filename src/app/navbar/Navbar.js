"use client";
import Container from "../components/Container";
import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "../lib/theme-provider";

export default function Navbar() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="bg-[#373B53] text-white">
      <Container>
        <div className="py-5 bg-[#373B53]">
          <h1>This is a navigation bar</h1>
          <button onClick={() => setTheme("dark")}>Light or Dark Mode</button>
        </div>
      </Container>
    </div>
  );
}
