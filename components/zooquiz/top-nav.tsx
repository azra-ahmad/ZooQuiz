"use client"

import { motion } from "framer-motion"
import { Trophy, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { label: "Peringkat", icon: Trophy },
  { label: "Pengaturan", icon: Settings },
  { label: "Profil", icon: User },
]

export function TopNav() {
  return (
    <header className="relative z-20 flex w-full items-center justify-between gap-4 px-6 py-5 md:px-10 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-3xl font-bold tracking-tight text-orange-bright drop-shadow-[0_2px_0_rgba(0,0,0,0.35)] md:text-4xl"
      >
        ZooQuiz
      </motion.div>

      <nav aria-label="Menu utama" className="flex items-center gap-2 md:gap-3">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.label}
              type="button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full border border-white/15 bg-jungle-deep/60 px-3 py-2 text-sm font-semibold text-foreground/90 backdrop-blur-md",
                "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.6)] transition-colors",
                "hover:border-white/30 hover:bg-jungle-deep/80",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-bright focus-visible:ring-offset-2 focus-visible:ring-offset-jungle-deep",
                "md:px-5 md:py-2.5 md:text-base",
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sr-only sm:hidden">{item.label}</span>
            </motion.button>
          )
        })}
      </nav>
    </header>
  )
}
