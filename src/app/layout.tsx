"use client"
import { Inter } from "next/font/google"
import "./globals.css"
import FrontendTracer from "@/FrontendTracer"

const inter = Inter({ subsets: ["latin"] })

if (typeof window !== "undefined") {
  FrontendTracer()
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
