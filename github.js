// ==UserScript==
// @name          Github Links I Use
// @description	  adds handy links to the nav bar in Github
// @author        quentin fish
// @include       https://github.com/*
// ==/UserScript==

var betterLinks = '<a href="/orgs/blackthornio/projects/19" class="Header-link">SF Project</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/payments/pulls" class="Header-link">Pay Pulls</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/payments/issues" class="Header-link">Pay Issues</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/payments/releases" class="Header-link">Pay Releases</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/events/pulls" class="Header-link">Evt Pulls</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/events/issues" class="Header-link">Evt Issues</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/events/releases" class="Header-link">Evt Releases</a>&nbsp;|&nbsp;' +
'<a href="/blackthornio/documentation" class="Header-link">Documentation</a>';

document.querySelector('nav[aria-label="Global"]').innerHTML=betterLinks;
