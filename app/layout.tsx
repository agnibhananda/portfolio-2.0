import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Agnibha Nanda - Portfolio",
  description: "Computer Science Student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} font-serif bg-cream`}>{children}</body>
    </html>
  )
}

