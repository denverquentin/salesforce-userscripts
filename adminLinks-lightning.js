// ==UserScript==
// @name          Salesforce Admin Links for the Lightning View
// @description	  adds handy setup links to the top of all Lightning Salesforce pages
// @author        quentin fish
// @include       https://*.lightning.force.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==

function addSetupLinks(jNode) {
/* these are lightning setup urls: 
setup home - setup/one/one.app#/setup/home
apex classes - /one/one.app?source=aloha#/setup/ApexClasses/home
debug logs - /one/one.app?source=aloha#/setup/ApexDebugLogs/home
apex jobs - /one/one.app?source=aloha#/setup/AsyncApexJobs/home
vf pages - /one/one.app?source=aloha#/setup/ApexPages/home
custom settings - /one/one.app?source=aloha#/setup/CustomSettings/home
users - /one/one.app?source=aloha#/setup/ManageUsers/home
profiles - /one/one.app?source=aloha#/setup/EnhancedProfiles/home

NOT USING YET SINCE LIGHTNING SETUP SUCKS
*/
	jNode.prepend (
		'<span style="color:#fff;font-weight:bold;"><a href="/setup/forcecomHomepage.apexp" style="color:#fff;">Setup</a>&nbsp;|&nbsp;' +
		'<a href="/one/one.app?source=aloha#/setup/object/manager" style="color:#fff;">Objects</a>&nbsp;|&nbsp;' +
		'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="color:#fff;">Console</a>&nbsp;|&nbsp;' +
		'<a href="/setup/ui/listApexTraces.apexp" style="color:#fff;">Logs</a>&nbsp;|&nbsp;' +
		'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="color:#fff;">Jobs</a>&nbsp;|&nbsp;' +
		'<a href="/01p" style="color:#fff;">Classes</a>&nbsp;|&nbsp;' +
		'<a href="/ui/setup/apex/ApexTestQueuePage" style="color:#fff;">Tests</a>&nbsp;|&nbsp;' +
		'<a href="/apexpages/setup/listApexPage.apexp" style="color:#fff;">Pages</a>&nbsp;|&nbsp;' +
		'<a href="/setup/ui/listCustomSettings.apexp" style="color:#fff;">CS</a>&nbsp;|&nbsp;' +
		'<a href="/005?isUserEntityOverride=1&retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DUsers&setupid=ManageUsers" style="color:#fff;">Users</a>&nbsp;|&nbsp;' +
		'<a href="/00e?setupid=EnhancedProfiles" style="color:#fff;">Profiles</a>&nbsp;|&nbsp;' +
		'<a href="/one/one.app#/settings/personal/PersonalInformation/home" style="color:#fff;">MS</a>&nbsp;|&nbsp;' +
		'<a target="_blank" href="https://help.salesforce.com/home" style="color:#fff;">Help</a>&nbsp;|&nbsp;' +
		'<a href="/lightning/switcher?destination=classic" style="color:#fff;">Classic</a></span>&nbsp;&nbsp;'
	);
}

waitForKeyElements("div[class='system-message level-info']", addSetupLinks);
