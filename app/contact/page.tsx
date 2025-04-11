"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const [chatStep, setChatStep] = useState<"intro" | "name" | "email" | "message" | "complete">("intro")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [messages, setMessages] = useState<{ type: "bot" | "user"; content: string }[]>([
    {
      type: "bot",
      content: "Hello there! I’m JARVIS, your friendly assistant. I'm here to help you connect with Mr. Ganguly. Let’s start a quick conversation to get things rolling!",
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)



  // remove this line:
  // const [input, setInput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedInput = inputValue.trim()
    if (!trimmedInput) return

    setMessages((prev) => [...prev, { type: "user", content: trimmedInput }])
    setInputValue("")

    if (chatStep === "intro") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: "Nice to meet you! What's your name?" },
        ])
        setChatStep("name")
      }, 500)
    } else if (chatStep === "name") {
      setFormData({ ...formData, name: trimmedInput })
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: "Thanks! What's your email address?" },
        ])
        setChatStep("email")
      }, 500)
    } else if (chatStep === "email") {
      setFormData({ ...formData, email: trimmedInput })
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: "Got it! What's your message?" },
        ])
        setChatStep("message")
      }, 500)
    } else if (chatStep === "message") {
      const updatedFormData = { ...formData, message: trimmedInput }
      setFormData(updatedFormData)
      setIsSubmitting(true)

      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        })
      } catch (error) {
        console.error("Error sending email:", error)
      }

      setTimeout(() => {
        setIsSubmitting(false)
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: `Thanks for reaching out! I've recorded your message and Mr. Ganguly will get back to you at ${updatedFormData.email} as soon as possible.`,
          },
        ])
        setChatStep("complete")
      }, 1500)
    }
  }



  return (
    <main className="min-h-screen bg-gradient-to-b">
      <div className="container py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-white text-center">Get in Touch</h1>
          <p className="text-xl text-neutral-400 mb-12 text-center">
            Have a question or want to collaborate?{" "}
            <span>Chat with my assistant below.</span>
            
          </p>

          <Card className="bg-neutral-900 border-neutral-800 shadow-xl overflow-hidden">
            <CardHeader className="bg-neutral-950 border-b border-neutral-800">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white">JARVIS</CardTitle>
                  <CardDescription className="text-neutral-400">Online • Typically replies instantly</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === "user" ? "bg-indigo-600 text-white" : "bg-neutral-800 text-neutral-200"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}

                  {isSubmitting && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-neutral-800 text-neutral-200">
                        <div className="flex space-x-2">
                          <div
                            className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {chatStep !== "complete" && (
                  <div className="border-t border-neutral-800 p-4">
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={
                          chatStep === "intro"
                            ? "Say hello to start..."
                            : chatStep === "name"
                              ? "Enter your name..."
                              : chatStep === "email"
                                ? "Enter your email..."
                                : "Type your message..."
                        }
                        className="flex-1 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2"
                        disabled={isSubmitting}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting || !inputValue.trim()}
                      >
                        <Send className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </form>
                  </div>

                )}

                {chatStep === "complete" && (
                  <div className="border-t border-neutral-800 p-4 text-center">
                    <p className="text-neutral-400 mb-3">Thanks for reaching out!</p>
                    <Button
                      onClick={() => {
                        setChatStep("intro")
                        setFormData({ name: "", email: "", message: "" })
                        setMessages([
                          {
                            type: "bot",
                            content:
                              "👋 Hi there! I'd love to help connect you with the researcher. Let's start a conversation!",
                          },
                        ])
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      Start New Conversation
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4 text-white">Other Ways to Connect</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:xanmoy.tsx@gmail.com"
                className="flex flex-col items-center text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <span>Email</span>
              </a>
              <a
                href="https://twitter.com/xanmoy"
                className="flex flex-col items-center text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/xanmoy"
                className="flex flex-col items-center text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
