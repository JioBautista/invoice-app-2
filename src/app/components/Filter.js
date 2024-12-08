import Link from "next/link";
import Dropdown from "./Dropdown";
import { sql } from "@vercel/postgres";

export default async function Filter({ data }) {
  return (
    <div className="py-5 flex items-center justify-between gap-5">
      <div className="flex-grow">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
          Invoices
        </h1>
        <span className="text-gray-500 md:hidden">{data.length} Invoices</span>
        <span className="hidden md:block text-gray-500">
          There are {data.length} total invoices
        </span>
      </div>
      <Dropdown />
      <Link href={"/new"}>
        <button className="hidden md:block py-3 px-6 bg-blue-500 rounded-full text-white font-bold">
          New Invoice
        </button>
        <button className="md:hidden py-3 px-6 bg-blue-500 rounded-full text-white font-bold">
          New
        </button>
      </Link>
    </div>
  );
}
