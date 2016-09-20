(function(angular) {

	angular.module('nameApp').config(['$routeProvider', '$locationProvider', config]);

	function config($routeProvider, $locationProvider) {

			$routeProvider

				.when('/:page', {
						templateUrl: 'partials/templates/pageTemplate.html'
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