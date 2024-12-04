import Container from "@/app/components/Container";
import Filter from "@/app/components/Filter";
import { sql } from "@vercel/postgres";
import List from "@/app/components/List";

export default async function invoiceStatus({ params }) {
  const status = (await params).status;
  const capitalLetter = status.charAt(0).toUpperCase() + status.slice(1);
  const { rows } =
    await sql`SELECT * FROM client WHERE status = ${capitalLetter}`;

  return (
    <Container>
      <Filter data={rows} />
      <List data={rows} />
    </Container>
  );
}
