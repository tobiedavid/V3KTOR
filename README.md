# V3KTOR — PWA build

Turns V3KTOR into an installable Progressive Web App: home-screen icon, fullscreen launch, offline support, persistent storage, Export/Import baseline.

## Deployment

Upload these files to the **repo root** (same level as the existing `index.html`, `v3ktor_eng.html`, `v3ktor_fr.html`). GitHub Pages will serve them under `https://v3ktor.app/`.

```
/index.html              ← Landing /index.html              ← Landing page (relative links to language builds)
/v3ktor_eng.html         ← English app (PWA-ready, Export/Import)
/v3ktor_fr.html          ← French app (PWA-ready, Export/Import)
/sw.js                   ← Service worker (must live at repo root)
/manifest-en.webmanifest
/manifest-fr.webmanifest
/icon192.png             ← Required for installability
/icon512.png             ← Required for installability
/icon512maskable.png     ← Android adaptive icon
/icon180.png             ← iOS apple-touch-icon
/icon64.png              ← Browser favicon (optional)
```

All internal links use **relative paths**, so the same build works on v3ktor.app, v3ktor.org, and v3ktor.ca without modification.

> **Important:** `sw.js` must be served from the repo root. Service workers can only control pages within their own directory or below — a root-level worker covers all three HTML files.

## GitHub Pages MIME notes

GitHub Pages serves `.webmanifest` files as `application/manifest+json` by default — no extra config needed. Service worker (`sw.js`) is served as `text/javascript`, which browsers accept.

## What the user sees

**Android (Chrome / Edge / Samsung Internet):**
A few seconds after opening v3ktor.app, the browser shows an "Install app" prompt. One tap → V3KTOR on home screen → launches fullscreen.

**iOS Safari:**
No auto-prompt (Apple's choice). Share sheet → "Add to Home Screen" → fullscreen launch.

**Desktop Chrome / Edge:**
Install icon in the address bar. Click → standalone window.

## What survives what

| Action | Outcome |
|---|---|
| Clear browser **cache** | App + baseline survive |
| Clear browser **cookies and site data** | localStorage wiped → use Import to restore |
| Uninstall PWA | Everything gone (same as native uninstall) |
| New phone / OS reset | Restore via **Settings → Data → Import** |
| iOS auto-eviction (legacy) | Mitigated by `navigator.storage.persist()` + iOS 16.4+ exempting installed PWAs |

## Export / Import

Inside the app: **Menu → Settings → Data → Export** writes `v3ktor-baseline-YYYY-MM-DD.json` with every `tc_*` key in localStorage (sessions, calibration, settings, flags). **Import** restores it on another device or after a wipe.

The PWA covers ~99% of cases. Export is the user-controlled escape hatch for the rest.

## Updating the app

Service worker uses **network-first** for HTML pages — users get the latest version every time they're online, no stale-version traps. Offline opens serve the last cached version.

When you ship a deliberate cache-busting deploy, bump `CACHE_VERSION` in `sw.js`. Existing users pick up the new SW on next visit; old cache is purged on activation.

## Icon

The icon is a **V3** logomark in the brand's gold-on-dark gradient. The maskable variant has extra inner padding so Android's various icon-mask shapes (circle, squircle, rounded square) won't crop the letters.
