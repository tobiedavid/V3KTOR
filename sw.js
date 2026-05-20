/* V3KTOR service worker
 * Strategy:
 *   - HTML pages: network-first (so updates ship as soon as user is online),
 *                 fall back to cache when offline.
 *   - Static assets (icons, manifest): cache-first.
 *   - Cross-origin requests (Google Fonts, three.js CDN): pass through,
 *     opportunistically cache successful GETs so the app survives offline.
 *
 * Bump CACHE_VERSION whenever you ship a deliberate cache invalidation.
 */

const CACHE_VERSION = 'v3ktor-2026-05-19';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/v3ktor_eng.html',
  '/v3ktor_fr.html',
  '/manifest-en.webmanifest',
  '/manifest-fr.webmanifest',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-512-maskable.png',
  '/icon-180.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(CORE_ASSETS).catch(() => {
        // Don't fail install if one asset is missing — cache what we can.
        return Promise.all(CORE_ASSETS.map((url) =>
          fetch(url).then((r) => r.ok && cache.put(url, r)).catch(() => {})
        ));
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const isNavigation = req.mode === 'navigate' || req.destination === 'document';

  if (isNavigation) {
    // Network-first for HTML — pick up dev updates immediately when online.
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then((r) =>
            r ||
            caches.match('/v3ktor_eng.html') ||
            caches.match('/v3ktor_fr.html') ||
            caches.match('/index.html')
          )
        )
    );
    return;
  }

  // Cache-first for everything else (assets, fonts, CDN libs).
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // Only cache successful, basic/cors responses
        if (res && res.ok && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
    })
  );
});

// Optional: allow the page to ask SW to take over immediately after a deploy.
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
