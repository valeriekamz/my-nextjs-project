"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import ShimmerButton from "./shadcn/ShimmerButton";

const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-purple-200 z-50 fixed top-0 w-full backdrop-blur supports-[backdrop-filter]:bg-purple-200/80">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 ml-4">
          <span className="text-xl font-bold">LoopDesk</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[#8b5cf6] cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <a href="#about" className="block">
            <ShimmerButton title="Book a Call" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium transition-colors hover:text-[#8b5cf6]"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full">Book a Call</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
