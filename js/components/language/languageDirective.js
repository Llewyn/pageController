(function(angular) {

	angular.module('nameApp').directive('language', ['languageService', function(languageService) {
		return {
			template: '<img data-ng-click="changeLanguage(\'nl\')" src="img/btn_nl.png"></img>' +
					'<img data-ng-click="changeLanguage(\'uk\')" src="img/btn_uk.png"></img>' +
					'<img data-ng-click="changeLanguage(\'fr\')" src="img/btn_fr.png"></img>',
			link: function($scope, element, attributes) {
				$scope.changeLanguage = languageService.setLanguage;
			}
		};
	}]);

})(angular);