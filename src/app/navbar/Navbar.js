"use client";
import Container from "../components/Container";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-[#373B53] text-white">
      <Container>
        <div className="py-5 bg-[#373B53]">
          <h1>This is a navigation bar</h1>
          <button onClick={() => setTheme("dark")}>Dark</button>
          <button onClick={() => setTheme("light")}>Light</button>
        </div>
      </Container>
    </div>
  );
}
