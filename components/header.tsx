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
    <header className=" top-10 pt-8 z-50 w-full flex justify-center px-4">
      {/* sticky */}
      <div className="max-w-3xl md:w-fit w-full bg-card/80 backdrop-blur-md rounded-full shadow-lg transition-all">
        {/* border border-border */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center h-14 px-8 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
        flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-xl transition-colors duration-200
        ${pathname === item.path
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-primary hover:bg-muted/30"}
      `}
            >
              {item.name}
              {item.name === "Work" && (
                <kbd className="ml-1 bg-muted/20 px-1.5 py-0.5 text-xs rounded-md border border-muted-foreground/20 font-mono">
                  /
                </kbd>
              )}
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
        <div className="fixed inset-0 z-50 bg-card/90 backdrop-blur-md md:hidden flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-lg font-semibold transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : "text-muted-foreground"
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
