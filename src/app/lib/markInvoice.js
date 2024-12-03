import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function markInvoice(id) {
  "use server";
  await sql`UPDATE client SET status = 'Paid' WHERE id=${id}`;
  redirect("/");
}
