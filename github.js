// ==UserScript==
// @name          Github Links I Use
// @description   adds handy links to the nav bar in Github
// @version       1
// @author        quentin fish
// @match         https://github.com/*
// @match         https://www.github.com/*
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


/* here's what i'm currently using
// ==UserScript==
// @name          Github Links I Use
// @description   adds handy links to the nav bar in Github
// @version       1
// @author        quentin fish
// @match         https://github.com/*
// @match         https://www.github.com/*
// ==/UserScript==

var betterLinks = '<a href="/UST-Accounts" class="Header-link">UST Repos</a>&nbsp;|&nbsp;' +
'<a href="/denverquentin?tab=repositories" class="Header-link">My Repos</a>';

document.querySelector('nav[aria-label="Global"]').innerHTML=betterLinks;
*/
