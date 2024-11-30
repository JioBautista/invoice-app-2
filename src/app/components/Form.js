import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default function Form() {
  async function createInvoice(formData) {
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
  return (
    <form action={createInvoice}>
      <div className="grid grid-cols-3 gap-5 mb-12">
        <label>
          Name
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="name"
          />
        </label>

        <label>
          Email
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="email"
          />
        </label>

        <label className="col-span-3">
          Street Address
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="address"
          />
        </label>

        <label>
          City
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="city"
          />
        </label>

        <label>
          Post Code
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="postcode"
          />
        </label>

        <label>
          Country
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="country"
          />
        </label>

        <label>
          Description
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="description"
          />
        </label>

        <label>
          Total
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            placeholder="$"
            name="total"
          />
        </label>

        <label>
          Due Date
          <input
            type="date"
            className="border-2 rounded-sm block p-1 w-full"
            name="duedate"
          />
        </label>
      </div>
      <button
        type="submit"
        className="rounded-full bg-blue-500 p-4 text-white ml-auto block"
      >
        Submit
      </button>
    </form>
  );
}
