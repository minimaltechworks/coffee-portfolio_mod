// Optimized Service Worker for Coffee Portfolio
const CACHE_NAME = 'coffee-portfolio-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './fonts.css',
    './manifest.json',
    './images/coffee-beans.webp'
];

// Install event - Cache static resources
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(function(cache) {
                console.log('Opened static cache');
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

// Activate event - Clean up old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// Fetch event - Serve from cache with network fallback
self.addEventListener('fetch', function(event) {
    const request = event.request;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip external requests
    if (url.origin !== location.origin) {
        return;
    }
    
    event.respondWith(
        caches.match(request)
            .then(function(response) {
                // Return cached version if available
                if (response) {
                    return response;
                }
                
                // Otherwise fetch from network
                return fetch(request).then(function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Clone the response
                    const responseToCache = response.clone();
                    
                    // Cache dynamic content
                    caches.open(DYNAMIC_CACHE)
                        .then(function(cache) {
                            cache.put(request, responseToCache);
                        });
                    
                    return response;
                }).catch(function() {
                    // Return offline page for navigation requests
                    if (request.destination === 'document') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

// Background sync for form submissions
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Handle background sync for form submissions
    return Promise.resolve();
}

// Push notifications
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : '新しいお知らせがあります',
        icon: './images/coffee-beans.webp',
        badge: './images/coffee-beans.webp',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'サイトを見る',
                icon: './images/coffee-beans.webp'
            },
            {
                action: 'close',
                title: '閉じる',
                icon: './images/coffee-beans.webp'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Artisan Coffee', options)
    );
});

// Notification click
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});