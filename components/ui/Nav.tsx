import { ModeToggle } from "../features/ModeToggle";
import { Button } from "./button";

export default function Nav() {
  return (
    <nav className="w-full">
        <ul className="flex flex-row-reverse md:flex-row items-center justify-between">
            <li>
                <Button>Login</Button>
            </li>
            <li>
                <ModeToggle />
            </li>
        </ul>   
    </nav>
  )
}