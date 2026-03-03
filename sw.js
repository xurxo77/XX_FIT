const CACHE_NAME = 'xx-fit-v2'; // Cambiado a v2 para forzar actualización
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './img/logo.png' // Tu nuevo logo
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
