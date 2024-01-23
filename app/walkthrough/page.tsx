import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Walkthrough() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <p className="text-2xl mb-4">This is the Walkthrough page.</p>
      <p className="text-xl mb-4 italic">
        This page is currently under construction.
      </p>
      <p className="mb-4">
        In the future there will be walkthroughs of basic functionality of the
        application here for the user to see how things are done.
      </p>
      <div className="flex-row">
        <Button className="mr-6">
          <Link href="/dashboard/">Go to Dashboard</Link>
        </Button>
        <Button variant={"secondary"}>
          <Link href="/">Go back Home</Link>
        </Button>
      </div>
    </div>
  );
}
