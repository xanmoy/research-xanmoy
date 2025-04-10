import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-2 text-white">Blog & Publications</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Sharing insights, research findings, and technical tutorials on computer science topics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p>
            <span className="text-gray-400">Note: </span>
            The blog section is currently under development. Please check back later for updates.

            
         </p>
          {/* {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))} */}
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8 text-white">Academic Publications</h2>
        <div className="space-y-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </main>
  )
}

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing Neural Networks for Edge Devices",
    excerpt:
      "Techniques and approaches for deploying efficient neural networks on resource-constrained edge devices without sacrificing accuracy.",
    date: "April 5, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=250&width=500",
    tags: ["Machine Learning", "Edge Computing", "Optimization"],
    slug: "optimizing-neural-networks",
  },
  {
    id: 2,
    title: "The Future of Quantum Computing",
    excerpt:
      "An exploration of recent advances in quantum computing and their potential impact on cryptography, optimization, and simulation.",
    date: "March 12, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=250&width=500",
    tags: ["Quantum Computing", "Future Tech", "Research"],
    slug: "future-quantum-computing",
  },
  {
    id: 3,
    title: "Distributed Systems in Practice",
    excerpt:
      "Practical lessons learned from building and deploying large-scale distributed systems in production environments.",
    date: "February 28, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=250&width=500",
    tags: ["Distributed Systems", "Cloud", "Architecture"],
    slug: "distributed-systems-practice",
  },
  {
    id: 4,
    title: "Ethics in Artificial Intelligence",
    excerpt: "Exploring the ethical considerations and challenges in developing and deploying AI systems in society.",
    date: "January 15, 2023",
    readTime: "15 min read",
    image: "/placeholder.svg?height=250&width=500",
    tags: ["AI Ethics", "Society", "Responsible AI"],
    slug: "ethics-artificial-intelligence",
  },
]

type Publication = {
  id: number
  title: string
  authors: string
  conference: string
  year: string
  abstract: string
  link: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: "A Novel Approach to Federated Learning with Differential Privacy Guarantees",
    authors: "J. Smith, A. Johnson, R. Williams",
    conference: "International Conference on Machine Learning (ICML)",
    year: "2023",
    abstract:
      "This paper presents a novel approach to federated learning that provides strong differential privacy guarantees while maintaining high model accuracy.",
    link: "#",
  },
  {
    id: 2,
    title: "Quantum Algorithms for Graph Problems: A Comprehensive Survey",
    authors: "R. Williams, S. Chen, T. Garcia",
    conference: "ACM Quantum Computing Journal",
    year: "2022",
    abstract:
      "A comprehensive survey of quantum algorithms for solving graph problems, including shortest path, maximum flow, and graph coloring.",
    link: "#",
  },
  {
    id: 3,
    title: "Scalable Distributed Training of Large Language Models",
    authors: "A. Johnson, J. Smith, L. Davis",
    conference: "Conference on Neural Information Processing Systems (NeurIPS)",
    year: "2022",
    abstract:
      "This paper presents techniques for scaling the distributed training of large language models across thousands of GPUs.",
    link: "#",
  },
]

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-indigo-600 transition-all duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-800">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className="text-white">{post.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-gray-800 text-indigo-400 border-indigo-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-indigo-500 hover:text-indigo-400 p-0" asChild>
          <Link href={`/blog/${post.slug}`}>
            <span>Read More</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-indigo-600 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-white">{publication.title}</CardTitle>
          <Badge className="bg-indigo-900 text-indigo-300 hover:bg-indigo-800">{publication.year}</Badge>
        </div>
        <CardDescription className="text-gray-400">{publication.authors}</CardDescription>
        <CardDescription className="text-indigo-500 font-medium">{publication.conference}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{publication.abstract}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="border-indigo-600 text-indigo-500 hover:bg-indigo-950" asChild>
          <Link href={publication.link}>View Publication</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
