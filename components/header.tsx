"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Terminal", path: "/terminal" },
  { name: "Contact", path: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-6 z-50 w-full flex justify-center px-4">
      <div className="max-w-3xl w-fit bg-card/80 backdrop-blur-md rounded-full border border-border shadow-lg transition-all">

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center h-14 px-6 space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center justify-between h-14 px-6">
          <Link href="/" className="text-primary font-semibold text-base">
            Xanmoy
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-4 right-4 md:hidden bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-lg">
          <nav className="py-6 px-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
