import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center text-center items-center h-[100vh]">
      <h1 className="text-6xl pb-4">404</h1>
      <h2 className="text-4xl font-bold pb-4">Not Found</h2>
      <p className="italic pb-6 text-2xl">Could not find requested resource</p>
      <Button className="text-xl p-6">
        <Link href={"/"}>Return Home</Link>
      </Button>
    </div>
  );
}
