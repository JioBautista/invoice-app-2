import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function createInvoice(formData) {
  "use server";

  const rawFormData = {
    name: formData.get("name"),
    address: formData.get("address"),
    city: formData.get("city"),
    postcode: formData.get("postcode"),
    email: formData.get("email"),
    country: formData.get("country"),
    description: formData.get("description"),
    total: formData.get("total"),
    duedate: formData.get("duedate"),
  };

  await sql`
  INSERT INTO client (name,address,city,postcode,email,country,description,total,duedate)
  VALUES (${rawFormData.name},${rawFormData.address},${rawFormData.city},${rawFormData.postcode}, ${rawFormData.email},
  ${rawFormData.country}, ${rawFormData.description},${rawFormData.total}, ${rawFormData.duedate})
  `;
  redirect("/");
}
