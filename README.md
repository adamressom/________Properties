# ________Properties

A production-ready starter template for real estate teams, property groups, and independent developers. Clone it, swap in your content, and ship a polished property website.

## Tech Stack

Next.js — App router, server components, and API routes

Convex — Real-time backend and database

WorkOS AuthKit — Authentication and session management

TypeScript — End to end type safety

React — Component-driven UI

## Features

Property listings with detail pages

Team profiles

Contact forms and email signup

Saved favorites, per user

Admin-protected lead data

Input validation and rate limiting

Auth-gated routes

Browser security headers

## Getting Started

## Prerequisites

Node.js 18+

A Convex account

A WorkOS account for AuthKit

## Installation

```bash
git clone https://github.com/adamressom/ressomProperties.git
cd ressomProperties
npm install
```

## Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
WORKOS_API_KEY=your_workos_api_key
WORKOS_CLIENT_ID=your_workos_client_id
NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/callback
ADMIN_EMAILS=your_admin_email@example.com
```

## Run Locally

```bash
# Start the Convex dev server
npx convex dev

# In a separate terminal, start Next.js
npm run dev
```

Open `http://localhost:3000` to view the app.

## Customization

Replace placeholder property listings, images, and agent profiles in the `public/` and `app/` directories.

Update the site name, logo, and color scheme in your global styles.

Set `ADMIN_EMAILS` to control who can access protected lead data.

Deploy to Vercel, or any Next.js-compatible host, and point your Convex deployment to production.

## Project Structure

```text
app/          # Next.js pages and API routes
components/   # Shared UI components
convex/       # Backend functions, schema, and queries
lib/          # Utility functions and helpers
public/       # Static assets
```

## Deployment

This project is designed to deploy on Vercel. After connecting your repo, add all environment variables from `.env.local` to your Vercel project settings, then deploy.

For Convex, run `npx convex deploy` to push your backend to production before or alongside your frontend deployment.

---

## Author

Created by [Adam Ressom](https://github.com/adamressom)
