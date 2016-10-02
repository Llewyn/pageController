(function(angular) {

	angular.module('nameApp').controller('contactController', ['$scope', 'pageService', '$sce', 'languageService', contactController]);

	function contactController($scope, pageService, $sce, languageService) {

		(function init() {

			pageService.getPage('contact').$promise.then(function(entry) { 
				$scope.pageData = entry; 
				$scope.content = entry['content_' + languageService.getLanguage()]; 
				$scope.title = entry['title_' + languageService.getLanguage()];
			});

			// I don't need this in a separate function, I can just tie it to the scope directly
			// And contactController and pageController have different scopes, so have to have this line twice
			// function trustHtml(inputToBeTrusted) {
			// 	return $sce.trustAsHtml(inputToBeTrusted);
			// }
			$scope.trustHtml = $sce.trustAsHtml;

		})();

	}

})(angular);