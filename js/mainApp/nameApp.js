(function(angular) {
	angular.module('nameApp', ['ngRoute', 'ngResource', 'ui.bootstrap']).filter('capitalize', function() {
	    return function(input) {
	      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	    }
	});
})(angular);


