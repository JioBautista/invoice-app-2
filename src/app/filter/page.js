import Container from "@/app/components/Container";
import Filter from "@/app/components/Filter";
import { sql } from "@vercel/postgres";
import List from "@/app/components/List";

export default async function invoiceStatus({ searchParams }) {
  const filters = (await searchParams).status;
  const { rows } = await sql`SELECT * FROM client WHERE status = ${filters}`;
  return (
    <Container>
      <Filter data={rows} />
      <List data={rows} />
    </Container>
  );
}
