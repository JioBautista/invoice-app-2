export default function Form({ fn, defaultValue }) {
  return (
    <form action={fn}>
      <div className="grid grid-cols-3 gap-5 mb-12">
        <label>
          Name
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="name"
            defaultValue={defaultValue ? defaultValue[0].name : null}
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
