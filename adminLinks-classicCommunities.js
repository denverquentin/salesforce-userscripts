// ==UserScript==
// @name          Salesforce Admin Links for the Classic Communities View
// @description	  adds handy setup links to the top of all classic Communities Salesforce pages
// @author        quentin fish
// @include       https://*.salesforce.com/*
// @include       https://*.visualforce.com/*
// ==/UserScript==

var betterSetupLinks = '&nbsp;&nbsp;<a href="/setup/forcecomHomepage.apexp" style="color:#fff;">Setup</a>&nbsp;|&nbsp;' +
'<a href="/p/setup/custent/CustomObjectsPage" style="color:#fff;">Objects</a>&nbsp;|&nbsp;' +
'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="color:#fff;">Console</a>&nbsp;|&nbsp;' +
'<a href="/setup/ui/listApexTraces.apexp" style="color:#fff;">Logs</a>&nbsp;|&nbsp;' +
'<a href="/_ui/networks/setup/SetupNetworksPage" style="padding:0px;margin:0px;">Dig Ex</a>&nbsp;|&nbsp;' +
'<a href="/01p" style="color:#fff;">Classes</a>&nbsp;|&nbsp;' +
'<a href="/ui/setup/apex/ApexTestQueuePage" style="color:#fff;">Tests</a>&nbsp;|&nbsp;' +
'<a href="/apexpages/setup/listApexPage.apexp" style="color:#fff;">Pages</a>&nbsp;|&nbsp;' +
//'<a href="/0DM/o?setupid=CustomDomain" style="color:#fff;">Sites</a>&nbsp;|&nbsp;' +
'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="color:#fff;">Jobs</a>&nbsp;|&nbsp;' +
//'<a href="/08e" style="color:#fff;">Sched</a>&nbsp;|&nbsp;' +
'<a href="/setup/ui/listCustomSettings.apexp" style="color:#fff;">CS</a>&nbsp;|&nbsp;' +
'<a href="/_ui/platform/ui/schema/wizard/entity/CustomMetadataTypeListPage?setupid=CustomMetadata" style="color:#fff;">CMT</a>&nbsp;|&nbsp;' +
'<a href="/0PS?setupid=PermSets" style="color:#fff;">Perm Set</a>&nbsp;|&nbsp;' +
'<a href="/005?isUserEntityOverride=1&setupid=ManageUsers" style="color:#fff;">Users</a>&nbsp;|&nbsp;' +
'<a href="/00e?setupid=EnhancedProfiles" style="color:#fff;">Profiles</a>&nbsp;|&nbsp;' +
'<a href="/ui/setup/Setup?setupid=PersonalSetup" style="color:#fff;">MS</a>&nbsp;|&nbsp;' +
'<a target="_blank" href="https://help.salesforce.com/home" style="color:#fff;">Help</a>&nbsp;|&nbsp;' +
'<a href="/ltng/switcher?destination=lex-campaign" style="color:#fff;">Lightning</a>&nbsp;|&nbsp;' +
'<a href="/secur/logout.jsp" style="color:#fff;">Logout</a>&nbsp;&nbsp;';

var globalHeaderBar = document.getElementById("globalHeaderBar");
if (globalHeaderBar != null) {
	var linksNode = document.createElement("div");
	var att = document.createAttribute("style");
	att.value = "font-color:#fff;font-weight:bold;text-align:center;";
	linksNode.setAttributeNode(att);
	linksNode.innerHTML = betterSetupLinks;
	var child = globalHeaderBar.children[2];
	globalHeaderBar.insertBefore(linksNode, child);
}
