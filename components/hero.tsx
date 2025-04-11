"use client"

import React from "react"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Terminal } from "@/components/terminal"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <motion.section
            className="flex flex-col items-center justify-center py-24 px-6 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="md:gap-4 flex flex-col items-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
                    Hi, I’m <span className="text-indigo-500">Tanmoy</span>
                </h1>
                <h2 className="text-xl md:text-3xl font-medium text-neutral-300 mb-6 max-w-5xl">
                    A computer engineer and systems researcher focused on intelligent systems, algorithms, and real-world problem solving.
                </h2>
                <p className="text-base md:text-xl text-neutral-400 max-w-6xl md:max-w-6xl lg:max-w-5xl xl:max-w-4xl mb-10">
                    Passionate about pushing the boundaries of technology through research in artificial intelligence, software architecture, and computational theory.
                </p>
            </motion.div>

            <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    href="/research"
                    className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
                >
                    Explore My Research
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                    className="group text-indigo-400 dark:hover:bg-indigo-950 px-11 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
                    href="/terminal"
                >
                    Launch Terminal
                    <TerminalIcon className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                </Link>

                <div className="flex gap-2">
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://linkedin.com/in/xanmoy"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/xanmoy"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </motion.section>
    )
}
