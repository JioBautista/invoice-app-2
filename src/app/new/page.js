import Link from "next/link";
import Container from "../components/Container";
import Form from "../components/Form";

export default function New() {
  return (
    <Container>
      <div className="py-5 space-y-5">
        <h1 className="text-4xl font-bold tracking-wide">New Invoice</h1>
        <Link href={"/"} className="font-bold block">
          Go Back
        </Link>

        <div className="bg-white p-5 rounded-lg">
          <Form />
        </div>
      </div>
    </Container>
  );
}
