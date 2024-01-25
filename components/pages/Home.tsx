import Link from "next/link";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <section className="flex flex-col justify-center text-center gap-6">
      <h1 className="text-4xl font-bold">Meetingroom Planer</h1>
      <p className="text-2xl">
        Plan meetings accross different rooms, without struggeling with
        overlapping or multiple meetings in one room at the same time.
      </p>
      <div className="flex flex-row gap-2 justify-center">
        <Link href="/walkthrough/">
          <Button variant={"secondary"}>
            View Walkthrough
          </Button>
        </Link>
        <Link href="/dashboard/">
          <Button>Try it yourself</Button>
        </Link>
      </div>
    </section>
  );
}
