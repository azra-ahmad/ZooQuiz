# ZooQuiz

An animal-themed quiz web project with a jungle-inspired interface, animated transitions, and a book-style landing experience.

Built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion**.

## Interface highlights

- Jungle backdrop with decorative fireflies.
- Animated transition from the initial skeleton to the main page.
- A book-spread component as the central landing interaction.
- Reusable UI components built with shadcn/ui and Radix UI.

The initial skeleton is a timed presentation transition, not a live data-loading indicator.

## Run locally

Use a Node.js version supported by the Next.js 16 release pinned in `package.json`. This repository includes `pnpm-lock.yaml`, so use pnpm to keep dependency resolution consistent.

```sh
git clone https://github.com/azra-ahmad/ZooQuiz.git
cd ZooQuiz
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run the configured ESLint command |

## Project map

| Path | Purpose |
|---|---|
| `app/page.tsx` | Landing page and initial transition |
| `app/layout.tsx` | Shared layout and metadata |
| `components/zooquiz/` | Quiz-themed interface components |
| `components/ui/` | Reusable UI primitives |
| `public/` | Images and other static assets |

## Technologies

Next.js · React · TypeScript · Tailwind CSS · Framer Motion · shadcn/ui · Radix UI · Lucide
