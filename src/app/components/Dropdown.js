"use client";
import React from "react";
import Link from "next/link";

export default function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="bg-white py-2 px-5 rounded-md font-bold relative cursor-pointer dark:bg-[#1E2139] dark:text-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="md:hidden">Filter</p>
      <p className="hidden md:block">Filter by status</p>
      {isOpen && (
        <div className="bg-white p-5 absolute inset-x-0 -bottom-44 space-y-5 rounded-md shadow-xl w-36 cursor-pointer dark:bg-[#1E2139] dark:text-white">
          <Link href={"/"} className="block">
            ALL
          </Link>
          <Link href={"/filter?status=Paid&sort=total"} className="block">
            PAID
          </Link>
          <Link href={"filter?status=Pending"} className="block">
            PENDING
          </Link>
        </div>
      )}
    </div>
  );
}
