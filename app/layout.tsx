import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import ThemeRegistry from "./theme-registry"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono", 
})

export const metadata: Metadata = {
  title: "Endo Política",
  description: "Endometriose é política!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}

