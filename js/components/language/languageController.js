(function(angular) {

	angular.module('nameApp').controller('languageController', ['$scope', 'languageService', languageController]);

	function languageController($scope, languageService) {

		(function init() {

			$scope.changeLanguage = changeLanguage;

		})();

		function changeLanguage(language) { 
			languageService.setLanguage(language); 
			$scope.content = $scope.pageData['content_' + language]; 
			$scope.title = $scope.pageData['title_' + language]; 
		}

	}

})(angular);