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
      
     
     

      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">My Work</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeaturedCard
              title="Research"
              description="Exploring distributed systems, AI, and quantum computing algorithms."
              icon={<Code className="h-8 w-8" />}
              href="/research"
              color="from-indigo-900/20 to-indigo-600/10"
            />
            <FeaturedCard
              title="Publications"
              description="Academic papers and blog posts on cutting-edge computer science topics."
              icon={<FileText className="h-8 w-8" />}
              href="/blog"
              color="from-purple-900/20 to-purple-600/10"
            />
            <FeaturedCard
              title="About Me"
              description="My background, expertise, and journey in computer science research."
              icon={<User className="h-8 w-8" />}
              href="/about"
              color="from-blue-900/20 to-blue-600/10"
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
  color,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
}) {
  return (
    <Link href={href} className="group">
      <div
        className={`bg-gradient-to-br ${color} p-8 rounded-3xl border border-neutral-800 h-full transition-all duration-300 hover:border-indigo-600/50 hover:shadow-lg hover:shadow-indigo-900/10`}
      >
        <div className="text-indigo-400 mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-neutral-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
          <span className="font-medium">Explore</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
