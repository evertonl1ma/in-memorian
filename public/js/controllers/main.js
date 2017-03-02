angular.module("inMemorian").controller("main", function($scope, $http) {
	$scope.scientists= [];
	$scope.filtro= "";
	
	$scope.toTop= function() {
		document.body.scrollTop= 0;
	};

	$http.get("https://in-memorian.herokuapp.com/scientists")
	.then(function(success) { 
		$scope.scientists= success.data;
	 }, 
	 function(error) {
	 	console.log(error)
	 });
});
