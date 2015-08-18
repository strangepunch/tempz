(function () {
	"use strict";
	var app = angular.module("productManagement",
							["common.services",
							 "ui.router",
							 "ui.mask",
							 "ui.bootstrap",
							 "ui.slider",
							 "ui.unique",
							 "ngProgress",
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

						//Simple
						.state("easy", {
							url: "/easy",
							templateUrl: "app/easy/easyView.html",
							controller: "EasyViewCtrl as vm"
						})

						//Simple Rec
						.state("rec", {
							url: "/rec",
							templateUrl: "app/rec/recView.html",
							controller: "RecViewCtrl as vm"
						})

						/**
						//Main
						.state("main", {
							url: "/main",
							templateUrl: "app/mainView.html",
							controller: "TempsViewCtrl as vm"
						})

						//Temps
						.state("main.temps", {
							url: "/temps",
							templateUrl: "app/temps/tempsView.html",
							controller: "TempsViewCtrl as vm"
						})

						//Conditions
						.state("main.conditions", {
							url: "/conditions",
							templateUrl: "app/conditions/conditionsView.html",
							controller: "ConditionsViewCtrl as vm"
						})

						//Effects
						.state("main.effects", {
							url: "/effects",
							templateUrl: "app/effects/effectsView.html",
							controller: "EffectsViewCtrl as vm"
						})

						//Strains
						.state("main.strains", {
							url: "/strains",
							templateUrl: "app/strains/strainsView.html",
							controller: "StrainsViewCtrl as vm"
						})
						
						//Vapes - main
						.state("tipsView", {
							url: "/tips",
							templateUrl: "app/tips/tipView.html",
							controller: "TipViewCtrl as vm"
						})
						**/

						//Strains - detailed
						.state("strainDetails", {
							url: "/details/:strainId",
							templateUrl: "app/details/strainDetail.html",
							controller: "StrainDetailCtrl as vm",
							
							resolve:{
								strainResource: "strainResource",

								strain: function (strainResource, $stateParams){
									var strainId = $stateParams.strainId;
									//console.log($stateParams);
									return strainResource.get(
										{ strainId: strainId }).$promise;
								}
							}
							
						})
						
						//Theme
						.state("themes", {
							url: "/themes",
							templateUrl: "app/themes/themesView.html",
						})

				}]

	);

}());