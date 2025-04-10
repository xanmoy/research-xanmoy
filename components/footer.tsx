import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">CS Research</h3>
            <p className="max-w-md">
              Exploring the frontiers of computing, algorithms, and artificial intelligence through rigorous research
              and innovative applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="hover:text-indigo-500 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terminal" className="hover:text-indigo-500 transition-colors">
                  Terminal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/xanmoy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/xanmoy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/xanmoy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Xanmoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
