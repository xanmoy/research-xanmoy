import { Terminal } from "@/components/terminal"

export default function TerminalPage() {
  return (
    <main className="min-h-screen ">
    {/* <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-black"> */}
      <div className="container py-12 px-4 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Interactive Terminal</h1>
        <p className="text-center mb-8 text-neutral-400 max-w-2xl mx-auto">
          Explore my work and research using this interactive terminal. Try commands like{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded text-xs md:text-sm">help</code>,{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded text-xs md:text-sm">projects</code>, or{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded text-xs md:text-sm">goto blog</code>
        </p>

        <div className="max-w-3xl mx-auto">
          <Terminal />

          <div className="mt-8 bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 text-sm">
            <h3 className="text-white font-medium mb-2 flex items-center">
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
              Terminal Tips
            </h3>
            <ul className="space-y-2 text-neutral-400 list-disc pl-5">
              <li>
                Type <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">help</code> to see all available
                commands
              </li>
              <li>
                Use <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">goto</code> followed by a page name
                to navigate
              </li>
              <li>
                Press <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">↑</kbd> and{" "}
                <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">↓</kbd> to navigate command history
              </li>
              <li>
                Press <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">Tab</kbd> to autocomplete commands
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
