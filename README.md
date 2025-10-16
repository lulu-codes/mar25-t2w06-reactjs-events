# Pokemon Searcher (React Router Project)

A simple React app that lets users explore Pokémon data across multiple pages.

Built for Week 6 – ReactJS Events & Routing (Coder Academy).

## Features

- Multiple page routing with React Router
- Active navigation using <NavLink> styling
- _redirects file for Netlify redirect
- Simple component structure (Homepage, Search, About, Contact)

## Pages

<!-- - Home page: `somewebsite.com`
- Searcher page: `somewebsite.com/search`
- About page: `somewebsite.com/about`
- Contact page `somewebsite.com/about/contact` -->

| Page         | Route            | Description              |
| ------------ | ---------------- | ------------------------ |
| **Home**     | `/`              | Overview of the project  |
| **Searcher** | `/search`        | Pokemon search page      |
| **About**    | `/about`         | Info about the app       |
| **Contact**  | `/about/contact` | Contact page        |

## Live Site

Deployed on Netlify:

https://pokemon-searcher-react.netlify.app

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tech Stack

- React
- React Router
- Vite
- Node
- Netlify Hosting

## How to run locally

```bash
git clone https://github.com/lulu-codes/mar25-t2w06-reactjs-events.git
cd mar25-t2w06-reactjs-events
npm install
npm run dev
```
