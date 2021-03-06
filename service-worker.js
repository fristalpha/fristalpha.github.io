/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Blog/hexoblog/public/2021/02/25/hello-world/index.html","ae75023422fe531c694d62f7ed63e004"],["D:/Blog/hexoblog/public/2021/02/27/JSDeliver-GitHub-PicGo搭建免费图床/index.html","b15b77130c16fe403ca760a544256b4f"],["D:/Blog/hexoblog/public/2021/03/10/Typora-免费图床/index.html","029565afabc44f67d8564b92d9c76ac2"],["D:/Blog/hexoblog/public/2021/03/10/markdown/index.html","c080668fc944d8e2829919b565c8f164"],["D:/Blog/hexoblog/public/2021/03/14/又拍云CDN配置/index.html","5dbd2f11cf0567d73947b81c27b74f67"],["D:/Blog/hexoblog/public/404.html","474072a18870307362008dfa866d77f2"],["D:/Blog/hexoblog/public/about/index.html","cf5576430952f1153b4751bc0622e93e"],["D:/Blog/hexoblog/public/aplayer/index.html","4a0ab2a7639887579ae079a24c304f23"],["D:/Blog/hexoblog/public/archives/2021/02/index.html","0032ff52ee0039a531ddf122c10bbef3"],["D:/Blog/hexoblog/public/archives/2021/03/index.html","733c7ee15c2e68107a8cdd46eb726dd9"],["D:/Blog/hexoblog/public/archives/2021/index.html","3b955d71b7cae65c5d7e7175deddc3a5"],["D:/Blog/hexoblog/public/archives/index.html","6aa11a6fc6bf05159bf97aaa054f0af7"],["D:/Blog/hexoblog/public/bb/index.html","c911ece98b448453be197e01b741f767"],["D:/Blog/hexoblog/public/categories/index.html","d8c35434982052f76ef2b493cc9c4d36"],["D:/Blog/hexoblog/public/categories/教程/index.html","672fd9881f39057992ffbc06ea3d8d0f"],["D:/Blog/hexoblog/public/css/index.css","f2a4a47955ee7bff89939d6259032c5a"],["D:/Blog/hexoblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/hexoblog/public/gallery/index.html","0c64885af2d94620d1951e160fbe389f"],["D:/Blog/hexoblog/public/gallery/tx/index.html","889475bdc29b514cc41a004db519f57d"],["D:/Blog/hexoblog/public/gallery/wallpaper/index.html","6eaa354b23edb47b3bbedabf449799cd"],["D:/Blog/hexoblog/public/gallery/wallpaper1/index.html","d60ff2f6a0119094af7adf25aab69e1b"],["D:/Blog/hexoblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/hexoblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/hexoblog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/hexoblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/hexoblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/hexoblog/public/index.html","2cbef193e8c4d325a74d2c6d96f39f98"],["D:/Blog/hexoblog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["D:/Blog/hexoblog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Blog/hexoblog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Blog/hexoblog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Blog/hexoblog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Blog/hexoblog/public/link/index.html","3a549cb612aae178341512839eda2f85"],["D:/Blog/hexoblog/public/shuoshuo/index.html","dc67fafcf3a3e1c405dc3d394cecca4c"],["D:/Blog/hexoblog/public/tags/GitHub/index.html","0e55ec521aee50c026a0035de9de200e"],["D:/Blog/hexoblog/public/tags/JSDeliver/index.html","90ea5e2b718237ede9b64ac6f15502bd"],["D:/Blog/hexoblog/public/tags/PicGo/index.html","f96e4d59fbaa3ffb60803520692255ff"],["D:/Blog/hexoblog/public/tags/cdn/index.html","a895180060477dfb432cc17ddfe34fac"],["D:/Blog/hexoblog/public/tags/index.html","4887032cba7603eac769923c19422e3b"],["D:/Blog/hexoblog/public/tags/markdown/index.html","a6d69fdd26eb346a7b3dae36d9c2cf68"],["D:/Blog/hexoblog/public/tags/typora/index.html","25c5d096efb5bd394ee2ece980fc7f54"],["D:/Blog/hexoblog/public/tags/又拍云/index.html","9a065ae482759648ffa051e0fd69f379"],["D:/Blog/hexoblog/public/tags/图床/index.html","bce95679d752b5b389ec0b02d1093951"],["D:/Blog/hexoblog/public/tags/网站加速/index.html","1613d61ed5487171a7fe145b5242bf1b"],["D:/Blog/hexoblog/public/tags/轻量标记语言/index.html","a843a2161f6cbe87757da11d6a6da78d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







