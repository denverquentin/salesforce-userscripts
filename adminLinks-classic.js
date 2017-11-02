// ==UserScript==
// @name          Salesforce Admin Links for the Classic View
// @description	  adds handy setup links to the top of all classic Salesforce pages
// @author        quentin fish
// @include       https://*.salesforce.com/*
// @include       https://*.visual.force.com/*
// ==/UserScript==

var betterSetupLinks = '<a href="/setup/forcecomHomepage.apexp" style="padding:0px;margin:0px;">Setup</a>&nbsp;|&nbsp;' +
'<a href="/p/setup/custent/CustomObjectsPage" style="padding:0px;margin:0px;">Objects</a>&nbsp;|&nbsp;' +
'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="padding:0px;margin:0px;">Console</a>&nbsp;|&nbsp;' +
'<a href="/setup/ui/listApexTraces.apexp" style="padding:0px;margin:0px;">Logs</a>&nbsp;|&nbsp;' +
'<a href="/01p" style="padding:0px;margin:0px;">Classes</a>&nbsp;|&nbsp;' +
'<a href="/ui/setup/apex/ApexTestQueuePage" style="padding:0px;margin:0px;">Tests</a>&nbsp;|&nbsp;' +
'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="padding:0px;margin:0px;">Jobs</a>&nbsp;|&nbsp;' +
'<a href="/08e" style="padding:0px;margin:0px;">Sched</a>&nbsp;|&nbsp;' +
'<a href="/setup/ui/listCustomSettings.apexp" style="padding:0px;margin:0px;">CS</a>&nbsp;|&nbsp;' +
/*	don't use these much - removing to free up space
'<a href="/0DM/o?setupid=CustomDomain" style="padding:0px;margin:0px;">Sites</a>&nbsp;|&nbsp;' +
'<a href="/changemgmt/listOutboundChangeSet.apexp" style="padding:0px;margin:0px;">Out</a>&nbsp;|&nbsp;' +
'<a href="/changemgmt/listInboundChangeSet.apexp" style="padding:0px;margin:0px;">In</a>&nbsp;|&nbsp;' +
*/
'<a href="/005?isUserEntityOverride=1&retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DUsers&setupid=ManageUsers" style="padding:0px;margin:0px;">Users</a>&nbsp;|&nbsp;' +
'<a href="/00e?setupid=EnhancedProfiles" style="padding:0px;margin:0px;">Profiles</a>&nbsp;|&nbsp;' +
'<a href="/ui/setup/Setup?setupid=PersonalSetup" style="padding:0px;margin:0px;">MS</a>&nbsp;|&nbsp;' +
'<a target="_blank" href="https://help.salesforce.com/home" style="padding:0px;margin:0px;">Help</a>&nbsp;|&nbsp;' +
'<a href="/lightning/switcher?destination=lex" style="padding:0px;margin:0px;">Lightning</a>&nbsp;|&nbsp;' +
'<a href="/secur/logout.jsp" style="padding:0px;margin:0px;">Logout</a>';

var appBodyHeader = document.getElementById("AppBodyHeader");
if (appBodyHeader !== null) {
	var linkElements = appBodyHeader.getElementsByClassName("linkElements");
	if (linkElements !== null && linkElements.length == 1) {
		var element = linkElements[0];
		//alert(linkElements[0].innerHtml);
		element.innerHTML = betterSetupLinks;
	}
}
