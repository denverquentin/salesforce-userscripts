// ==UserScript==
// @name          Salesforce Admin Links for the Classic View
// @description	  adds handy setup links to the top of all classic Salesforce pages
// @author        quentin fish
// @include       https://*.salesforce.com/*
// @include       https://*.visualforce.com/*
// ==/UserScript==

var betterSetupLinks = '<a href="/setup/forcecomHomepage.apexp" style="padding:0px;margin:0px;">Setup</a>&nbsp;|&nbsp;' +
'<a href="/p/setup/custent/CustomObjectsPage" style="padding:0px;margin:0px;">Objects</a>&nbsp;|&nbsp;' +
'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="padding:0px;margin:0px;">Console</a>&nbsp;|&nbsp;' +
'<a href="/setup/ui/listApexTraces.apexp" style="padding:0px;margin:0px;">Logs</a>&nbsp;|&nbsp;' +
'<a href="/01p" style="padding:0px;margin:0px;">Classes</a>&nbsp;|&nbsp;' +
'<a href="/ui/setup/apex/ApexTestQueuePage" style="padding:0px;margin:0px;">Tests</a>&nbsp;|&nbsp;' +
'<a href="/apexpages/setup/listApexPage.apexp" style="padding:0px;margin:0px;">Pages</a>&nbsp;|&nbsp;' +
//'<a href="/0DM/o?setupid=CustomDomain" style="padding:0px;margin:0px;">Sites</a>&nbsp;|&nbsp;' +
'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="padding:0px;margin:0px;">Jobs</a>&nbsp;|&nbsp;' +
'<a href="/08e" style="padding:0px;margin:0px;">Sched</a>&nbsp;|&nbsp;' +
'<a href="/setup/ui/listCustomSettings.apexp" style="padding:0px;margin:0px;">CS</a>&nbsp;|&nbsp;' +
'<a href="/_ui/platform/ui/schema/wizard/entity/CustomMetadataTypeListPage?setupid=CustomMetadata" style="padding:0px;margin:0px;">CMT</a>&nbsp;|&nbsp;' +
'<a href="/0PS?setupid=PermSets" style="padding:0px;margin:0px;">Perm Set</a>&nbsp;|&nbsp;' +
'<a href="/005?isUserEntityOverride=1&setupid=ManageUsers" style="padding:0px;margin:0px;">Users</a>&nbsp;|&nbsp;' +
'<a href="/00e?setupid=EnhancedProfiles" style="padding:0px;margin:0px;">Profiles</a>&nbsp;|&nbsp;' +
'<a href="/ui/setup/Setup?setupid=PersonalSetup" style="padding:0px;margin:0px;">MS</a>&nbsp;|&nbsp;' +
'<a target="_blank" href="https://help.salesforce.com/home" style="padding:0px;margin:0px;">Help</a>&nbsp;|&nbsp;' +
'<a href="/ltng/switcher?destination=lex-campaign" style="padding:0px;margin:0px;">Lightning</a>&nbsp;|&nbsp;' +
'<a href="/secur/logout.jsp" style="padding:0px;margin:0px;">Logout</a>';


var appBodyHeader = document.getElementById("AppBodyHeader");
var chatterHeader = document.getElementById("page");
//alert('appBodyHeader = ' + appBodyHeader);
//alert('chatterHeader = ' + chatterHeader);

if (appBodyHeader !== null) {
	var linkElements = appBodyHeader.getElementsByClassName("linkElements");
	if (linkElements !== null && linkElements.length == 1) {
		var element = linkElements[0];
		//alert(linkElements[0].innerHtml);
		element.innerHTML = betterSetupLinks;
	}

} else if (chatterHeader !== null) {
	var menu1 = chatterHeader.getElementsByClassName('zen-mrl');
	if (menu1 !== null) {
		for (var i = 0; i < menu1.length; i++) {
			menu1[i].innerHTML = '';
		}
	}

	var menu2 = chatterHeader.getElementsByClassName('zen-noSubmenu');
	//alert('menu2 = ' + menu2.length);
	if (menu2 !== null) {
		menu2[0].innerHTML = '<ul class="zen-inlineList zen-listLarge"><li class="zen-active">' + betterSetupLinks + '</li></ul>';
	}
}
