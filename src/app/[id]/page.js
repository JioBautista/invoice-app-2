import { sql } from "@vercel/postgres";
import Container from "../components/Container";
import Link from "next/link";
import { redirect } from "next/navigation";
import deleteInvoice from "../lib/deleteInvoice";
import markInvoice from "../lib/markInvoice";

export default async function Invoice({ params }) {
  const id = (await params).id;
  const { rows } = await sql`SELECT * FROM client WHERE id=${id}`;
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  const markInvoiceWithId = markInvoice.bind(null, id);

  console.log(rows);
  return (
    <Container>
      <div className="space-y-5 py-5">
        <h1 className="text-4xl font-bold tracking-wide">Invoice Details</h1>
        <Link href={"/"} className="font-bold block">
          Go Back
        </Link>
        {rows.map((items) => (
          <>
            <div className="py-5 space-y-8">
              <div className="flex items-center justify-center bg-white p-5 rounded-md flex-wrap">
                <div className="hidden md:block grow">
                  <h1 className="text-gray-500 inline mr-5">Status</h1>
                  <span className="grow rounded-md bg-red-100 px-5 py-2 font-bold text-red-500">
                    {items.status}
                  </span>
                </div>

                <Link href={`/edit/${items.id}`}>
                  <button className="rounded-full px-5 py-3 bg-gray-300 mr-3 text-gray-500">
                    Edit
                  </button>
                </Link>

                <form action={deleteInvoiceWithId}>
                  <button
                    className="rounded-full px-5 py-3 bg-red-500 text-white mr-3"
                    type="submit"
                  >
                    Delete
                  </button>
                </form>

                <form action={markInvoiceWithId}>
                  <button className="rounded-full px-5 py-3 bg-blue-500 text-white">
                    Mark as Paid
                  </button>
                </form>
              </div>

              <div className="bg-white p-5 grid grid-cols-2 gap-5 rounded-md">
                <div className="sm:block md:hidden grow col-span-2">
                  <h1 className="text-gray-500 inline mr-5">Status</h1>
                  <span className="grow rounded-md bg-red-100 px-5 py-2 font-bold text-red-500">
                    {items.status}
                  </span>
                </div>

                <h1 className="col-span-2 text-xl font-bold tracking-wide">
                  {items.description}
                </h1>

                <div>
                  <p className="text-gray-500">Payment Due</p>
                  <p className="font-bold tracking-wide">
                    {items.duedate.toDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Bill To</p>
                  <p className="font-bold tracking-wide">{items.name}</p>
                  <p>{items.address}</p>
                  <p>{items.city}</p>
                  <p>{items.postcode}</p>
                  <p>{items.country}</p>
                </div>

                <div>
                  <p className="text-gray-500">Sent to</p>
                  <p className="font-bold tracking-wide">{items.email}</p>
                </div>

                <div className="col-span-2 flex justify-between items-center bg-[#373B53] rounded-md text-white px-10 py-5">
                  <h1 className="text-2xl">Total</h1>
                  <h1 className="text-4xl font-bold">${items.total}</h1>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}
