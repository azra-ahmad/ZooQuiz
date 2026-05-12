"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const items = [
  { label: "Tentang", icon: Shield },
]

export function BottomNav() {
  const router = useRouter()

  return (
    <nav
      aria-label="Menu sekunder"
      className="relative z-20 mx-auto mt-8 flex w-full max-w-2xl items-center justify-center gap-3 px-4 pb-8 md:gap-4"
    >
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <motion.button
            key={item.label}
            type="button"
            onClick={() => router.push("/tentang")}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-jungle-deep/60 px-4 py-3 text-sm font-semibold text-foreground/95 backdrop-blur-md md:text-base",
              "shadow-[0_8px_22px_-8px_rgba(0,0,0,0.6)] transition-colors",
              "hover:border-white/40 hover:bg-jungle-deep/80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-bright focus-visible:ring-offset-2 focus-visible:ring-offset-jungle-deep",
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{item.label}</span>
          </motion.button>
        )
      })}
    </nav>
  )
}
