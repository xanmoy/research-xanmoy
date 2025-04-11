import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/data/blog-data"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container py-12 px-4 md:py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog & Publications</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Sharing insights, research findings, and technical tutorials on computer science topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-20 mb-8 text-white">Academic Publications</h2>
        <div className="space-y-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </main>
  )
}

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

function BlogPostCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Card className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-indigo-600/50 transition-all duration-300 h-full flex flex-col rounded-2xl">
      <div className="h-48 overflow-hidden bg-neutral-800">
        <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-neutral-400 mb-2">
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
            <Badge key={tag} variant="outline" className="bg-neutral-800 text-indigo-400 border-indigo-900/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-neutral-400">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="text-indigo-400 bg-transparent hover:bg-indigo-600/30 hover:text-indigo-300 p-3" asChild>
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
    <Card className="bg-neutral-900 border-neutral-800 hover:border-indigo-600/50 transition-all duration-300 rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-white">{publication.title}</CardTitle>
          <Badge className="bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50">{publication.year}</Badge>
        </div>
        <CardDescription className="text-neutral-400">{publication.authors}</CardDescription>
        <CardDescription className="text-indigo-400 font-medium">{publication.conference}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-400">{publication.abstract}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="border-indigo-600/50 text-indigo-400 hover:bg-indigo-950" asChild>
          <Link href={publication.link}>View Publication</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
