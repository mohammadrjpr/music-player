const CACHE_NAME = "music-player-v1";


const files=[

"./",

"./index.html",

"./style.css",

"./app.js",

"./manifest.json",

"./assets/cover.jpg",

"./assets/song.mp3",

"./assets/qrcode.png",

"./assets/icons/icon-192.png",

"./assets/icons/icon-512.png"

];


self.addEventListener("install", event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(files);

})

);


});





self.addEventListener("fetch",event=>{


event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);


});