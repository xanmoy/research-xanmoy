import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, FileText, Users } from "lucide-react"
import { getRelatedResearchProjects, getResearchProjectBySlug } from "@/lib/data/research-data"

export default function ResearchProjectPage({ params }: { params: { slug: string } }) {
    const project = getResearchProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    const relatedProjects = project.relatedProjects ? getRelatedResearchProjects(project.relatedProjects) : []

    return (
        <main className="min-h-screen bg-neutral-950 pt-24">
            <div className="container py-12 px-4 md:py-16 max-w-6xl mx-auto">
                <Link
                    href="/research"
                    className="inline-flex items-center text-neutral-400 hover:text-indigo-400 transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Back to Research Projects</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} className="bg-indigo-900/30 text-indigo-300 hover:bg-indigo-800/30">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">{project.title}</h1>
                            <p className="text-xl text-neutral-300">{project.description}</p>
                        </div>

                        <div className="rounded-2xl overflow-hidden mb-10 bg-neutral-900">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        {project.team && (
                            <Card className="bg-neutral-900 border-neutral-800 mb-6 rounded-xl">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold mb-4 text-white flex items-center">
                                        <Users className="mr-2 h-5 w-5 text-indigo-400" />
                                        Research Team
                                    </h3>
                                    <div className="space-y-4">
                                        {project.team.map((member, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-800 mr-3">
                                                    <img
                                                        src={member.avatar || "/placeholder.svg"}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white">{member.name}</div>
                                                    <div className="text-sm text-neutral-400">{member.role}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {project.publications && (
                            <Card className="bg-neutral-900 border-neutral-800 rounded-xl">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold mb-4 text-white flex items-center">
                                        <FileText className="mr-2 h-5 w-5 text-indigo-400" />
                                        Publications
                                    </h3>
                                    <div className="space-y-4">
                                        {project.publications.map((publication, index) => (
                                            <div key={index} className="border-b border-neutral-800 last:border-0 pb-4 last:pb-0">
                                                <h4 className="font-medium text-white mb-1">{publication.title}</h4>
                                                <p className="text-sm text-neutral-400 mb-1">{publication.authors}</p>
                                                <p className="text-sm text-indigo-400 mb-2">
                                                    {publication.conference}, {publication.year}
                                                </p>
                                                <Link
                                                    href={publication.link}
                                                    className="text-xs inline-flex items-center text-neutral-300 hover:text-indigo-400"
                                                >
                                                    View Publication
                                                    <ExternalLink className="ml-1 h-3 w-3" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    {project.content.map((section, index) => {
                        switch (section.type) {
                            case "paragraph":
                                return (
                                    <p key={index} className="text-neutral-300 mb-6 leading-relaxed">
                                        {section.content}
                                    </p>
                                )
                            case "heading":
                                return (
                                    <h2 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-white">
                                        {section.content}
                                    </h2>
                                )
                            case "subheading":
                                return (
                                    <h3 key={index} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">
                                        {section.content}
                                    </h3>
                                )
                            case "image":
                                return (
                                    <figure key={index} className="my-8">
                                        <div className="rounded-xl overflow-hidden bg-neutral-900">
                                            <img
                                                src={section.content || "/placeholder.svg"}
                                                alt={section.alt || ""}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        {section.caption && (
                                            <figcaption className="text-center text-neutral-400 mt-2 text-sm">{section.caption}</figcaption>
                                        )}
                                    </figure>
                                )
                            case "code":
                                return (
                                    <div key={index} className="my-8">
                                        <pre className="bg-neutral-900 p-4 rounded-xl overflow-x-auto">
                                            <code className="text-neutral-300 text-sm">{section.content}</code>
                                        </pre>
                                        {section.language && (
                                            <div className="text-right text-neutral-500 text-xs mt-1">{section.language}</div>
                                        )}
                                    </div>
                                )
                            case "quote":
                                return (
                                    <blockquote
                                        key={index}
                                        className="border-l-4 border-indigo-500 pl-4 py-1 my-6 text-neutral-300 italic"
                                    >
                                        {section.content}
                                    </blockquote>
                                )
                            case "list":
                                return (
                                    <div key={index} className="my-6">
                                        <p className="text-neutral-300 mb-2">{section.content}</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {section.items?.map((item, itemIndex) => (
                                                <li key={itemIndex} className="text-neutral-300">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            default:
                                return null
                        }
                    })}
                </div>

                {relatedProjects.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6 text-white">Related Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedProjects.map((relatedProject) => (
                                <Card
                                    key={relatedProject.id}
                                    className="bg-neutral-900 border-neutral-800 hover:border-indigo-600/50 transition-all duration-300 rounded-xl"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {relatedProject.tags.slice(0, 2).map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="bg-neutral-800 text-indigo-400 border-indigo-900/50 text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 text-white">{relatedProject.title}</h4>
                                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                                        <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0" asChild>
                                            <Link href={`/research/${relatedProject.slug}`}>
                                                <span>View Project</span>
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
