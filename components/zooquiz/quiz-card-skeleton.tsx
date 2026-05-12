import { cn } from "@/lib/utils"

export function QuizCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      role="status"
      aria-label="Memuat kartu kuis"
      className={cn(
        "relative flex flex-col items-center px-6 py-8 text-center",
        "rounded-2xl",
        "bg-[radial-gradient(ellipse_at_top,_var(--parchment)_0%,_var(--parchment-edge)_100%)]",
        "ring-1 ring-inset ring-[color:var(--parchment-edge)]",
        "shadow-[inset_0_0_60px_rgba(120,75,30,0.12)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-xl border border-dashed border-[color:var(--parchment-edge)]/70"
      />

      {/* Icon medallion placeholder */}
      <div className="relative z-10 mb-4 h-16 w-16 animate-pulse rounded-2xl bg-[color:var(--parchment-edge)]/70" />

      {/* Title placeholder */}
      <div className="h-8 w-48 animate-pulse rounded-md bg-[color:var(--parchment-edge)]/70 md:h-9" />

      {/* Description placeholder */}
      <div className="mt-3 h-4 w-56 animate-pulse rounded-md bg-[color:var(--parchment-edge)]/50" />

      {/* Button placeholder */}
      <div className="relative z-10 mt-5 h-12 w-44 animate-pulse rounded-full bg-[color:var(--parchment-edge)]/80" />

      <span className="sr-only">Memuat...</span>
    </div>
  )
}

export function ZooQuizSkeleton() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-5xl px-4 md:px-8">
      {/* Title skeleton */}
      <div className="mx-auto mb-8 flex flex-col items-center gap-3">
        <div className="h-14 w-64 animate-pulse rounded-2xl bg-white/10 md:h-20 md:w-96" />
        <div className="h-5 w-72 animate-pulse rounded-md bg-white/10" />
      </div>

      {/* Book skeleton */}
      <div
        className={cn(
          "relative grid grid-cols-1 gap-6 rounded-3xl p-6 md:grid-cols-2 md:gap-8 md:p-8",
          "bg-[radial-gradient(ellipse_at_center,_var(--parchment)_0%,_var(--parchment-edge)_100%)]",
          "ring-1 ring-[color:var(--parchment-edge)]",
          "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]",
        )}
      >
        {/* Spine */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-[color:var(--parchment-edge)] md:block"
        />
        <QuizCardSkeleton />
        <QuizCardSkeleton />
      </div>
    </div>
  )
}
