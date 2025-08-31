**Read in another language: [Українська](README.ukr.md), [English](README.md).**

# NextLevel Food App

---

[![NextLevel Food](https://i.gyazo.com/862ec76025b2de049fd37d5c98ccd97d.gif)](https://gyazo.com/862ec76025b2de049fd37d5c98ccd97d)

---

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](#)
[![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

This is the NextLevel Food Next.js, React, TypeScript app

This basic application demonstrates a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes and to connect with other food lovers.

The app in this repo is hosted on [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#), hosting public URL: [https://nextlevel-food-amber.vercel.app/](https://nextlevel-food-amber.vercel.app/)

But you can use this app manually on your local machine

## Used dependencies:

- **Next.js** - React framework for building fast, full-stack web applications with server-side rendering and static site generation
- **React** - Library used for building user interfaces, particularly for single-page applications where you need a fast, interactive experience
- **Prisma** – A modern ORM that streamlines database access by providing a type-safe, auto-generated query builder and intuitive API for working with relational databases efficiently and reliably
- **TypeScript** – Static typing for safer and more maintainable code
- **AWS S3** - Scalable object storage service used for storing and serving image assets in the application
- **slugify** – Utility to convert strings into URL-friendly slugs
- **xss** – Library for sanitizing user input to prevent cross-site scripting (XSS) attacks
- **Tailwind CSS** – Utility-first CSS framework for fast and responsive UI styling

The full list of dependencies can be found in the **package.json** file.

---

## Next.js Features Used:

- **Server Components** – Enable rendering parts of the UI on the server with full access to backend resources, improving performance and security
- **App Router** – File-based routing with support for layouts, nested routes, loading/error states, and route-specific metadata
- **Server-Side Rendering (SSR)** – Render pages on each request, great for dynamic content and SEO
- **Static Site Generation (SSG)** – Pre-render pages at build time for fast performance and easy CDN caching
- **Client Components** – Standard React components rendered in the browser; useful for interactive UI
- **Image Optimization** – Built-in support for automatic image resizing, lazy loading, and CDN optimization using the **next/image** component
- **Dynamic Routing** – Create dynamic pages with URL parameters using file and folder naming conventions
- **Metadata and SEO** – Add page-level metadata (static or dynamic) for SEO and social media previews
- **Streaming and Suspense** – Native support for React Suspense, allowing streaming of UI segments
- **Built-in CSS and Sass Support** – Style components using modular or global styles, with automatic scoping
- **revalidatePath** – Enables on-demand cache invalidation for specific routes or paths, ensuring users see updated content without rebuilding the entire app
- **Server Actions** – Allow you to run server-side logic (like form handling, database updates, or API calls) directly from client components without needing a separate API route
- **useFormState** – Manages and updates form state when using server actions, enabling cleaner and more reactive UI handling
- **useFormStatus** – Provides the current status of a form submission (e.g., pending), useful for disabling buttons or showing loading indicators
- **Link** – Client-side navigation component for seamless and fast route changes without full page reloads
- **Image** – Optimized image component that automatically handles resizing, lazy loading, and format selection for better performance
- **redirect** – Utility to programmatically redirect users to different routes, commonly used after form submissions or for access control
- **usePathname** – A React hook that returns the current URL pathname, useful for conditionally rendering UI based on the active route

---

## React Features Used:

- **Components** - Building blocks of React applications, reusable and encapsulated UI pieces
- **useState, useEffect** - Core hooks for managing state and component lifecycle
- **Props** - Mechanism to pass data and event handlers from parent to child components
- **Rendering Lists** - Dynamically displaying multiple elements by iterating over arrays
- **Conditional Rendering** - Displaying different UI elements based on application state, props or conditions
- **useRef** - Stores a reference to a DOM element or a value without causing re-renders
- **Suspense** - Displays a fallback (like a loader) while lazy-loaded components are being fetched

## Contents

- [Installation](#installation)
- [Usage](#usage)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/labattaria/nextlevel-food.git
```

2. Install project dependencies:

```shell
cd nextlevel-food
npm install
```

### Usage

Start the next-dev-server using the following command:

```shell
npm run dev
```

Server will be located at **http://localhost:3000/**
