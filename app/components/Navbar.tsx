"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();

  const handleContactClick = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/75 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 grid grid-cols-12 items-center">
        <div className="flex sm:col-span-4 col-span-6">
          <Link href="/" className="transition-all hover:opacity-80">
            <h1 className="text-3xl font-light bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Allen Yoo
            </h1>
          </Link>
        </div>

        <div className="hidden sm:flex justify-center items-center sm:col-span-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === item.href}
                      className={`${navigationMenuTriggerStyle()} transition-all hover:text-primary/80 text-sm`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end sm:col-span-4 col-span-6 gap-4">
          <Button className="hidden sm:block" onClick={handleContactClick}>Contact Me</Button>
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
