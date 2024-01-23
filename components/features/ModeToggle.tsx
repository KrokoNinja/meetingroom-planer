"use client"
import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "../ui/toggle"

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState("off");

  const changeMode = () => {
    if (mode === "off") {
      setMode("on");
      setTheme("light");
    } else {
      setMode("off");
      setTheme("dark");
    }
  };

  return (
    <Toggle data-state={mode} onClick={changeMode}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Toggle>
  )
}
