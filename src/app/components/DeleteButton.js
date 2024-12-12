"use client";

import { useState } from "react";

export default function DeleteButton({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="bg-white px-4 py-3 rounded-full text-black"
        onClick={() => setToggle(!toggle)}
      >
        Test Delete
      </button>
      {toggle && children}
    </div>
  );
}
