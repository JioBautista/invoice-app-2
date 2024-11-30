import Container from "./components/Container";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM playing_with_neon`;

  console.log(rows);
  return (
    <Container>
      <div className="py-5">
        {rows.map((items) => (
          <>
            <div key={items.id} className="bg-red-200 mb-5 p-3 rounded">
              <h1>{items.name}</h1>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}
