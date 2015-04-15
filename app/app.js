(function () {
	"use strict";
	var app = angular.module("productManagement",
							["common.services",
							 "ui.router",
							 "ui.mask",
							 "ui.bootstrap",
							 "ui.slider",
							 "ui.unique",
							 "angularCharts",
							 "productResourceMock"]);
	//error handling
	app.config(function($provide){
		$provide.decorator("$exceptionHandler",
			["$delegate",
				function ($delegate) {
					return function (exception, cause) {
						exception.message = "Please contact the help deak! \n Message: " + exception.message;

						$delegate(exception, cause);
						alert(exception.message);
					};
				}]);
	});
// custom  buttons here
//productManagement.directive("deleteButton", StrangePunch.Bootstrap.DeleteButton);
//productManagement.directive("addButton", StrangePunch.Bootstrap.AddButton);


	app.config(["$stateProvider", "$urlRouterProvider",
				
				function ($stateProvider, $urlRouterProvider) {
					
					//default route provider
					$urlRouterProvider.otherwise("/");

					$stateProvider

						//Home
						.state("home", {
							url: "/",
							templateUrl: "app/welcomeView.html",
						})

						//Temps
						.state("temps", {
							url: "/temps",
							templateUrl: "app/temps/tempsView.html",
							controller: "TempsViewCtrl as vm"
						})

						//Conditions
						.state("conditions", {
							url: "/conditions",
							templateUrl: "app/conditions/conditionsView.html",
						})

						//Effects
						.state("effects", {
							url: "/effects",
							templateUrl: "app/effects/effectsView.html",
							controller: "EffectsViewCtrl as vm"
						})

						//Strains
						.state("strains", {
							url: "/strains",
							templateUrl: "app/strains/strainsView.html",
						})

						//Cannabinoids
						.state("tipsView", {
							url: "/tips",
							templateUrl: "app/tips/tipView.html",
							controller: "TipViewCtrl as vm"
						})

						.state("tipsList", {
							url: "/tips/:tipId",
							templateUrl: "app/tips/tipList.html",
							controller: "TipListCtrl as vm",
							
							resolve:{
								tipResource: "tipResource",

								tip: function (tipResource, $stateParams){
									var tipId = $stateParams.tipId;
									console.log($stateParams);
									return tipResource.get(
										{ tipId: tipId }).$promise;
								}
							}
							
						})
						//Vapes
						.state("vapes", {
							url: "/vapes", 
							templateUrl: "app/vapes/tipView.html", 
							controller: "TipListCtrl as vm"
						})

						//Theme
						.state("themes", {
							url: "/themes",
							templateUrl: "app/themes/themesView.html",
						})

				}]

	);

}());