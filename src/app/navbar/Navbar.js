"use client";
import Container from "../components/Container";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <div className="bg-[#1E2139] text-white">
      <Container>
        <div className="py-5 bg-[#1E2139] flex items-center gap-2">
          <h1 className="grow text-lg font-bold tracking-widest">
            Invoice App
          </h1>
          <button onClick={() => setTheme("dark")}>
            <Image src={"/Path.png"} width={20} height={20} alt="dark mode" />
          </button>
          <button onClick={() => setTheme("light")}>
            <Image
              src={"/icons8-light-mode-78.png"}
              width={35}
              height={35}
              alt="light mode"
            />
          </button>
        </div>
      </Container>
    </div>
  );
}
