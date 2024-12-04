import Container from "./components/Container";
import Filter from "./components/Filter";
import { sql } from "@vercel/postgres";
import List from "./components/List";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM client`;

  console.log(rows);
  return (
    <Container>
      <Filter data={rows} />
      <List data={rows} />
    </Container>
  );
}
