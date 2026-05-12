## Cara menjalankan (Windows / PowerShell)

Link Github: https://github.com/azra-ahmad/ZooQuiz

### Prasyarat

- **Node.js**: rekomendasi Node 20+ (atau minimal 18.18+)
- Karena ada `pnpm-lock.yaml`, paling aman pakai **pnpm**

---

### Install dependency

Di root project

```bash
corepack enable
pnpm install
```

> Kalau `corepack` tidak tersedia, install pnpm manual:
> ```bash
> npm i -g pnpm
> pnpm install
> ```

---

### Run mode development

```bash
pnpm dev
```

Lalu buka: [http://localhost:3000](http://localhost:3000)

---

### Build & run production

```bash
pnpm build
pnpm start
```

---

### Lint

```bash
pnpm lint
```

---

## Tech stack

| Kategori | Detail |
|---|---|
| **Framework** | Next.js (`next dev` / `build` / `start` via `package.json`) |
| **UI / Styling** | Tailwind CSS + shadcn/ui (lihat `components.json` dan `components/ui/*`) |
| **Animasi** | Framer Motion |
| **Icon** | `lucide-react` |

---

## Struktur halaman

### `app/page.tsx` — Entry point

- Render landing page bernuansa **"jungle"**
- Ada state loading untuk menampilkan **skeleton** dulu ~1.4s, lalu konten utama
- Konten utama: **Hero** + **2 kartu mode quiz**

### `app/layout.tsx` — Layout global

- Set font Google: **Fredoka**, **Nunito**
- Set metadata
- Inject **Vercel Analytics** saat production