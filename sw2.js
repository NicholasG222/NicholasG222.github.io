self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            'latihanUTS.html',
            'latihan.css',
            'latihan.js'
          ])
        })
    );
    return self.clients.claim();
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          return res;
        })
    );
  });


    
