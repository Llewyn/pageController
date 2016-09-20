(function(angular) {

	angular.module('nameApp').factory('languageService', [languageService]);

	function languageService() {
		
		var language = 'nl';	
		
		var service = {
			setLanguage: function(newLanguage) { language = newLanguage; },
			getLanguage: function() { return language; }
		};

		return service;
	}

})(angular);