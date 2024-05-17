import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/utils/theme-provider";
import { FaMoon, FaRegSun } from "react-icons/fa";

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // Get theme and setTheme from useTheme hook

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle between light and dark themes
  };

  return (
    <>
      <>
        {theme === "light" ? ( // Check the current theme
          <FaMoon onClick={toggleTheme} className="text-2xl ml-3" /> // Switch to light theme
        ) : (
          <FaRegSun onClick={toggleTheme} className="text-2xl ml-3" /> // Switch to dark theme
        )}
      </>
    </>
  );
}

// <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <Button variant="outline" size="icon">
//       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent align="end" className="bg-white text-black">
//     <DropdownMenuItem onClick={() => setTheme("light")}>
//       Light
//     </DropdownMenuItem>
//     <DropdownMenuItem onClick={() => setTheme("dark")}>
//       Dark
//     </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
