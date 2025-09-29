import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const sfMono = localFont({
  src: [
    {
      path: "../public/fonts/sf-mono-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-mono-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-mono-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-mono-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-mono-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-mono-heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sf-mono",
})

export const metadata: Metadata = {
  title: "Recreations",
  description: "Components from all across the web which I aim to recreate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
