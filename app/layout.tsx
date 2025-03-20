import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono, Space_Grotesk } from "next/font/google"
import ThemeRegistry from "./theme-registry"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono", 
})
const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Endo Política",
  description: "Endometriose é política!",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#d580ff",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="msapplication-TileColor" content="#d580ff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${spaceMono.variable} ${spaceGrotesk.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}

