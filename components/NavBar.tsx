import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-10 py-6  z-50 shadow-2xs rounded-b-md">
      <h1 className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        Portfolio
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden font-sans md:flex items-center gap-8 text-lg font-medium text-gray-700 dark:text-gray-200">
        <a href="/resume.pdf" download>
          resume
        </a>
        <Link href="/contact">contact</Link>
        <ThemeSwitch />
      </nav>

      {/* Mobile navigation */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 sm:w-80">
            {/* Accessibility fix */}
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

            <nav className="flex flex-col gap-6 px-8 pt-16 text-lg font-sans text-gray-800 dark:text-gray-200">
              <Link href="/resume" className="hover:text-blue-600 transition">
                resume
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition">
                contact
              </Link>
              <div className="pt-4">
                <ThemeSwitch />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
