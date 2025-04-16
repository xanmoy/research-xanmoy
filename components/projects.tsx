import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OpenSourceProjects() {
  return (
      <div className='container pt-6 pb-12 px-6 md:pb-16 max-w-6xl mx-auto'>
          <h2 className="text-3xl text-center pb-5 font-bold mt-20 mb-8 text-white">
              Open Source Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} colorIndex={index} />
              ))}
          </div>
          
          
      </div>
  )
}

type Project = {
    id: number
    title: string
    authors: string
    conference: string
    year: string
    abstract: string
    link: string
    tags?: string[]
}

const projects: Project[] = [
    {
        id: 1,
        title: "WhatsApp Desktop for Linux",
        authors: "Tanmoy Ganguly and Team",
        conference: "WhatsApp",
        year: "2024",
        abstract:
            "A native Linux desktop app built with Electron and React for messaging, voice/video calls, and file sharing. It offers end-to-end encryption, group chats, and media sharing, providing a seamless communication experience.",
        link: "https://github.com/xanmoy/whatsapp-desktop-client",
        tags: ["Electron", "React", "JavaScript", "Linux", "Secure Messaging"]
    },
    {
        id: 2,
        title: "ICCSAI Website",
        authors: "Tanmoy Ganguly",
        conference: "ICCSAI",
        year: "2025",
        abstract:
            "The official website for Dr. Sudhir Chandra Sur Institute, built with Next.js and featuring a responsive design. It provides information on courses, faculty, admission, and events for prospective students.",
        link: "https://iccsai.org/",
        tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Web Development", "Radix UI"]
    },
    {
        id: 3,
        title: "Surotsav Website",
        authors: "Tanmoy Ganguly",
        conference: "Surotsav",
        year: "2025",
        abstract:
            "The official festival website for the institute, built using Next.js. It includes event information, news, and contact details with a modern, responsive design for easy navigation.",
        link: "https://surotsav.xanmoy.in/",
        tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Web Development", "Radix UI", "Framer Motion"]
    },
    {
        id: 4,
        title: "Notion Desktop for Linux",
        authors: "Tanmoy Ganguly and Team",
        conference: "Notion",
        year: "2024",
        abstract:
            "A powerful workspace app built with Electron and React for note-taking, project management, and collaboration. It includes templates, databases, and real-time collaboration features.",
        link: "https://github.com/xanmoy/notion-desktop.git",
        tags: ["Electron", "React", "JavaScript", "Linux", "Productivity"]
    },
    {
        id: 5,
        title: "Xeoly AI Search Engine",
        authors: "Tanmoy Ganguly",
        conference: "Xeoly",
        year: "2023",
        abstract:
            "An AI-powered search engine that uses machine learning to deliver relevant search results based on user intent. It includes personalized recommendations and real-time updates.",
        link: "https://github.com/xanmoy/xeoly.git",
        tags: ["AI", "Search Engine", "Next.js", "TailwindCSS", "TypeScript", "DuckDuck Go", "Gemini"]
    },
    {
        id: 6,
        title: "ChatGPT Desktop Client",
        authors: "Tanmoy Ganguly and Team",
        conference: "OpenAI",
        year: "2024",
        abstract:
            "A native desktop app built with Electron and React for interacting with OpenAI’s ChatGPT. It includes conversation history, customizable settings, and offline access.",
        link: "https://github.com/xanmoy/chatgpt-desktop-client.git",
        tags: ["Electron", "React", "JavaScript", "Linux", "AI", "Chatbot"]
    },
    {
        id: 7,
        title: "Glamour Threads Ecommerce Platform",
        authors: "Tanmoy Ganguly and Team",
        conference: "Glamour Threads",
        year: "2024",
        abstract:
            "An ecommerce platform for fashion and apparel built with React and Remix. It includes product browsing, user reviews, secure payment processing, and order tracking.",
        link: "https://github.com/xanmoy/glamourthreads-remix.git",
        tags: ["Ecommerce", "React", "TypeScript", "TailwindCSS", "Remix", "Sanity", "Web Development"]
    },
    {
        id: 8,
        title: "Ether Gallery NFT Marketplace",
        authors: "Tanmoy Ganguly and Team",
        conference: "Ether Gallery",
        year: "2024",
        abstract:
            "An NFT marketplace built on Ethereum for buying, selling, and trading tokens. Features include auctions, wallet integration, and tools for artists to showcase their work.",
        link: "https://github.com/xanmoy/ethergallery.git",
        tags: ["NFT", "Ethereum", "Blockchain", "Web3", "React", "TypeScript", "TailwindCSS"]
    },
    {
        id: 9,
        title: "DrawFlow",
        authors: "Tanmoy Ganguly",
        conference: "Ether Gallery",
        year: "2024",
        abstract:
            "A web app for creating and sharing flowcharts and diagrams. It includes real-time collaboration, intuitive design, and export options, built with Next.js and Convex.",
        link: "https://github.com/xanmoy/drawflow.git",
        tags: ["Next.js", "Convex", "Kinde.r", "Flowcharts", "Web Development"]
    },
];


const ProjectCard = ({ project, colorIndex }: { project: any; colorIndex: number }) => {
    const gradientColors = [
        "from-blue-900/20 to-blue-600/10",
        "from-purple-900/20 to-purple-600/10",
        "from-indigo-900/20 to-indigo-600/10",
        "from-cyan-900/20 to-cyan-600/10",
        "from-pink-900/20 to-pink-600/10",
        "from-emerald-900/20 to-emerald-600/10",
        "from-rose-900/20 to-rose-600/10",
        "from-sky-900/20 to-sky-600/10",
        "from-violet-900/20 to-violet-600/10",
        "from-fuchsia-900/20 to-fuchsia-600/10",
        "from-teal-900/20 to-teal-600/10",
        "from-lime-900/20 to-lime-600/10",
        "from-amber-900/20 to-amber-600/10",
        "from-orange-900/20 to-orange-600/10",
    ];

    const gradient = gradientColors[colorIndex % gradientColors.length];

    return (
        <Card className={`bg-gradient-to-br ${gradient} border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-indigo-900/10`}>
            <CardHeader className="space-y-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg font-semibold tracking-tight">
                        {project.title}
                    </CardTitle>
                    <Badge className="bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/60 transition">
                        {project.year}
                    </Badge>
                </div>
                <CardDescription className="text-sm text-neutral-400">
                    {project.authors}
                </CardDescription>
                <CardDescription className="text-sm text-indigo-400 font-medium">
                    {project.conference}
                </CardDescription>
            </CardHeader>

            <CardContent className="mt-2">
                <p className="text-neutral-200 text-sm leading-relaxed">
                    {project.abstract}
                </p>

                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>

            <CardFooter className="pt-4">
                <Button
                    variant="outline"
                    className="border-indigo-600/50 text-indigo-300 hover:bg-indigo-950 hover:text-indigo-200 transition"
                    asChild
                >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Get Source
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};
