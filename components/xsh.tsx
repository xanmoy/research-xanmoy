"use client";
import React, { useState } from "react";
import { ChevronRight, TerminalIcon } from "lucide-react"
import Link from "next/link";

export default function Xsh() {


    return (
        <>
            {/* Button */}
            <Link
                className="fixed dark:bg-white/10 bottom-20 right-5 bg-background w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
                href="/terminal"
            >
                <TerminalIcon className="text-gray-900 dark:text-white" />
                
            </Link>


        </>
    );
}