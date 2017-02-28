angular.module("inMemorian").config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when("/home", {
		templateUrl: "view/scientist.html",
		controller: "inMemorianCtrl"
	});

	$routeProvider.when("/biograph/:id", {
		templateUrl: "view/biograph.html",
		controller: "biographCtrl"
	});

	$routeProvider.when("/teste", {
		templateUrl: "view/teste.html",
		controller: "inMemorianCtrl"
	});

	$routeProvider.when("/404", {
		templateUrl: "view/404.html"
	});

	$routeProvider.otherwise({redirectTo: "/home"});
});