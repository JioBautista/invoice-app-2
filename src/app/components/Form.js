export default function Form({ fn, defaultValue }) {
  const inputStyles = "border-2 rounded-md block p-3 w-full font-bold mt-2";
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
          />
        </label>

        <label>
          <span className={spanStyles}>Email</span>
          <input
            type="text"
            className={inputStyles}
            name="email"
            defaultValue={defaultValue ? defaultValue[0].email : null}
          />
        </label>

        <label className="col-span-3">
          <span className={spanStyles}>Street Address</span>
          <input
            type="text"
            className={inputStyles}
            name="address"
            defaultValue={defaultValue ? defaultValue[0].address : null}
          />
        </label>

        <label>
          <span className={spanStyles}>City</span>
          <input
            type="text"
            className={inputStyles}
            name="city"
            defaultValue={defaultValue ? defaultValue[0].city : null}
          />
        </label>

        <label>
          <span className={spanStyles}>Post Code</span>
          <input
            type="text"
            className={inputStyles}
            name="postcode"
            defaultValue={defaultValue ? defaultValue[0].postcode : null}
          />
        </label>

        <label>
          <span className={spanStyles}>Country</span>
          <input
            type="text"
            className={inputStyles}
            name="country"
            defaultValue={defaultValue ? defaultValue[0].country : null}
          />
        </label>

        <label>
          <span className={spanStyles}>Description</span>
          <input
            type="text"
            className={inputStyles}
            name="description"
            defaultValue={defaultValue ? defaultValue[0].description : null}
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
          />
        </label>

        <label>
          <span className={spanStyles}>Due Date</span>
          <input type="date" className={inputStyles} name="duedate" />
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
