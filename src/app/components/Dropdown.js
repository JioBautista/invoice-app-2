"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { status } = useParams();
  console.log(status);
  return (
    <div
      className="bg-white py-2 px-5 rounded-md font-bold relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="md:hidden">Filter</p>
      <p className="hidden md:block">Filter by status</p>
      {isOpen && (
        <div className="bg-white p-5 absolute inset-x-0 -bottom-32 space-y-5 rounded-md shadow-xl">
          {status ? (
            <>
              <label className="block flex items-center gap-3">
                <input type="checkbox" checked readOnly />
                {status.toUpperCase()}
              </label>
              <Link href={"/"} className="block">
                <button className="bg-blue-500 p-2 text-white rounded">
                  Reset Filter
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href={"filter/paid"} className="block">
                Paid
              </Link>
              <Link href={"filter/pending"} className="block">
                Pending
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
