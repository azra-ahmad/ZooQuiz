"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { HeroTitle } from "@/components/zooquiz/hero-title"
import { BookSpread } from "@/components/zooquiz/book-spread"
import { BottomNav } from "@/components/zooquiz/bottom-nav"
import { ZooQuizSkeleton } from "@/components/zooquiz/quiz-card-skeleton"

export default function Page() {
  const [loading, setLoading] = useState(true)

  // Simulate fetching data on first load — toggle off after a moment
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-jungle-deep text-foreground">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-jungle.jpg)" }}
      />
      {/* Dark vignette overlay so foreground reads well */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,30,25,0.25)_0%,_rgba(8,20,18,0.7)_70%,_rgba(5,15,12,0.92)_100%)]"
      />

      {/* Decorative fireflies */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          { top: "18%", left: "12%", size: 6, delay: "0s" },
          { top: "32%", left: "78%", size: 4, delay: "1s" },
          { top: "55%", left: "8%", size: 5, delay: "2s" },
          { top: "70%", left: "88%", size: 6, delay: "0.5s" },
          { top: "14%", left: "44%", size: 3, delay: "1.5s" },
          { top: "60%", left: "30%", size: 4, delay: "2.5s" },
        ].map((f, i) => (
          <span
            key={i}
            className="firefly absolute rounded-full bg-jungle-glow"
            style={{
              top: f.top,
              left: f.left,
              width: f.size,
              height: f.size,
              boxShadow: "0 0 12px 2px rgba(255, 210, 90, 0.85)",
              animationDelay: f.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <section className="relative flex-1 px-4 pb-6 pt-0 md:px-8 md:pt-2 lg:px-10">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <ZooQuizSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 md:gap-8"
              >
                <HeroTitle />
                <BookSpread />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {!loading && <BottomNav />}
      </div>
    </main>
  )
}
