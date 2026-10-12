/* Service worker de CasaConfig: la app abre sin conexión.
 * - Navegación: red primero, y si no hay señal, la última página guardada.
 * - Archivos propios (js, css, texturas, modelos, íconos): se guardan al usarse y salen de caché después.
 * - Todo lo que es de otros sitios (mapas, cotización del dólar, WhatsApp) pasa directo a la red.
 * El diseño del cliente vive en localStorage, así que sigue disponible sin conexión. */
const VERSION = "casaconfig-v2.24";
const SHELL = ["./", "manifest.webmanifest", "icon-192.png", "favicon.svg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./", copy)); return res; })
        .catch(() => caches.match("./").then(r => r || Response.error())),
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      });
    }),
  );
});
