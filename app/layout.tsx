import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import './globals.css'
import Xsh from "@/components/xsh"
import XanBot  from "@/components/xanBot"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanmoy Ganguly | Computer Engineer & System Researcher",
  description: "Exploring the frontiers of computing, algorithms, and artificial intelligence",
  
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
          <Xsh />
          <XanBot />
        </ThemeProvider>
      </body>
    </html>
  )
}


