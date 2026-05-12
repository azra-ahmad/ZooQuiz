"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeroTitle() {
  return (
    <div className="relative z-10 mx-auto flex flex-col items-center text-center">
      {/* Sparkle decorations beside title */}
      <Sparkles
        aria-hidden="true"
        className="firefly pointer-events-none absolute left-[-10%] top-8 h-5 w-5 text-jungle-glow drop-shadow-[0_0_10px_rgba(255,210,90,0.9)] md:left-[-12%] md:top-10 md:h-7 md:w-7"
      />
      <Sparkles
        aria-hidden="true"
        className="firefly pointer-events-none absolute right-[-10%] top-8 h-5 w-5 text-jungle-glow drop-shadow-[0_0_10px_rgba(255,210,90,0.9)] md:right-[-12%] md:top-10 md:h-7 md:w-7"
        style={{ animationDelay: "0.9s" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-6xl font-bold leading-none tracking-tight text-orange-bright md:text-8xl"
        style={{
          textShadow:
            "0 2px 0 #5a2a0a, 0 4px 0 #5a2a0a, 0 6px 0 rgba(0,0,0,0.4), 0 10px 24px rgba(0,0,0,0.5)",
        }}
      >
        ZooQuiz
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className="mt-2 font-display text-base font-semibold text-foreground/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] md:text-xl"
      >
        Belajar satwa dengan cara seru!
      </motion.p>
    </div>
  )
}
