
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('coffee-accounting-cache').then(function(cache) {
      return cache.addAll([
        'coffee-accounting.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
