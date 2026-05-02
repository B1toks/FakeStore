# FakeStore

A small e-commerce prototype consuming the public [FakeStoreAPI](https://fakestoreapi.com) — product listing, single-product view, cart with Redux Toolkit state. Migrated from Create React App to **Next.js 15 (App Router)** as a learning exercise.

🛒 **Live demo:** **[fake-store-b1toks.vercel.app](#)** *(replace with your Vercel URL)*

---

## What it does

- Fetches products from `fakestoreapi.com`
- Product grid with category filtering
- Single-product detail page (dynamic route)
- Add-to-cart with quantity controls
- Cart state persists across navigation (Redux Toolkit)

## Tech

- **Next.js 15** + **React 19** — App Router, server components where it makes sense
- **Redux Toolkit** + `react-redux` — predictable state for cart, slice-based architecture
- **FakeStoreAPI** — external REST source for products
- Hand-written CSS / minimal styling

## Run locally

```bash
git clone https://github.com/B1toks/FakeStore.git
cd FakeStore
npm install
npm run dev
```

Open <http://localhost:3000>.

Build for production:

```bash
npm run build
npm run start
```

## What I focused on

This is the project where Redux Toolkit clicked for me — moving cart logic out of component state into a slice with explicit reducers and selectors. The CRA → Next.js migration was my first time switching bundlers/runtimes on an existing app and forced me to think about what's environment-dependent vs. pure logic.

---

Built by **Oleksandr Honchar** · [honchar.dev](https://www.honchar.dev) · [LinkedIn](https://www.linkedin.com/in/honchar-oleksandr/)
