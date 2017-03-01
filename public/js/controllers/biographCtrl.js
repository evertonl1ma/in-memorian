angular.module("inMemorian").controller("biographCtrl", function($scope, $http, $routeParams) {
	$scope.scientist= {};
	
	$http.get("https://in-memorian.herokuapp.com/scientists/" + $routeParams.id)
	.then(function(success) { 
		$scope.scientist= success.data;
	 }, 
	 function(error) {
	 	console.log(error)
	 })
});