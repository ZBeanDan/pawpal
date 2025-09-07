// PawPal PWA Service Worker
const CACHE_NAME = 'pawpal-v1.0.0';
const STATIC_ASSETS = [
  './demo.html',
  './manifest.json',
  './assets/icon.png',
  './assets/favicon.png'
];

// 安装Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('PawPal: Caching app shell');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// 激活Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('PawPal: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截网络请求，实现离线功能
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存中有，返回缓存版本
        if (response) {
          return response;
        }
        
        // 否则从网络获取
        return fetch(event.request).then(response => {
          // 检查是否是有效响应
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 克隆响应
          const responseToCache = response.clone();
          
          // 添加到缓存
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // 网络失败时，如果是HTML请求，返回离线页面
          if (event.request.destination === 'document') {
            return caches.match('./demo.html');
          }
        });
      })
  );
});