"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when screen size reaches sm breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // 640px is Tailwind's sm breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactClick = () => {
    setIsOpen(false); 
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Browse Pages</SheetTitle>
        <div className="mt-8 flex flex-col gap-6">
          {navigationItems.map((item, index) => (
            <Link
            key={index}
            href={item.href}
            className={cn(
              "text-sm tracking-wide transition-colors relative py-1",
              pathname === item.href 
                ? "text-foreground font-medium after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-4 after:bg-foreground/50" 
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
          ))}
          <Button onClick={handleContactClick}>Contact Me</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}