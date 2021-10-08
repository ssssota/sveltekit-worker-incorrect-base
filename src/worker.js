import { base } from '$app/paths';

console.log('worker thread:', base);

self.postMessage(base);
