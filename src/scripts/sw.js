/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import 'regenerator-runtime';
import CONFIG from './globals/config';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log('Workbox success loaded.');

  workbox.precaching.precacheAndRoute(
    [
      { url: '/', revision: '1' },
      { url: '/2765c69613690b1b9c038f4be804e17b.ttf', revision: '1' },
      { url: '/20f40df21a485f522d0631c67139f334.jpg', revision: '1' },
      { url: '/8e438958ab0a4ec5a22813817a0837e2.jpg', revision: '1' },
      { url: '/index.html', revision: '1' },
      { url: '/bundle.js', revision: '1' },
      { url: '/manifest.json', revision: '1' },
      { url: '/sw.js', revision: '1' },
      { url: '/images/bbq.svg', revision: '1' },
      { url: '/images/cooking.svg', revision: '1' },
      { url: '/images/icon.png', revision: '1' },
      { url: '/images/logo.png', revision: '1' },
      { url: '/images/star.png', revision: '1' },
      { url: '/images/placeholder.png', revision: '1' },
      { url: '/font/ProductSans/ProductSans-Regular.ttf', revision: '1' },
      { url: '/images/icons/icon-128x128.png', revision: '1' },
      { url: '/images/icons/icon-144x144.png', revision: '1' },
      { url: '/images/icons/icon-152x152.png', revision: '1' },
      { url: '/images/icons/icon-192x192.png', revision: '1' },
      { url: '/images/icons/icon-256x256.png', revision: '1' },
      { url: '/images/icons/icon-384x384.png', revision: '1' },
      { url: '/images/icons/icon-512x512.png', revision: '1' },
      { url: '/images/icons/icon-72x72.png', revision: '1' },
      { url: '/images/icons/icon-96x96.png', revision: '1' },
    ],
    {
      ignoreURLParametersMatching: [/.*/],
    }
  );

  workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg|webp)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /.*(?:woff|woff2|eot|ttf|otf)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'font-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'all-data',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/dist/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'src-dist',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    new RegExp(CONFIG.BASE_URL),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'data-api',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/stackpath\.bootstrapcdn\.com\/font-awesome/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fonts-awesome',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/storage\.googleapis\.com\/workbox-cdn\/releases\/5\.1\/2/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'workbox',
    })
  );
} else {
  console.log('Workbox failed to load.');
}
