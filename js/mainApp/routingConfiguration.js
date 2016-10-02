(function(angular) {

	angular.module('nameApp').config(['$routeProvider', '$locationProvider', config]);

	function config($routeProvider, $locationProvider) {

			$routeProvider

				.when('/contact', {
						templateUrl: 'partials/contact.html',
						controller: 'contactController'
					})
				.when('/:page', {
						templateUrl: 'partials/templates/pageTemplate.html',
						controller: 'pageController'
					})
				.otherwise(
					{ 
						redirectTo: '/home' 
					}
				);

			// This is needed for rewriting the url, to make it pretty, right?
			$locationProvider.html5Mode(true);

	}

})(angular);