(function(angular) {

	// resource: we will be doing db calls, so we need resource
	angular.module('nameApp').factory('contentService', ['$resource', contentService]);

	function contentService($resource) {

	    return {
	    	getPage: getPage
	    };

		// query vs get
		// ------------
		// query = you get an array back [...]
		// get = you get an object back {...}
		function getPage(page) {
			return $resource('./php/page/getPage.php', { pageTitle: page }).get();
		}

	}

})(angular);