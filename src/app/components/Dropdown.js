"use client";
import React from "react";

export default function Dropdown() {
  const [filter, setFilter] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="bg-white py-2 px-5 rounded-md font-bold relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      Filter by status
      {isOpen && (
        <div className="bg-white p-5 absolute inset-x-0 -bottom-32 space-y-5 rounded-md shadow-xl">
          <p>Paid</p>
          <p>Pending</p>
        </div>
      )}
    </div>
  );
}
