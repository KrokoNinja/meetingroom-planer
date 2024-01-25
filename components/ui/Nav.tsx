"use client";

import Link from "next/link";
import { ModeToggle } from "../features/ModeToggle";
import { Button } from "./button";
import { useToast } from "./use-toast";

export default function Nav() {
  const { toast } = useToast();

  //TODO: Change Nav -> remove ul and li and change styling

  return (
    <nav className="w-full">
      <ul className="flex flex-row-reverse md:flex-row items-center justify-between">
        <li>
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
          <Button
            onClick={() => {
              toast({
                title: "This feature is not implemented yet",
                description:
                  "We are sorry for the inconvenience. Please try again later.",
              });
            }}
          >
            Get started
          </Button>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
