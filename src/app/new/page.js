import Link from "next/link";
import Container from "../components/Container";
import Form from "../components/Form";

export default function New() {
  return (
    <Container>
      <div className="py-5">
        <Link href={"/"} className="font-bold">
          Go Back
        </Link>

        <div>
          <Form />
        </div>
      </div>
    </Container>
  );
}
