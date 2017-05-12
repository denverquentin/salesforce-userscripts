// ==UserScript==
// @name          Salesforce Admin Links for the Classic Communities View
// @description	  adds handy setup links to the top of all classic Communities Salesforce pages
// @author        quentin fish
// @include       https://*.salesforce.com/*
// @include       https://*.visual.force.com/*
// ==/UserScript==

var betterSetupLinks = '&nbsp;&nbsp;&nbsp;&nbsp;<a href="/setup/forcecomHomepage.apexp" style="color:#fff;">Setup</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/01p" style="color:#fff;">Classes</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/ui/setup/apex/ApexTestQueuePage" style="color:#fff;">Tests</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="color:#fff;">Console</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/setup/ui/listApexTraces.apexp" style="color:#fff;">Logs</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="color:#fff;">Jobs</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/apexpages/setup/listApexPage.apexp" style="color:#fff;">Pages</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/setup/ui/listCustomSettings.apexp" style="color:#fff;">CS</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/0DM/o?setupid=CustomDomain" style="color:#fff;">Sites</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/changemgmt/listOutboundChangeSet.apexp" style="color:#fff;">Out</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/changemgmt/listInboundChangeSet.apexp" style="color:#fff;">In</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/p/setup/custent/CustomObjectsPage" style="color:#fff;">Objects</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/005" style="color:#fff;">Users</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/00e?setupid=EnhancedProfiles" style="color:#fff;">Profiles</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a href="/ui/setup/Setup?setupid=PersonalSetup" style="color:#fff;">MS</a>&nbsp;&nbsp;|&nbsp;&nbsp;' +
'<a target="_blank" href="https://help.salesforce.com/home" style="padding:0px;margin:0px;">Help</a>&nbsp;|&nbsp;' +
'<a href="/lightning/switcher?destination=lex" style="padding:0px;margin:0px;">Lightning</a>&nbsp;|&nbsp;' +
'<a href="/secur/logout.jsp" style="color:#fff;">Logout</a>&nbsp;&nbsp;&nbsp;&nbsp;';

var globalHeaderBar = document.getElementById("globalHeaderBar");
if (globalHeaderBar != null) {
	var linksNode = document.createElement("div");
	var att = document.createAttribute("style");
	att.value = "font-color:#fff;font-weight:bold;text-align:center;";
	linksNode.setAttributeNode(att);
	linksNode.innerHTML = betterSetupLinks;
//	var textnode = document.createTextNode("This was added dinamically");
//	linksNode.appendChild(textnode);
	var child = globalHeaderBar.children[2];
	globalHeaderBar.insertBefore(linksNode, child);
}
