// Paderbowler Stats 2.0 - Service Worker für PWA Offline & Installation
const CACHE_NAME = 'paderbowler-stats-v2';
const ASSETS = [
  './index.html',
  './matchday-input.html',
  './dashboard-charts.html',
  './awards-rankings.html',
  './pdf-report.html',
  './shared-stats.js',
  './manifest.json',
  './app-logo.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => console.log('PWA cache prefetch note:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => cached);
    })
  );
});
