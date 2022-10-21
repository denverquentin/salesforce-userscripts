// ==UserScript==
// @name          Salesforce Admin Links for the Lightning View
// @description   adds handy setup links to the top of all Lightning Salesforce pages
// @version       1
// @author        quentin fish
// @match         https://*.lightning.force.com/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant         GM_addStyle
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

NOT USING lighting setup urls above YET because it SUCKS
*/
	jNode.prepend (
		'<span style="color:#000;font-weight:bold;padding:0px;margin-top:3px;"><a href="/setup/forcecomHomepage.apexp" style="color:#000;">Setup</a>&nbsp;|&nbsp;' +
		'<a href="/p/setup/custent/CustomObjectsPage" style="color:#000;">Objects</a>&nbsp;|&nbsp;' +
		'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="color:#000;">Console</a>&nbsp;|&nbsp;' +
		'<a href="/setup/ui/listApexTraces.apexp" style="color:#000;">Logs</a>&nbsp;|&nbsp;' +
		'<a href="/_ui/networks/setup/SetupNetworksPage" style="color:#000;">Dig Ex</a>&nbsp;|&nbsp;' +
		'<a href="/01p" style="color:#000;">Classes</a>&nbsp;|&nbsp;' +
		'<a href="/ui/setup/apex/ApexTestQueuePage" style="color:#000;">Tests</a>&nbsp;|&nbsp;' +
		'<a href="/apexpages/setup/listApexPage.apexp" style="color:#000;">Pages</a>&nbsp;|&nbsp;' +
		'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="color:#000;">Jobs</a>&nbsp;|&nbsp;' +
		//'<a href="/08e" style="color:#000;">Sched</a>&nbsp;|&nbsp;' +
		'<a href="/setup/ui/listCustomSettings.apexp" style="color:#000;">CS</a>&nbsp;|&nbsp;' +
		'<a href="/_ui/platform/ui/schema/wizard/entity/CustomMetadataTypeListPage?setupid=CustomMetadata" style="color:#000;">CMT</a>&nbsp;|&nbsp;' +
		'<a href="/0PS?setupid=PermSets" style="color:#000;">Perm Set</a>&nbsp;|&nbsp;' +
		'<a href="/005?isUserEntityOverride=1&setupid=ManageUsers" style="color:#000;">Users</a>&nbsp;|&nbsp;' +
		'<a href="/00e?setupid=EnhancedProfiles" style="color:#000;">Profiles</a>&nbsp;|&nbsp;' +
		//'<a href="/one/one.app#/settings/personal/PersonalInformation/home" style="color:#000;">MS</a>&nbsp;|&nbsp;' +
		//'<a target="_blank" href="https://help.salesforce.com/home" style="color:#000;">Help</a>&nbsp;|&nbsp;' +
		'<a href="/ltng/switcher?destination=classic" style="color:#000;">Classic</a></span>&nbsp;&nbsp;'
	);
}

//waitForKeyElements("div[class='system-message level-info']", addSetupLinks);
waitForKeyElements("div[class='slds-button-group slds-global-actions__favorites oneFavorites']", addSetupLinks);
