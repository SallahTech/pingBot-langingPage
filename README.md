# PingBot — API Monitoring in Telegram

Landing page for [PingBot](https://t.me/pingbot_app_bot), a Telegram-first API monitoring service. Get instant alerts when your API goes down — no dashboards, no logins.

## Tech Stack

- **Next.js** (App Router)
- **CSS Modules** for scoped styling
- **Google Fonts** — Sora + JetBrains Mono
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_TELEGRAM_BOT_URL` | Telegram bot link |
| `NEXT_PUBLIC_UPGRADE_URL` | Pro plan checkout link |

## Deployment

Push to GitHub and connect the repo on [Vercel](https://vercel.com). Add the environment variables in your Vercel project settings.
