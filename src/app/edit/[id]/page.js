import Container from "@/app/components/Container";
import Form from "@/app/components/Form";
import Link from "next/link";
import updateInvoice from "@/app/lib/updateInvoice";
import { sql } from "@vercel/postgres";

export default async function editInvoice({ params }) {
  const id = (await params).id;
  const { rows } = await sql`SELECT * FROM client WHERE id=${id}`;
  const updateInvoiceWithId = updateInvoice.bind(null, id);

  return (
    <Container>
      <div className="py-5 space-y-5 dark:text-white">
        <h1 className="text-4xl font-bold tracking-wide">Edit Invoice</h1>
        <Link href={"/"} className="font-bold p-2 inline-block">
          Go Back
        </Link>

        <div className="bg-white p-5 rounded-lg dark:bg-transparent">
          <Form fn={updateInvoiceWithId} defaultValue={rows} />
        </div>
      </div>
    </Container>
  );
}
