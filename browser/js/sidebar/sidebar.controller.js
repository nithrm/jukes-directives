'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  // nothing to see here for now… state transitions happening with ui-sref!

});

juke.directive('sideBar', function(){

	return {

		restrict: 'E',
		templateUrl: "/js/sidebar/templates/sidebar.html"
	
	}



})
