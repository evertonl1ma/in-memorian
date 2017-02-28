angular.module("inMemorian").factory("errorInterceptor", function($q, $location) {
	return {
		responseError: function(rejection) {
			if(rejection.status === 404) {
				$location.path("/404");
			}
			return $q.reject(rejection);
		}
	}
});