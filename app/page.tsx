import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, FileText, TerminalIcon, User } from "lucide-react"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Terminal } from "@/components/terminal" // your Terminal component path
import { OpenSourceProjects } from "@/components/projects"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Work Section */}
      <Work />
      
      <OpenSourceProjects />
      

     
    </main>
  )
}

