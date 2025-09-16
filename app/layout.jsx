import { Poppins, Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata = {
  title: "Asmith Mahendrakar - AI & Full-Stack Developer",
  description:
    "Passionate about leveraging technology to create intuitive, intelligent, and impactful solutions. Available for freelance & internships.",
  generator: "v0.app",
  keywords: ["AI developer", "full-stack", "ClauseIQ", "freelance", "React", "FastAPI"],
  authors: [{ name: "Asmith Mahendrakar" }],
  openGraph: {
    title: "Asmith Mahendrakar - AI & Full-Stack Developer",
    description:
      "Passionate about leveraging technology to create intuitive, intelligent, and impactful solutions. Available for freelance & internships.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
