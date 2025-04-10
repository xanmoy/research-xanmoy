import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, FileText, TerminalIcon, User } from "lucide-react"
import { Hero } from "@/components/hero"
import { Terminal } from "@/components/terminal" // your Terminal component path


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      
     
     

      {/* Featured Sections */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Explore My Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeaturedCard
              title="Research Projects"
              description="Discover my latest research in computer science, algorithms, and AI."
              icon={<Code className="h-8 w-8" />}
              href="/research"
            />
            <FeaturedCard
              title="Blog & Publications"
              description="Read my thoughts, tutorials, and published papers."
              icon={<FileText className="h-8 w-8" />}
              href="/blog"
            />
            <FeaturedCard
              title="About Me"
              description="Learn about my background, expertise, and research interests."
              icon={<User className="h-8 w-8" />}
              href="/about"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function FeaturedCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 h-full transition-all duration-300 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-900/20">
        <div className="text-indigo-500 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-neutral-400 mb-4">{description}</p>
        <div className="flex items-center text-indigo-500 group-hover:text-indigo-400">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
