"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { researchProjects } from "@/lib/data/research-data"
import { motion } from "framer-motion"

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-2">
      <div className="container pb-12 px-4 md:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Research Projects</h1> */}
          
          <motion.h1
            className="text-5xl md:text-5xl lg:text-7xl font-bold mb-4 text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}
          >
            Research Projects
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the frontiers of computer science through innovative research and practical applications.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* {researchProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed text-center">
            Research projects are currently not available. Please check back later.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-20 mb-8 text-white">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResearchArea
            title="Artificial Intelligence & Machine Learning"
            description="Developing novel algorithms and approaches for machine learning, deep learning, and reinforcement learning with applications in computer vision, natural language processing, and decision-making systems."
            topics={["Neural Networks", "Reinforcement Learning", "Computer Vision", "NLP"]}
          />
          <ResearchArea
            title="Distributed Systems & Cloud Computing"
            description="Designing scalable, reliable, and efficient distributed systems for modern computing environments, with a focus on cloud-native architectures, consensus algorithms, and fault tolerance."
            topics={["Consensus Algorithms", "Fault Tolerance", "Scalability", "Cloud-Native"]}
          />
          <ResearchArea
            title="Quantum Computing"
            description="Exploring quantum algorithms, quantum machine learning, and quantum simulation techniques to solve problems that are intractable for classical computers."
            topics={["Quantum Algorithms", "Quantum ML", "Quantum Simulation"]}
          />
          <ResearchArea
            title="Cybersecurity & Privacy"
            description="Investigating novel approaches to secure systems and networks, with a focus on privacy-preserving computation, secure multi-party computation, and cryptographic protocols."
            topics={["Privacy-Preserving ML", "Secure Computation", "Cryptography"]}
          />
         
        </div>
      </div>
    </main>
  )
}

function ProjectCard({ project }: { project: (typeof researchProjects)[0] }) {
  return (
    <Card className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-indigo-600/50 transition-all duration-300 rounded-2xl h-full flex flex-col">
      <div className="h-48 overflow-hidden bg-neutral-800">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-white">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-neutral-800 text-indigo-400 border-indigo-900/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-neutral-400">{project.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0" asChild>
          <Link href={`/research/${project.slug}`}>
            <span>View Project</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ResearchArea({
  title,
  description,
  topics,
}: {
  title: string
  description: string
  topics: string[]
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-indigo-600/50 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-neutral-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge key={topic} variant="outline" className="bg-neutral-800 text-indigo-400 border-indigo-900/50">
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  )
}
