import Link from "next/link";
import Image from "next/image";

export default function List({ data }) {
  const currentDate = new Date();
  return (
    <div className="py-5">
      {data.length === 0 && (
        <Image
          src={"/Group.png"}
          width={241.34}
          height={342}
          alt="There is nothing here"
          className="mx-auto my-10"
        />
      )}
      {data.map((items) => (
        <>
          <Link href={`/${items.id}`}>
            <div
              key={items.id}
              className="grid grid-cols-2 bg-white mb-5 p-5 rounded md:flex md:items-center md:justify-between shadow gap-2"
            >
              {items.status === "Paid" ? (
                <p className="text-gray-500">
                  Paid {currentDate.toDateString()}
                </p>
              ) : (
                <p className="text-gray-500">
                  Due {items.duedate.toDateString()}
                </p>
              )}
              <p className="text-gray-500 justify-self-end">{items.name}</p>
              <p className="font-bold tracking-wide self-end md:self-center">
                ${items.total}
              </p>
              {items.status === "Paid" ? (
                <span className="rounded-md bg-teal-100 text-teal-500 py-2 px-5 font-bold justify-self-end">
                  Paid
                </span>
              ) : (
                <span className="rounded-md bg-amber-100 text-amber-500 px-5 py-2 font-bold justify-self-end">
                  Pending
                </span>
              )}
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}
