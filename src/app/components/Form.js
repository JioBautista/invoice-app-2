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
            defaultValue={defaultValue ? defaultValue[0].email : null}
          />
        </label>

        <label className="col-span-3">
          Street Address
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="address"
            defaultValue={defaultValue ? defaultValue[0].address : null}
          />
        </label>

        <label>
          City
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="city"
            defaultValue={defaultValue ? defaultValue[0].city : null}
          />
        </label>

        <label>
          Post Code
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="postcode"
            defaultValue={defaultValue ? defaultValue[0].postcode : null}
          />
        </label>

        <label>
          Country
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="country"
            defaultValue={defaultValue ? defaultValue[0].country : null}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            name="description"
            defaultValue={defaultValue ? defaultValue[0].description : null}
          />
        </label>

        <label>
          Total
          <input
            type="text"
            className="border-2 rounded-sm block p-1 w-full"
            placeholder="$"
            name="total"
            defaultValue={defaultValue ? defaultValue[0].total : null}
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
