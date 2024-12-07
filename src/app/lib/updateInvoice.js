import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function updateInvoice(id, formData) {
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
  UPDATE client 
  SET name = ${rawFormData.name},
  address = ${rawFormData.address},
  city = ${rawFormData.city},
  postcode = ${rawFormData.postcode},
  email = ${rawFormData.email},
  country = ${rawFormData.country},
  description = ${rawFormData.description},
  total = ${rawFormData.total},
  duedate = ${rawFormData.duedate}
  WHERE id = ${id}
  `;

  redirect("/");
}
