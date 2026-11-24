// يكفي وجوده ليُثبَّت الموقع تطبيقاً. لا يخزّن شيئاً: الموقع يعمل من Google دائماً
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
