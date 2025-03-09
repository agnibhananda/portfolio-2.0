import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Agnibha Nanda - Portfolio",
  description: "Computer Science Student",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#4A9396",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="preload" as="image" href="/profile.jpg" />
      </head>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}

