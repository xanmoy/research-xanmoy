"use client";
import React, { useState } from "react";
import { BotMessageSquare } from "lucide-react"
import Link from "next/link";

export default function XanBot() {


    return (
        <>
            {/* Button */}
            <Link
                className="fixed bottom-5 right-5  w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]  shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white/10"
                href="/contact"
            >
               
                <BotMessageSquare className="text-gray-900 dark:text-white" />

            </Link>


        </>
    );
}