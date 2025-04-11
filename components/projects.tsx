import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OpenSourceProjects() {
  return (
      <div className='container py-12 px-6 md:py-16 max-w-6xl mx-auto'>
          <h2 className="text-3xl text-center pb-5 font-bold mt-20 mb-8 text-white">
              Open Source Projects
          </h2>
          <div className="space-y-6">
              {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
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
}

const projects: Project[] = [
    {
        id: 1,
        title: "WhatsApp Desktop for Linux",
        authors: "Tanmoy Ganguly and Team",
        conference: "WhatsApp",
        year: "2024",
        abstract:
            "WhatsApp Desktop for Linux is a native desktop application that allows users to send and receive messages, make voice and video calls, and share files seamlessly. It is built using Electron and React, providing a smooth user experience and integration with the Linux desktop environment. The application supports end-to-end encryption, ensuring that users' messages and calls are secure and private. Additionally, it offers features like group chats, media sharing, and notifications, making it a comprehensive communication tool for Linux users.",
        link: "https://github.com/xanmoy/whatsapp-desktop-client",
    },
    {
        id: 2,
        title: "ICCSAI - Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex Website",
        authors: "Tanmoy Ganguly",
        conference: "International Conference on Cyber Security and Artificial Intelligence (ICCSAI)",
        year: "2025",
        abstract:
            "ICCSAI is the official website for Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex. It provides information about the institute, its programs, and events. The website is built using Next.js and features a modern design, responsive layout, and easy navigation. Users can find details about courses, faculty, and admission procedures. The site also includes sections for news updates, events, and contact information, making it a comprehensive resource for prospective students and visitors.",
        link: "https://iccsai.org/",
    },
    {
        id: 3,
        title: "Surotsav - Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex Website",
        authors: "Tanmoy Ganguly",
        conference: "International Conference on Cyber Security and Artificial Intelligence (ICCSAI)",
        year: "2025",
        abstract:
            "Surotsav is the official Fest website for Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex. It provides information about the institute, its programs, and events. The website is built using Next.js and features a modern design, responsive layout, and easy navigation. Users can find details about courses, faculty, and admission procedures. The site also includes sections for news updates, events, and contact information, making it a comprehensive resource for prospective students and visitors.",
        link: "https://surotsav.xanmoy.in/",
    },
    {
        id: 4,
        title: "Notion Desktop for Linux",
        authors: "Tanmoy Ganguly and Team",
        conference: "Notion",
        year: "2024",
        abstract:
            "Notion Desktop for Linux is a native desktop application that provides a powerful workspace for note-taking, project management, and collaboration. It is built using Electron and React, offering a seamless user experience and integration with the Linux desktop environment. The application supports real-time collaboration, allowing users to work together on documents and projects. It also includes features like templates, databases, and task management, making it a versatile tool for individuals and teams.",
        link: "https://github.com/xanmoy/notion-desktop.git",
    },
    {
        id: 5,
        title: "Xeoly AI Search Engine",
        authors: "Tanmoy Ganguly",
        conference: "Xeoly",
        year: "2023",
        abstract:
            "Xeoly AI Search Engine is a powerful search engine that leverages artificial intelligence to provide accurate and relevant search results. It is designed to enhance the search experience by understanding user intent and context. The search engine uses advanced algorithms and machine learning techniques to analyze and index content, ensuring that users can find the information they need quickly and efficiently. With features like natural language processing, personalized recommendations, and real-time updates, Xeoly AI Search Engine is a cutting-edge solution for modern search needs.",
        link: "https://github.com/xanmoy/xeoly.git",
    },
    {
        id: 6,
        title: "ChatGPT Desktop Client",
        authors: "Tanmoy Ganguly and Team",
        conference: "OpenAI",
        year: "2024",
        abstract:
            "ChatGPT Desktop Client is a native desktop application that allows users to interact with OpenAI's ChatGPT model for various tasks, including text generation and conversation. It is built using Electron and React, providing a smooth user experience and integration with the Linux desktop environment. The application supports features like conversation history, customizable settings, and offline access, making it a powerful tool for users who want to leverage AI for their writing and communication needs.",
        link: "https://github.com/xanmoy/chatgpt-desktop-client.git",
    },
    {
        id: 7,
        title: "Glamour Threads Ecommerce Platform",
        authors: "Tanmoy Ganguly and Team",
        conference: "Glamour Threads",
        year: "2024",
        abstract:
            "Glamour Threads is an ecommerce platform that specializes in fashion and apparel. It provides a seamless shopping experience with features like product browsing, user reviews, and secure payment processing. The platform is built using modern web technologies, ensuring fast load times and a responsive design. Glamour Threads also includes features like personalized recommendations, order tracking, and customer support, making it a comprehensive solution for online shopping.",
        link: "https://github.com/xanmoy/glamourthreads-remix.git",
    },
    {
        id: 8,
        title: "Ether Gallery NFT Marketplace",
        authors: "Tanmoy Ganguly and Team",
        conference: "Ether Gallery",
        year: "2024",
        abstract:
            "Ether Gallery is an NFT marketplace that allows users to buy, sell, and trade non-fungible tokens. It is built on the Ethereum blockchain, ensuring secure and transparent transactions. The platform provides a user-friendly interface for browsing and discovering NFTs, as well as tools for artists and creators to showcase their work. Ether Gallery also includes features like auctions, bidding, and wallet integration, making it a comprehensive solution for the NFT ecosystem.",
        link: "https://github.com/xanmoy/ethergallery.git",
    },
    {
        id: 9,
        title: "DrawFlow",
        authors: "Tanmoy Ganguly",
        conference: "Ether Gallery",
        year: "2024",
        abstract:
            "DrawFlow is a powerful web application that allows users to create, edit, and share flowcharts and diagrams with ease. It combines the flexibility of Next.js with the robust backend services of Convex and secure authentication via Kinde.r. The application features a user-friendly interface for designing flowcharts, along with real-time collaboration capabilities. Users can save their diagrams, share them with others, and even export them in various formats. DrawFlow is designed to be intuitive and accessible, making it suitable for both personal and professional use.",
        link: "https://github.com/xanmoy/drawflow.git",
    },

]

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="bg-neutral-900 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-indigo-900/10">
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
                <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.abstract}
                </p>
            </CardContent>

            <CardFooter className="pt-4">
                <Button
                    variant="outline"
                    className="border-indigo-600/50 text-indigo-400 hover:bg-indigo-950 hover:text-indigo-300 transition"
                    asChild
                >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Get Source
                    </Link>
                </Button>
            </CardFooter>
        </Card>

    )
}
