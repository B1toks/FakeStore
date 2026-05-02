# FakeStore

A small **Next.js 15 + Redux Toolkit** demo store consuming the public [FakeStore API](https://fakestoreapi.com).

🛒 **Live demo:** _coming soon (Vercel deploy in progress)_

> Originally built as a CRA exercise series (`ex4 → ex7 → +visual v0.9`, see commit history), then fully migrated to Next.js 15 + React 19 with the App Router. The exercise commits are preserved on `master` so the evolution stays visible.

---

## Features

- Two routes via the App Router: **`/` (catalog)** and **`/cart`**
- Live product grid pulled from `https://fakestoreapi.com/products`
- Optimised remote images via `next/image` (`fakestoreapi.com` whitelisted in `next.config.mjs`)
- Add-to-cart with quantity tracking and total via Redux Toolkit
- Cart contents **persist across reloads** (`localStorage`, SSR-safe)
- "✓ Куплено!" feedback button state with auto-revert after 2 s
- Live clock in the header (hydration-safe — no SSR/CSR mismatch)
- Custom 404 (`app/not-found.js`) and Suspense fallback (`app/loading.js`)
- Per-route `metadata` exports for SEO

## Tech stack

| Layer        | Choice                                  | Notes                                                 |
| ------------ | --------------------------------------- | ----------------------------------------------------- |
| Framework    | **Next.js 15** (App Router) + React 19  | Server Components by default; `"use client"` minimal  |
| State        | **Redux Toolkit** + `react-redux`       | Modern `useSelector` / `useDispatch` (no `connect()`) |
| Persistence  | `localStorage`                          | Wrapped with `typeof window` guards for SSR safety    |
| Images       | `next/image`                            | `remotePatterns` whitelisting `fakestoreapi.com/img`  |
| Routing      | `next/link`                             | Client-side navigation in SideBar / Logo / Footer     |
| Typography   | `next/font/google` (Geist)              | Self-hosted, no extra request                         |
| Styling      | Hand-written CSS, per-component files   | No framework, no CSS-in-JS                            |
| Data source  | [FakeStore API](https://fakestoreapi.com) | Public REST, no auth                                |

No Tailwind, no UI kit, no test framework — by design, this is a small demo.

## Run locally

```bash
git clone https://github.com/B1toks/FakeStore.git
cd FakeStore
npm install
npm run dev
```

Then open <http://localhost:3000>.

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── layout.js          ← root layout, metadata, Geist font, full layout
│   ├── page.js            ← / (catalog)
│   ├── cart/page.js       ← /cart
│   ├── providers.js       ← "use client" — Redux Provider wrapper
│   ├── loading.js         ← Suspense fallback
│   ├── not-found.js       ← custom 404
│   └── global.css
├── components/
│   ├── ProductCatalog.js  ← "use client" — fetch + grid + Product cards
│   ├── Cart.js            ← "use client" — items, quantities, total
│   ├── Header / Footer / SideBar / Logo / Menu / MenuItem (RSC)
│   ├── DateTime / CurrentDate / CurrentTime  (live clock, mounted-state)
│   └── css/               ← per-component styles
└── store/
    ├── store.js           ← configureStore + SSR-safe localStorage
    ├── cartSlice.js       ← addToCart / removeFromCart / clearCart
    └── productsSlice.js   ← setProducts
```

## What I focused on

This project was my first time:

- **Wiring Redux Toolkit into a real React app** — slices, selectors, hook-based usage, dropping the deprecated `connect()` HOC
- **Migrating an existing app between bundlers** — moving from CRA to Next.js's App Router, including:
  - Splitting components into Server vs Client (sane defaults — most stay RSC, `"use client"` only where state/effects exist)
  - Wrapping client-only code (Redux Provider, `localStorage`) so it doesn't crash during SSR
  - Hydration-safe live clock (no console warnings, no flash)
  - Configuring `next/image` `remotePatterns` for an external API
- **Persisting client state without a backend** — `localStorage` cart that survives reloads
- **Cleaning up exercise-grade code** — removing CRA boilerplate, dead modules, mismatched CSS classes, unused scaffolds

---

Built by **Oleksandr Honchar** — [www.honchar.dev](https://www.honchar.dev) · [GitHub](https://github.com/B1toks)
