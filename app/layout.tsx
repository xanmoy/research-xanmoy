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
  metadataBase: new URL("https://xanmoy.in"), 

  openGraph: {
    title: "Tanmoy Ganguly | Computer Engineer & System Researcher",
    description: "Exploring the frontiers of computing, algorithms, and artificial intelligence",
    url: "https://xanmoy.in",
    siteName: "Tanmoy Ganguly",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Tanmoy Ganguly - OG Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tanmoy Ganguly | Computer Engineer & Full Stack Developer",
    description: "Exploring the frontiers of computing, algorithms, and artificial intelligence",
    images: ["/og-image.png"], 
    creator: "@xanmoy",
  },
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tanmoy Ganguly",
              "url": "https://xanmoy.in",
              "sameAs": [
                "https://github.com/xanmoy",
                "https://twitter.com/xanmoy",
                "https://www.linkedin.com/in/xanmoy"
              ],
              "jobTitle": "Computer Engineer & Full Stack Developer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "West Bengal University of Technology"
              }
            })
          }}
        />

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


