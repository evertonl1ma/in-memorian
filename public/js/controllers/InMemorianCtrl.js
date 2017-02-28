angular.module("inMemorian").controller("inMemorianCtrl", function($scope, $http) {
	$scope.scientists= [];
	$scope.filtro= "";
	
	$scope.toTop= function() {
		document.body.scrollTop= 0;
	};

	$http.get("/scientists")
	.then(function(success) { 
		$scope.scientists= success.data;
	 }, 
	 function(error) {
	 	console.log(error)
	 });
});