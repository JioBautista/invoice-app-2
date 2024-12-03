import Container from "./components/Container";
import Filter from "./components/Filter";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM client`;
  const currentDate = new Date();

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
                {items.status === "Paid" ? (
                  <p className="text-gray-500">
                    Paid {currentDate.toDateString()}
                  </p>
                ) : (
                  <p className="text-gray-500">
                    Due {items.duedate.toDateString()}
                  </p>
                )}
                <p className="text-gray-500">{items.name}</p>
                <p className="font-bold tracking-wide">${items.total}</p>
                {items.status === "Paid" ? (
                  <span className="rounded-md bg-teal-100 text-teal-500 py-2 px-5 font-bold">
                    Paid
                  </span>
                ) : (
                  <span className="rounded-md bg-amber-100 text-amber-500 px-5 py-2 font-bold">
                    Pending
                  </span>
                )}
              </div>
            </Link>
          </>
        ))}
      </div>
    </Container>
  );
}
