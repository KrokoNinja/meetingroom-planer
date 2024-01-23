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
        <Button variant={"secondary"}>
          <Link href="/walkthrough/">View Walkthrough</Link>
        </Button>
        <Button>Try it yourself</Button>
      </div>
    </section>
  );
}
