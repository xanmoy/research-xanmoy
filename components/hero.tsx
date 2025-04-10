"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Terminal } from "@/components/terminal" // your Terminal component path
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"


export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-6 text-white text-center ">
            <div className="md:gap-4 flex flex-col items-center mb-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
                    Hi, I’m <span className="text-indigo-500">Tanmoy</span>
                </h1>
                <h2 className="text-xl md:text-3xl font-medium text-neutral-300 mb-6 max-w-5xl">
                    A computer engineer and systems researcher focused on intelligent systems, algorithms, and real-world problem solving.
                </h2>
                <p className="text-base md:text-xl text-neutral-400 max-w-6xl md:max-w-6xl lg:max-w-6xl xl:max-w-5xl mb-10">

                    Passionate about pushing the boundaries of technology through research in artificial intelligence, software architecture, and computational theory.
                </p>
           </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <Button
                    asChild
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-sm md:text-base shadow-md w-48 md:w-56"
                >
                    <Link href="/research" className="flex items-center justify-center">
                        Explore My Research
                        <ArrowRight className=" h-4 w-4" />
                    </Link>
                </Button>


                <Button
                    asChild
                    variant="outline"
                    className="border-indigo-600 text-indigo-400 hover:bg-indigo-950 px-6 py-2 text-sm md:text-base group"
                >
                    <Link href="/terminal" className="flex items-center">
                        Launch Terminal
                        <TerminalIcon className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                    </Link>
                </Button>



            </div>
        </section>

    )
}
