"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"
import { ChevronRight, TerminalIcon } from "lucide-react"

type CommandHistory = {
  command: string
  output: string
}

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: "", output: "Welcome to the research terminal! Type 'help' to see available commands." },
  ])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [typingIndex, setTypingIndex] = useState(-1)
  const [currentOutput, setCurrentOutput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const isMobile = useMobile()

  const commands = {
    help: "Available commands:\n\n• about - Learn about the researcher\n• projects - View current research projects\n• blog - See recent blog posts\n• contact - Get contact information\n• clear - Clear the terminal\n• goto [page] - Navigate to a page\n• ls - List files\n• pwd - Print working directory\n• date - Show current date\n• whoami - Display user",
    about: "Computer Engineer specializing in algorithms, AI, and distributed systems.",
    projects:
      "Current research projects include: \n\n• Distributed AI Systems \n• Quantum Computing Algorithms \n• Machine Learning Optimization",
    blog: "Recent blog posts: \n\n• 'Optimizing Neural Networks for Edge Devices' \n• 'The Future of Quantum Computing' \n• 'Distributed Systems in Practice'",
    contact: "Email: researcher@example.com \nTwitter: @csresearcher",
    clear: "Clearing terminal...",
    ls: "about.txt  projects.md  blog/  contact.json  research.pdf",
    pwd: "/home/guest",
    date: new Date().toString(),
    whoami: "guest",
    cd: "Changed directory.",
    goto: "Navigating to specified page...",
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const args = trimmedCmd.split(" ")
    const mainCommand = args[0]

    let output = ""

    if (trimmedCmd === "") {
      output = ""
    } else if (mainCommand === "clear") {
      setHistory([])
      return
    } else if (mainCommand === "goto") {
      if (args.length > 1) {
        const page = args[1]
        output = commands.goto

        setTimeout(() => {
          switch (page) {
            case "home":
              router.push("/")
              break
            case "research":
            case "projects":
              router.push("/research")
              break
            case "blog":
              router.push("/blog")
              break
            case "about":
              router.push("/about")
              break
            case "contact":
              router.push("/contact")
              break
            default:
              output = `Unknown page: ${page}`
          }
        }, 500)
      } else {
        output = "Usage: goto [home|research|blog|about|contact]"
      }
    } else if (mainCommand === "cd") {
      output = commands.cd
    } else if (mainCommand in commands) {
      output = commands[mainCommand as keyof typeof commands]
    } else {
      output = `Command not found: ${mainCommand}. Type 'help' to see available commands.`
    }

    const newHistory = [...history, { command: cmd, output }]
    setHistory(newHistory)
    setTypingIndex(newHistory.length - 1)
    setCurrentOutput("")
    setIsTyping(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    handleCommand(input)
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      navigateHistory(-1)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      navigateHistory(1)
    } else if (e.key === "Tab") {
      e.preventDefault()
      autocompleteCommand()
    }
  }

  const navigateHistory = (direction: number) => {
    const commandsOnly = history.filter((item) => item.command).map((item) => item.command)

    if (commandsOnly.length === 0) return

    let newIndex = historyIndex + direction

    if (newIndex < -1) newIndex = -1
    if (newIndex >= commandsOnly.length) newIndex = commandsOnly.length - 1

    setHistoryIndex(newIndex)

    if (newIndex === -1) {
      setInput("")
    } else {
      setInput(commandsOnly[commandsOnly.length - 1 - newIndex])
    }
  }

  const autocompleteCommand = () => {
    if (!input) return

    const availableCommands = Object.keys(commands)
    const matchingCommands = availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()))

    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0])
    }
  }

  // Typing effect for command output
  useEffect(() => {
    if (typingIndex >= 0 && isTyping) {
      const output = history[typingIndex].output
      if (currentOutput.length < output.length) {
        const timer = setTimeout(() => {
          setCurrentOutput(output.substring(0, currentOutput.length + 1))
        }, 5)
        return () => clearTimeout(timer)
      } else {
        setIsTyping(false)
      }
    }
  }, [currentOutput, history, typingIndex, isTyping])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, currentOutput])

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Add click event listener to focus input when terminal is clicked
    const handleTerminalClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    const terminal = terminalRef.current
    if (terminal) {
      terminal.addEventListener("click", handleTerminalClick)
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener("click", handleTerminalClick)
      }
    }
  }, [])

  return (
    <div className="bg-neutral-950 text-indigo-400 font-mono rounded-lg overflow-hidden border border-neutral-800 shadow-xl transition-all duration-300 hover:shadow-indigo-900/10 hover:border-indigo-900/50">
      <div className="flex items-center justify-between bg-neutral-900 p-2 border-b border-neutral-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center text-xs text-neutral-400">
          <TerminalIcon className="h-3 w-3 mr-1.5" />
          <span className="hidden sm:inline">researcher@terminal</span>
          <span className="sm:hidden">terminal</span>
        </div>
        <div className="text-xs text-neutral-600 bg-neutral-800 px-1.5 py-0.5 rounded">xsh</div>
      </div>

      <div
        ref={terminalRef}
        className="overflow-y-auto py-3 px-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900"
        style={{ height: isMobile ? "350px" : "400px" }}
      >
        {history.map((item, i) => (
          <div key={i} className={`mb-3 ${i === history.length - 1 && !item.command ? "animate-pulse" : ""}`}>
            {item.command && (
              <div className="flex items-center text-sm sm:text-base">
                <span className="text-indigo-400 flex items-center">
                  <span className="text-neutral-600 mr-1">$</span>
                  <ChevronRight className="h-3 w-3 mr-1" />
                </span>
                <span className="ml-1 text-neutral-300">{item.command}</span>
              </div>
            )}
            <div className="whitespace-pre-line pl-5 text-sm sm:text-base text-neutral-300 mt-1">
              {i === typingIndex && isTyping ? currentOutput : item.output}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center border-t border-neutral-800 p-3">
        <span className="text-indigo-400 flex items-center text-sm sm:text-base">
          <span className="text-neutral-600 mr-1">$</span>
          <ChevronRight className="h-3 w-3 mr-1" />
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-neutral-300 text-sm sm:text-base ml-1 focus:ring-0"
          autoFocus
          aria-label="Terminal input"
        />
      </form>
    </div>
  )
}
