import Link from "next/link"
import { ImageIcon, AudioLines, ArrowLeft, Heart, Timer, Trophy, Volume2, CheckCircle2 } from "lucide-react"

type GameplayPageProps = {
  searchParams: Promise<{
    mode?: string
  }>
}

const modeConfig = {
  image: {
    title: "Tebak Gambar",
    description: "Perhatikan gambar satwa di bawah lalu pilih jawaban yang paling tepat.",
    accent: "text-[#229a63]",
    accentBg: "bg-[#2bb673]",
    ring: "ring-[#1f6d4d]/45",
    button: "bg-[#2bb673] hover:bg-[#249c62]",
    optionRing: "ring-[#1f6d4d]/30",
    progressBg: "bg-[#2bb673]",
    icon: ImageIcon,
    prompt: "Satwa apa yang ada di gambar ini?",
  },
  sound: {
    title: "Tebak Suara",
    description: "Putar suara satwa lalu pilih jawaban yang paling tepat.",
    accent: "text-[#1f9b71]",
    accentBg: "bg-[#24ad7d]",
    ring: "ring-[#1a6c4f]/45",
    button: "bg-[#24ad7d] hover:bg-[#1e9369]",
    optionRing: "ring-[#1a6c4f]/30",
    progressBg: "bg-[#24ad7d]",
    icon: AudioLines,
    prompt: "Suara satwa apa yang sedang diputar?",
  },
} as const

const options = ["Singa", "Gajah", "Jerapah", "Kuda Nil"]

export default async function GameplayPage({ searchParams }: GameplayPageProps) {
  const params = await searchParams
  const mode = params.mode === "sound" ? "sound" : "image"
  const config = modeConfig[mode]
  const Icon = config.icon

  return (
    <main className="relative min-h-screen overflow-hidden bg-jungle-deep px-4 py-8 text-foreground md:px-8 md:py-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-jungle.jpg)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_rgba(185,235,190,0.18)_45%,_rgba(16,75,54,0.34)_100%)]"
      />

      <section className="relative z-10 mx-auto w-full max-w-6xl rounded-3xl border border-emerald-900/20 bg-[#eefbe9]/90 p-4 text-ink shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <span className="rounded-full border border-emerald-900/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Mode {mode === "image" ? "Gambar" : "Suara"}
          </span>
        </div>

        <div className="mt-5 flex flex-col items-center text-center">
          <div className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-4 ${config.ring}`}>
            <Icon className={`h-7 w-7 ${config.accent}`} />
          </div>
          <h1 className="font-display text-3xl font-bold text-[#1f8f5b] md:text-5xl">Gameplay {config.title}</h1>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-ink-soft md:text-base">{config.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-emerald-900/15 bg-emerald-100/55 p-4 md:grid-cols-4">
          <div className="rounded-xl border border-emerald-900/15 bg-white/85 px-3 py-2">
            <p className="text-[11px] uppercase tracking-wide text-ink-soft">Level</p>
            <p className="mt-1 font-display text-xl text-ink">1</p>
          </div>
          <div className="rounded-xl border border-emerald-900/15 bg-white/85 px-3 py-2">
            <p className="text-[11px] uppercase tracking-wide text-ink-soft">Skor</p>
            <p className="mt-1 flex items-center gap-1 font-display text-xl text-ink">
              <Trophy className="h-4 w-4 text-jungle-glow" />
              120
            </p>
          </div>
          <div className="rounded-xl border border-emerald-900/15 bg-white/85 px-3 py-2">
            <p className="text-[11px] uppercase tracking-wide text-ink-soft">Nyawa</p>
            <p className="mt-1 flex items-center gap-1 font-display text-xl text-ink">
              <Heart className="h-4 w-4 text-red-300" />
              3/3
            </p>
          </div>
          <div className="rounded-xl border border-emerald-900/15 bg-white/85 px-3 py-2">
            <p className="text-[11px] uppercase tracking-wide text-ink-soft">Waktu</p>
            <p className="mt-1 flex items-center gap-1 font-display text-xl text-ink">
              <Timer className="h-4 w-4 text-sky-300" />
              20s
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-full border border-emerald-900/15 bg-emerald-100/65 p-2">
          <div className="mb-1 flex items-center justify-between px-2 text-[11px] font-semibold text-ink-soft">
            <span>Progress Soal</span>
            <span>3 / 10</span>
          </div>
          <div className="h-2 rounded-full bg-white/70">
            <div className={`h-full w-[30%] rounded-full ${config.progressBg}`} />
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-emerald-900/15 bg-white/72 p-4 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Pertanyaan #03</p>
            <h2 className="mt-2 font-display text-2xl text-ink md:text-3xl">{config.prompt}</h2>

            {mode === "image" ? (
              <div className="mx-auto mt-5 flex aspect-[16/9] w-full max-w-[520px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-900/25 bg-white/80 px-4 text-center">
                <ImageIcon className="h-10 w-10 text-emerald-700/70" />
                <p className="mt-3 text-sm font-semibold text-ink-soft">Placeholder gambar satwa</p>
                <p className="mt-1 text-xs text-ink-soft/80">Nanti isi dengan gambar pertanyaan</p>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-emerald-900/15 bg-white/75 p-6 text-center">
                <button
                  type="button"
                  className={`inline-flex h-20 w-20 items-center justify-center rounded-full text-white shadow-[0_12px_28px_-12px_rgba(0,0,0,0.7)] ${config.accentBg}`}
                >
                  <Volume2 className="h-9 w-9" />
                </button>
                <p className="mt-4 text-sm font-semibold text-ink-soft">Ketuk untuk memutar suara satwa</p>
              </div>
            )}

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {options.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  className={`inline-flex items-center justify-between rounded-2xl border border-emerald-900/15 bg-white/90 px-4 py-3 text-left font-semibold text-ink transition-all hover:scale-[1.01] hover:bg-white ${idx === 1 ? `ring-2 ${config.optionRing}` : ""}`}
                >
                  <span>{label}</span>
                  {idx === 1 ? <CheckCircle2 className={`h-5 w-5 ${config.accent}`} /> : <span className="text-ink-soft">○</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-emerald-900/15 bg-white/72 p-5">
              <h3 className="font-display text-xl text-ink">Status Sesi</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-xl border border-emerald-900/15 bg-white/90 px-3 py-2">
                  <span className="text-ink-soft">Jawaban Benar</span>
                  <span className="font-bold text-jungle-glow">2</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-emerald-900/15 bg-white/90 px-3 py-2">
                  <span className="text-ink-soft">Jawaban Salah</span>
                  <span className="font-bold text-red-300">1</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-emerald-900/15 bg-white/90 px-3 py-2">
                  <span className="text-ink-soft">Streak</span>
                  <span className="font-bold text-amber-300">x2</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-900/15 bg-white/72 p-5">
              <h3 className="font-display text-xl text-ink">Aksi</h3>
              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center rounded-full px-5 py-3 font-display text-lg font-semibold text-white ring-4 transition-colors shadow-[0_8px_0_rgba(0,0,0,0.18),0_12px_18px_-6px_rgba(0,0,0,0.35)] ${config.button} ${config.ring}`}
                >
                  Jawab & Lanjut
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-900/15 bg-white/90 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  Lewati Soal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
