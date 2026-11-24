// Service worker: deixa o app instalável e abrindo mesmo sem internet.
// Sempre tenta a rede primeiro (para pegar atualizações) e usa a cópia guardada se estiver offline.
const CACHE = "carteirinha-v1";
const SHELL = [
  "./",
  "./index.html",
  "./portal.html",
  "./favicon.svg",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok && sameOrigin) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
