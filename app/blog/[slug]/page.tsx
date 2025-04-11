import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/data/blog-data"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = post.relatedPosts ? getRelatedBlogPosts(post.relatedPosts) : []

    return (
        <main className="min-h-screen bg-neutral-950 pt-24">
            <div className="container py-12 px-4 md:py-16 max-w-4xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-neutral-400 hover:text-indigo-400 transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Back to Blog</span>
                </Link>

                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge key={tag} className="bg-indigo-900/30 text-indigo-300 hover:bg-indigo-800/30">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">{post.title}</h1>

                    <div className="flex items-center gap-6 text-neutral-400 mb-8">
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden mb-10 bg-neutral-900">
                        <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    {post.content.map((section, index) => {
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

                {relatedPosts.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6 text-white">Related Posts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Card
                                    key={relatedPost.id}
                                    className="bg-neutral-900 border-neutral-800 hover:border-indigo-600/50 transition-all duration-300 rounded-xl"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                                            <Calendar className="h-3 w-3" />
                                            <span>{relatedPost.date}</span>
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 text-white">{relatedPost.title}</h4>
                                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                                        <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0" asChild>
                                            <Link href={`/blog/${relatedPost.slug}`}>
                                                <span>Read More</span>
                                                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
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
