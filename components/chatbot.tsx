"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the research assistant AI. How can I help you with your questions about computer science research?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // In a real implementation, you would use the AI SDK with your API key
      // For demo purposes, we'll simulate a response
      const prompt = `You are a helpful AI assistant for a Computer Engineer. 
      Answer the following question concisely and professionally: ${input}`

      // Simulate AI response
      // In a real implementation with API key, you would use:
      // const { text } = await generateText({
      //   model: openai("gpt-4o"),
      //   prompt: prompt,
      // });

      // For demo, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 1000))

      let responseText = ""

      if (input.toLowerCase().includes("research")) {
        responseText =
          "My research focuses on artificial intelligence, distributed systems, and quantum computing. I'm currently working on novel approaches to optimize neural networks for edge devices."
      } else if (input.toLowerCase().includes("contact")) {
        responseText =
          "You can contact the researcher via email at researcher@example.com or through the contact form on this page."
      } else if (input.toLowerCase().includes("publication")) {
        responseText =
          "Recent publications include papers on federated learning, quantum algorithms, and distributed training of large language models. You can find the full list on the Blog & Publications page."
      } else {
        responseText =
          "Thank you for your question. The researcher specializes in AI, distributed systems, and quantum computing. Would you like specific information about any of these areas?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: responseText }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error processing your request. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col h-[600px] bg-gray-950 rounded-lg border border-gray-800">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-200"
                }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-gray-800 text-gray-200">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-800 p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 border-gray-700 text-white"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" className="bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
