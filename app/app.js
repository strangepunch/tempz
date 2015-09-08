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
							 "ngCookies",
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

						//Strains - detailed
						.state("strainDetails", {
							url: "/details/:strainId",
							templateUrl: "app/details/strainDetail.html",
							controller: "StrainDetailCtrl as vm",
							
							resolve:{
								strainResource: "strainResource",

								strain: function (strainResource, $stateParams){
									var strainId = $stateParams.strainId;
									
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