import { sql } from "@vercel/postgres";

export default function Form() {
  return (
    <form>
      <label>Name</label>
      <input type="text" className="border-2 rounded-sm block" />
      <button type="submit" className="rounded-full bg-blue-500 p-4 text-white">
        Submit
      </button>
    </form>
  );
}
