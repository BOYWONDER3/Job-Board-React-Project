import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME_OPTIONS } from "@/constants/constants";
import { useTheme } from "@/hooks/useTheme";
import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b p-4 bg-white dark:bg-slate-950">
      <div className="container flex items-center justify-between gap-4">
        <span className="text-lg">BOY App</span>
        <div className="flex">
          <ThemeToggleButton />
          <div className="hidden sm:flex">
            <NavItem to="/tasks" label="Task Board" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
              <Link to="/tasks">Task Board</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

type NavItemProps = {
  to: string;
  label: string;
};

function NavItem({ to, label }: NavItemProps) {
  return (
    <div>
      <Button asChild variant="ghost">
        <Link to={to}>{label}</Link>
      </Button>
    </div>
  );
}

function ThemeToggleButton() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800"
        >
          <Sun className="h-5 w-5 scale-100 dark:scale-0 transition-transform" />
          <Moon className="absolute h-5 w-5 scale-0 dark:scale-100 transition-transform" />
          <span className="sr-only">Toogle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEME_OPTIONS.map((theme) => (
          <DropdownMenuItem
            className="capitalize"
            key={theme}
            onClick={() => setTheme(theme)}
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
