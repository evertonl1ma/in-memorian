angular.module("minhasDiretivas", [])
.directive("meuPainel", function() {
	var ddo= {};

	ddo.restrict= "AE";
	ddo.scope= {
		action: "&",
		nome: "@",
		id: "@",
		src: "@"
	}
	ddo.transclude= true;
	ddo.templateUrl= "./view/minha-diretiva.html"; 

	return ddo;	
})