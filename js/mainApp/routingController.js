(function(angular) {

	angular.module('nameApp').controller('routingCtrl', ['$scope', '$location', routingController ]);

	function routingController($scope, $location) {

		// Is needed in index.html to give menu items class active when clicked
		// I don't understand the return....
		$scope.isActive = function(href) {
			var path = $location.path();
			return path.substring(0, href.length) === href;
		}

	}

})(angular);