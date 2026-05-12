"use client"

import { motion } from "framer-motion"
import { ImageIcon, AudioLines } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

type Variant = "image" | "sound"

interface QuizCardProps {
  variant: Variant
  title: string
  description: string
  buttonLabel: string
  delay?: number
}

const variantStyles: Record<
  Variant,
  {
    iconBg: string
    iconRing: string
    button: string
    buttonRing: string
    iconColor: string
  }
> = {
  image: {
    iconBg: "bg-orange-bright",
    iconRing: "ring-orange-deep/60",
    button: "bg-orange-bright hover:bg-orange-deep",
    buttonRing: "ring-orange-deep/50",
    iconColor: "text-white",
  },
  sound: {
    iconBg: "bg-teal-bright",
    iconRing: "ring-teal-deep/60",
    button: "bg-teal-bright hover:bg-teal-deep",
    buttonRing: "ring-teal-deep/50",
    iconColor: "text-white",
  },
}

export function QuizCard({
  variant,
  title,
  description,
  buttonLabel,
  delay = 0,
}: QuizCardProps) {
  const router = useRouter()
  const styles = variantStyles[variant]
  const Icon = variant === "image" ? ImageIcon : AudioLines

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center px-2 py-2 text-center"
    >
      {/* Icon medallion */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: -2 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "relative z-10 mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-4 ring-offset-2 ring-offset-transparent md:h-16 md:w-16",
          styles.iconBg,
          styles.iconRing,
          "shadow-[0_8px_18px_-6px_rgba(0,0,0,0.35)]",
        )}
      >
        <Icon className={cn("h-8 w-8", styles.iconColor)} aria-hidden="true" />
      </motion.div>

      <h2 className="font-display text-3xl font-bold text-ink drop-shadow-[0_1px_0_rgba(255,255,255,0.6)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-1 text-sm font-semibold text-ink-soft md:text-base">{description}</p>

      {/* Mulai button */}
      <motion.button
        type="button"
        onClick={() => router.push(`/quiz/gameplay?mode=${variant}`)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className={cn(
          "relative z-10 mt-5 inline-flex min-w-40 items-center justify-center rounded-full px-7 py-2.5 font-display text-lg font-semibold text-white md:text-xl",
          styles.button,
          "ring-4",
          styles.buttonRing,
          "shadow-[0_8px_0_rgba(0,0,0,0.18),0_12px_18px_-6px_rgba(0,0,0,0.35)]",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          "transition-colors",
        )}
      >
        {buttonLabel}
      </motion.button>
    </motion.article>
  )
}
