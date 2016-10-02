(function(angular) {

	// scope: obviously we need the scope, coz we'll be putting stuff in there for the template to get the content of the page and stuff
	// routeparams: when the page changes other stuff needs to be fetched
	// pageService: we'll be calling functions from there
	// sce: used to trust html, so it will be displayed correctly (character encoding)

	// Separation of concerns (design principle for separating a computer program into distinct sections, such that each section addresses a separate concern)
	// ----------------------
	// languageService: when switch between the different languages

	angular.module('nameApp').controller('pageController', ['$scope', '$location', '$routeParams', 'pageService', '$sce', 'languageService', pageController]);

	function pageController($scope, $location, $routeParams, pageService, $sce, languageService) {

		// init encapsulates stuff (a language construct that facilitates the bundling of data with the methods (or other functions) operating on that data)
		(function init() {

			// the fetchPage for contact is in contactController (separation of concerns)
			if ($routeParams.page) {
				fetchPage($routeParams.page);
			}

			$scope.$on('$routeChangeSuccess', function() {
				fetchPage($routeParams.page);
			});

			// TO BE DONE: something needs to be added if what is trying to be fetched can't be.... 
			// $http.get('whaterdoesntexist').then(function () {}, function() { $location.url('/not-found'); });
			
			// I just assign functions to scope variables, you never put attributes here, coz that would be calling it
			$scope.trustHtml = trustHtml;
			// $scope.changeLanguage = changeLanguage;
			// TO BE DONE: something ng cookies or something, so the language preferences are kept
			// $scope.activeLanguage = languageService.getLanguage();

			$scope.$watch(
				function() { return languageService.getLanguage(); },    
				function(newLanguage) {     
					if ($scope.pageData) {     
						$scope.content = $scope.pageData['content_' + newLanguage];      
						$scope.title = $scope.pageData['title_' + newLanguage];
					}
			});

			// $scope.$watch('languageService.getLanguage()', function(newLanguage, oldLanguage, $scope) {
			// 	$scope.content = $scope.pageData['content_' + newLanguage]; 
			// 	$scope.title = $scope.pageData['title_' + newLanguage]; 				
			// });


		// () runs the innit function.
		})();

		function trustHtml(inputToBeTrusted) {
			return $sce.trustAsHtml(inputToBeTrusted);
		}

		function fetchPage(page) { 
			// Promise is a promise of data to arrive at some undefined time in the future.
			// It's a promise and we're doing things to it before it gets resolved (it's not done yet). When it's just
			// one object being passed back, it can be tied to the scope and nothing is done to it.
			// Here we get it back and need to get stuff out, so we need to do it as follows:
			pageService.getPage(page).$promise.then(function(entry) { 
				$scope.pageData = entry; 
				$scope.content = entry['content_' + languageService.getLanguage()]; 
				$scope.title = entry['title_' + languageService.getLanguage()];
			});
		}

	}

})(angular);