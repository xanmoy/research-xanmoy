import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ResearchPage() {
  return (
    <main className="min-h-screen ">
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-2 text-white">Research Projects</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Exploring the frontiers of computer science through innovative research and practical applications.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p>
            <span className="text-gray-400">Note: </span>
            The projects are currently under development. Please check back later for updates.
            
            
            
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8 text-white">Research Areas</h2>
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

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Distributed AI Systems",
    description:
      "A framework for deploying and managing distributed AI workloads across heterogeneous computing environments.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Distributed Systems", "AI", "Cloud Computing"],
    link: "#",
  },
  {
    id: 2,
    title: "Quantum Computing Algorithms",
    description:
      "Novel quantum algorithms for optimization problems with applications in logistics and supply chain management.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Quantum Computing", "Algorithms", "Optimization"],
    link: "#",
  },
  {
    id: 3,
    title: "Machine Learning Optimization",
    description: "Techniques for optimizing neural network training and inference on resource-constrained devices.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Machine Learning", "Optimization", "Edge Computing"],
    link: "#",
  },
  {
    id: 4,
    title: "Privacy-Preserving Federated Learning",
    description:
      "Methods for collaborative machine learning without sharing sensitive data, using federated learning and differential privacy.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Privacy", "Federated Learning", "Security"],
    link: "#",
  },
  {
    id: 5,
    title: "Explainable AI Systems",
    description: "Frameworks and techniques for making AI systems more interpretable and explainable to humans.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Explainable AI", "Interpretability", "Ethics"],
    link: "#",
  },
  {
    id: 6,
    title: "Blockchain for Secure Computation",
    description: "Using blockchain technology to enable secure, decentralized computation for sensitive applications.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Blockchain", "Security", "Decentralized Systems"],
    link: "#",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-indigo-600 transition-all duration-300">
      <div className="h-48 overflow-hidden bg-gray-800">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-white">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-gray-800 text-indigo-400 border-indigo-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{project.description}</CardDescription>
      </CardContent>
      {project.link && (
        <CardFooter>
          <Button variant="ghost" className="text-indigo-500 hover:text-indigo-400 p-0" asChild>
            <Link href={project.link}>
              <span>View Project</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
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
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-600 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge key={topic} variant="outline" className="bg-gray-800 text-indigo-400 border-indigo-800">
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  )
}
