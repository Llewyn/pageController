(function(angular) {

	// resource: we will be doing db calls, so we need resource
	angular.module('nameApp').factory('pageService', ['$resource', pageService]);

	function pageService($resource) {

	    return {
	    	getPage: getPage
	    };

		// query vs get
		// ------------
		// query = you get an array back [...]
		// get = you get an object back {...}
		function getPage(page) {
			return $resource('/php/content/getPage.php', { pageTitle: page }).get();
		}

	}

})(angular);