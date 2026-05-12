"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Mascots() {
  return (
    <>
      {/* Elephant - bottom right, highest z-index */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-3 right-0 z-50 w-72 md:block lg:bottom-8 lg:right-8 lg:w-[26rem]"
        aria-hidden="true"
      >
        <Image
          src="/elephant-hi.png"
          alt=""
          width={600}
          height={600}
          className="h-auto w-full drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)]"
        />
      </motion.div>
    </>
  )
}
