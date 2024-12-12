import { redirect } from "next/navigation";
import deleteInvoice from "../lib/deleteInvoice";

export default async function Modal({ id }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  async function cancelButton() {
    "use server";
    redirect(`/${id}`);
  }
  return (
    <div className="absolute md:inset-x-1/4 bg-white text-black rounded-md md:p-8 shadow-2xl z-10 p-5 space-y-3 left-5 right-5">
      <h1 className="md:text-2xl font-bold tracking-wide">Confirm Deletion?</h1>
      <p className="text-gray-500">
        Are you sure you want to delete Invoice XYZ? This action cannot be
        undone.
      </p>

      <div className="flex items-center justify-end gap-2">
        <form action={cancelButton}>
          <button
            type="submit"
            className="rounded-full px-4 py-3 bg-gray-200 text-gray-500"
          >
            Cancel
          </button>
        </form>
        <form action={deleteInvoiceWithId}>
          <button
            type="submit"
            className="rounded-full px-4 py-3 bg-red-500 text-white"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
