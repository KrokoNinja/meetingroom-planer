"use client";

import { ModeToggle } from "../features/ModeToggle";
import { Button } from "./button";
import { useToast } from "./use-toast";

export default function Nav() {
  const { toast } = useToast();

  return (
    <nav className="w-full">
      <ul className="flex flex-row-reverse md:flex-row items-center justify-between">
        <li>
          <Button
            onClick={() => {
              toast({
                title: "This feature is not implemented yet",
                description:
                  "We are sorry for the inconvenience. Please try again later.",
              });
            }}
          >
            Login
          </Button>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
