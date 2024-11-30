import Container from "./components/Container";
import Filter from "./components/Filter";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM client`;

  console.log(rows);
  return (
    <Container>
      <Filter />
      <div className="py-5">
        {rows.map((items) => (
          <>
            <Link href={`/${items.id}`}>
              <div
                key={items.id}
                className="bg-white mb-5 p-5 rounded flex items-center justify-between"
              >
                <p className="text-gray-500">
                  Due {items.duedate.toDateString()}
                </p>
                <p className="text-gray-500">{items.name}</p>
                <p className="font-bold tracking-wide">${items.total}</p>
                <span className="rounded-md bg-red-100 px-5 py-2 font-bold text-red-500">
                  {items.status}
                </span>
              </div>
            </Link>
          </>
        ))}
      </div>
    </Container>
  );
}
