import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Navigation } from "@/components/navigation"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Lower Zambezi Tourism Association",
  description:
    "Discover the untamed luxury of the Lower Zambezi - Experience world-class safaris and tiger fishing in one of Africa's last great wildernesses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-background text-foreground nature-texture">
        <Navigation />
        {children}
      </body>
    </html>
  )
}



import './globals.css'