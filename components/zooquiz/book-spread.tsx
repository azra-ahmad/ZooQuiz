"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { QuizCard } from "./quiz-card"

export function BookSpread() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-6xl"
      style={{ perspective: "1200px" }}
    >
      {/* Book with animals image */}
      <div className="relative">
        <Image
          src="/book-and-animals.png"
          alt="Open storybook with parrot and lion"
          width={1920}
          height={1080}
          priority
          className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        />

        {/* Left page - centered content on page */}
        <div className="absolute left-[10%] top-1/2 w-[38%] -translate-y-1/2">
          <QuizCard
            variant="image"
            title="Tebak Gambar"
            description="Tebak satwa dari gambarnya!"
            buttonLabel="Mulai"
            delay={0.35}
          />
        </div>

        {/* Right page - centered content on page */}
        <div className="absolute right-[10%] top-1/2 w-[38%] -translate-y-1/2">
          <QuizCard
            variant="sound"
            title="Tebak Suara"
            description="Tebak satwa dari suaranya!"
            buttonLabel="Mulai"
            delay={0.5}
          />
        </div>

        {/* Elephant anchored to book container so it stays stable on tablet sizes */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-[-10%] right-[0%] z-20 w-[26%] min-w-[120px] max-w-[300px] md:bottom-[-12%] md:right-[1%] md:w-[28%] lg:bottom-[-12%] lg:right-[2%] lg:w-[30%]"
          aria-hidden="true"
        >
          <Image
            src="/elephant-hi.png"
            alt=""
            width={600}
            height={600}
            className="h-auto w-full drop-shadow-[0_14px_20px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
