import type { Metadata } from "next"
import { Fredoka, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "ZooQuiz — Belajar satwa dengan cara seru!",
  description:
    "Permainan kuis interaktif untuk anak-anak. Tebak satwa dari gambar atau suaranya dan belajar tentang dunia hewan dengan cara yang menyenangkan.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
