# Backend setup

Simple Node.js + Express + MySQL backend for database `angular_1` (user `root`, password `12345678`).

## Install

1. In this folder run:
   - `npm install`
2. Start dev:
   - `npm run dev`

## Endpoints

- `GET /health` – ping database.
- `GET /api/users` – list users (expects table `users` with columns `id`, `name`, `email`).
- `POST /api/users` – create user with JSON body `{ "name": "...", "email": "..." }`.

## Notes

- Connection details are set in `src/db.js`. Change if your MySQL settings differ.
- Server listens on `PORT` env or `3000` by default.
