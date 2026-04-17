# Tasty-Kisso Lassi Website

Official web experience for the **Tasty-Kisso Lassi** brand. This project introduces the brand online, captures distributor enquiries, and supports rapid product/business iteration for the team.

> ⚡ **Project status:** This project is currently under **rapid development**.

## About the Brand

**Tasty-Kisso Lassi** is the core brand showcased by this website. The site is designed to build awareness and expand distribution reach.

At this stage, the full e-commerce operations for the Tasty-Kisso brand are managed through the **Odoo platform**, while this website focuses on brand presence and distributor engagement.

## Current Pages

The currently available pages include:

- **Landing Page** (`/`) – main brand-facing homepage.
- **Distributor Page** (`/distributor`) – distributor registration/enquiry flow.
- **Admin Distributor Page** (`/admin/distributor`) – distributor lead management view.

## Technologies Used

### Core Framework

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**

### Styling & UI

- **Tailwind CSS 4**
- **shadcn/ui** + **Radix UI**
- **Lucide React** icons
- **Embla Carousel** (autoplay + fade plugins)
- Utility libraries: `clsx`, `class-variance-authority`, `tailwind-merge`, `tw-animate-css`

### Forms & Validation

- **React Hook Form**
- **Zod**
- **@hookform/resolvers**

### Database & Backend Integrations

- **Prisma ORM**
- **PostgreSQL** datasource
- **Neon** integration via `@prisma/adapter-neon` and `@neondatabase/serverless`
- **Upstash Redis** + **Upstash Rate Limit**
- **Cloudinary** (asset/media handling)

### Tooling

- **ESLint**
- **PostCSS**
- **ts-node**

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file at project root and add all required keys (database, redis, cloudinary, etc.) according to your setup.

### 3) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

> Note: `npm run build` runs `prisma generate && next build`.

## Deploying to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository.
4. Keep default framework preset as **Next.js**.
5. Add all required **Environment Variables** in Vercel project settings.
6. Deploy.

Vercel will automatically run the build and provide a production URL.

### Option B: Vercel CLI

1. Install CLI:

```bash
npm i -g vercel
```

2. Login and deploy:

```bash
vercel
```

3. For production deployment:

```bash
vercel --prod
```

## Notes

- Ensure all environment variables are configured both locally and in Vercel.
- If Prisma migrations are introduced later, include migration workflow in CI/CD or release process.
