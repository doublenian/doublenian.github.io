/**
 * service worker
 */
var cacheName = 'bs-0-2-0';
var apiCacheName = 'api-0-1-1';
var cacheFiles = [
    '/',
    './vue.min.js',
    './index.html',
    './index.js',
    './style.css',
    './img/book.png',
    './img/loading.svg',
    './manifest.json',
    './img/4zr70275044',
    './img/L6F70275551',
    './img/rPM70275401',
    './img/xqU70275251',
    './img/Yla70275125'
];

// 监听install事件，安装完成后，进行文件缓存
self.addEventListener('install', function (e) {
    console.log('Service Worker 状态： install');
    var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
        return cache.addAll(cacheFiles);
    });
    e.waitUntil(cacheOpenPromise);
});

// 监听activate事件，激活后通过cache的key来判断是否更新cache中的静态资源
self.addEventListener('activate', function (e) {
    console.log('Service Worker 状态： activate');
    var cachePromise = caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (key) {
            if (key !== cacheName && key !== apiCacheName) {
                return caches.delete(key);
            }
        }));
    })
    e.waitUntil(cachePromise);
    // 注意不能忽略这行代码，否则第一次加载会导致fetch事件不触发
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (cache) {
            console.log('========cache request======')
            console.log(cache)
            return cache || fetch(e.request);
        }).catch(function (err) {
            console.log(err);
            return fetch(e.request);
        })
    );
});