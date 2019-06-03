self.addEventListener('install', event => {
  console.log('V1 installing…ddddd');

  // cache a cat SVG
  event.waitUntil(
    caches.open('doublenian.github.io-static-v1').then(cache => {
      cache.add('/pwa1/images/svg/cat.svg')
      cache.add('/pwa1/index.html')
    })
  );
}) 

//只有在第一次Service worker 激活时才会调用，还有就是service worker 更新的时候

self.addEventListener('activate', event => {
  clients.claim(); //这个是激活后，立即使用缓存
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // serve the cat SVG from the cache if the request is
  // same-origin and the path is '/dog.svg'
  if (url.origin == location.origin && url.pathname == '/pwa1/images/svg/dog.svg') {
    event.respondWith(caches.match('/pwa1/images/svg/cat.svg'));
  }
  if (url.origin == location.origin && url.pathname == '/pwa1/') {
    event.respondWith(caches.match('/pwa1/index.html'));
  }
});