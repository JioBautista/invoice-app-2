"use client";

import { useState } from "react";

export default function DeleteButton({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="px-4 py-3 rounded-full text-white bg-red-500"
        onClick={() => setToggle(!toggle)}
      >
        Delete
      </button>
      {toggle && children}
    </div>
  );
}
