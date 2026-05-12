import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tentang Kami | ZooQuiz",
  description: "Halaman tentang kami ZooQuiz.",
}

export default function TentangPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 text-foreground md:px-8 md:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-jungle.jpg)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,30,25,0.2)_0%,_rgba(8,20,18,0.72)_70%,_rgba(5,15,12,0.92)_100%)]"
      />

      <section className="relative z-10 mx-auto w-full max-w-3xl rounded-3xl border border-white/15 bg-jungle-deep/55 p-6 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.75)] backdrop-blur-md md:p-10">
        <h1 className="font-display text-4xl font-bold text-orange-bright md:text-5xl">Tentang Kami</h1>
        <p className="mt-3 text-base text-foreground/90 md:text-lg">
          Ini adalah halaman About Us sederhana untuk ZooQuiz.
        </p>

        <div className="mt-8 space-y-5 text-foreground/90">
          <p>
            ZooQuiz dibuat untuk membantu anak-anak belajar mengenal satwa dengan cara yang menyenangkan, interaktif,
            dan ramah usia.
          </p>
          <p>
            Blablablabla.
          </p>
          <p>
            Anggota Kelompok: Azra, Favor, Maulana, Rafi Aditya, Rakha Albaihaqi, Safrudin, Zain, Zidan.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-orange-bright px-6 py-3 font-display text-lg font-semibold text-white shadow-[0_8px_18px_-8px_rgba(0,0,0,0.55)] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-bright focus-visible:ring-offset-2 focus-visible:ring-offset-jungle-deep"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>

    </main>
  )
}
