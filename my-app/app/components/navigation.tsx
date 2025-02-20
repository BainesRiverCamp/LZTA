"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/lodges", label: "Lodges" },
  { href: "/activities", label: "Activities" },
  { href: "/safari-guide", label: "Safari Guide" },
  { href: "/seasonal-guide", label: "Seasonal Guide" },
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-secondary font-serif">
            Lower Zambezi
          </Link>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm uppercase tracking-wider font-medium text-muted-foreground hover:text-secondary transition-colors",
                      pathname === item.href && "text-secondary border-b-2 border-secondary pb-1",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

