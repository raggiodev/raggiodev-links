# Raggiodev Ecosystem Lobby (`links.raggiodev.com`)

High-craft, ultra-fast, searchable, and filterable central directory ("Ecosystem Lobby") for all official links, production apps, Blue Team cybersecurity tools, indie games, minor deployments, social channels, and verified certificates created by **Fernando Andres Raggio (`Raggiodev`)** — Full Stack Web Developer (MERN / TypeScript / Python) & Cybersecurity Analyst (Blue Team), undergraduate student in Cyberdefense (*Licenciatura en Ciberdefensa*) at FADENA (UNDEF), Argentina.

- **Production URL**: [https://links.raggiodev.com](https://links.raggiodev.com)
- **Main Official Portfolio**: [https://raggiodev.com](https://raggiodev.com)
- **Official Certificates & Badges**: [https://raggiodev.com/certificates](https://raggiodev.com/certificates)
- **LLM Context Index**: [https://links.raggiodev.com/llms.txt](https://links.raggiodev.com/llms.txt)

---

## Architecture & Features

- **Core Stack**: Vite + React 18 + strict TypeScript + Tailwind CSS + `lucide-react`.
- **Bidirectional URL Query Sync (`window.history.replaceState`)**:
  - `/?tab=all` (or `/`): Full Ecosystem Lobby View with the 4-card **Bento Grid ("Main Server Doors")** and complete categorized directory.
  - `/?tab=projects`: Full Projects & Deployments Catalog View with contextual return bar to `raggiodev.com` and technical sub-filter pills (`All Projects`, `Production / Stores`, `Cybersecurity`, `AI & Automation`, `Gamedev`, `Web & Labs`).
  - `/?tab=cybersecurity`: Filters Blue Team tools and verified security credentials.
  - `/?tab=gamedev`: Filters Indie Games and interactive browser simulations.
  - `/?tab=social`: Filters Content Channels, Professional Networks, Linktree mirror, and direct contact.
  - `/?q=<search>`: Instant real-time search across titles, localized descriptions, tech stack tags, and store statuses (`Ctrl+K` / `Cmd+K` shortcut).
- **Trilingual UI (`es` | `en` | `pt`)**: Defaults to Spanish (`es`) with automatic browser language detection and `localStorage` persistence.
- **AI Agent & SEO Triad**: Automated prebuild generation (`scripts/generate-seo.mjs`) for `/llms.txt` and `/sitemap.xml`, explicit AI crawler support in `/robots.txt`, `Schema.org` `CollectionPage` JSON-LD, and Cloudflare Pages security headers (`/public/_headers`).

---

## Commands

```bash
npm install
npm run generate:seo
npm run dev
npm run build
```
