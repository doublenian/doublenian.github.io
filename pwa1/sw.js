self.addEventListener('install', event => {
  console.log('V1 installing…ddddd');

  // cache a cat SVG
  event.waitUntil(
    caches.open('static-v1').then(cache => cache.add('/images/svg/cat.svg'))
  );
});

self.addEventListener('activate', event => {
  //clients.claim(); //这个是激活后，立即使用缓存
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // serve the cat SVG from the cache if the request is
  // same-origin and the path is '/dog.svg'
  if (url.origin == location.origin && url.pathname == '/images/svg/dog.svg') {
    event.respondWith(caches.match('/images/svg/cat.svg'));
  }
});