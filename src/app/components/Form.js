export default function Form({ fn, defaultValue }) {
  const inputStyles =
    "border-2 rounded-md block p-3 w-full font-bold mt-2 dark:bg-[#1E2139] dark:border-none dark:text-white";
  const spanStyles = "text-gray-500";

  return (
    <form action={fn}>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 mb-12">
        <label>
          <span className={spanStyles}>Name</span>
          <input
            type="text"
            className={inputStyles}
            name="name"
            defaultValue={defaultValue ? defaultValue[0].name : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>Email</span>
          <input
            type="email"
            className={inputStyles}
            name="email"
            defaultValue={defaultValue ? defaultValue[0].email : null}
            required
          />
        </label>

        <label className="col-span-3">
          <span className={spanStyles}>Street Address</span>
          <input
            type="text"
            className={inputStyles}
            name="address"
            defaultValue={defaultValue ? defaultValue[0].address : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>City</span>
          <input
            type="text"
            className={inputStyles}
            name="city"
            defaultValue={defaultValue ? defaultValue[0].city : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>Post Code</span>
          <input
            type="text"
            className={inputStyles}
            name="postcode"
            defaultValue={defaultValue ? defaultValue[0].postcode : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>Country</span>
          <input
            type="text"
            className={inputStyles}
            name="country"
            defaultValue={defaultValue ? defaultValue[0].country : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>Description</span>
          <input
            type="text"
            className={inputStyles}
            name="description"
            defaultValue={defaultValue ? defaultValue[0].description : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>Total</span>
          <input
            type="text"
            className={inputStyles}
            placeholder="$"
            name="total"
            defaultValue={defaultValue ? defaultValue[0].total : null}
            required
          />
        </label>

        <label>
          <span className={spanStyles}>Due Date</span>
          <input type="date" className={inputStyles} name="duedate" required />
        </label>
      </div>
      <button
        type="submit"
        className="rounded-full bg-blue-500 p-4 text-white ml-auto block"
      >
        {defaultValue ? "Save Changes" : "Save & Send"}
      </button>
    </form>
  );
}
