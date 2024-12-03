import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function deleteInvoice(id) {
  "use server";
  await sql`DELETE FROM client WHERE id=${id}`;
  redirect("/");
}
