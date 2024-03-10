// ==UserScript==
// @name         GoFile Bulk Downloader
// @version      0.1
// @description  Download all files from a folder on Gofile without having to click each and every download button.
// @match        *://gofile.io/*
// @run-at       document-end
// @downloadURL https://github.com/Gunethra/GoFile-bulk-auto-download/blob/main/script.js
// @updateURL https://github.com/Gunethra/GoFile-bulk-auto-download/blob/main/script.js
// ==/UserScript==

const links = document.querySelectorAll('a[href*="download"]');

// Print all links in the console
// links.forEach(link => {
//     console.log(link.href);
// });

let index = 0;
const interval = setInterval(() => {
    if (index < links.length) {
        links[index].click();
        index++;
    } else {
        clearInterval(interval);
    }
}, 5000);
