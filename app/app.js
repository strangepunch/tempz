(function () {
	"use strict";
	var app = angular.module("productManagement",
							["common.services",
							 "ui.router",
							 "ui.mask",
							 "ui.bootstrap",
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

						//Products
						.state("productList", {
							url: "/products",
							templateUrl: "app/products/productListView.html",
							controller: "ProductListCtrl as vm"
						})

						.state("tips", {
							url: "/tips", //editted_Jan23_this shows "http://localhost/~sheepishkitty/UKE_A2/#/tips"
							templateUrl: "app/tips/tipView.html", //editted_Jan23
							controller: "TipListCtrl as vm"
						})

						.state("vapes", {
							url: "/vapes", 
							templateUrl: "app/vapes/vapeView.html", 
							controller: "VapeListCtrl as vm"
						})

						.state("productEdit", {
							abstract: true,
							url: "/products/edit/:productId",
							templateUrl: "app/products/productEditView.html",
							controller: "ProductEditCtrl as vm",
							resolve:{
								productResource: "productResource",

								product: function (productResource, $stateParams){
									var productId = $stateParams.productId;
									return productResource.get(
										{ productId: productId }).$promise;
								}
							}
						})

						/**nested routing states for product edit**/
						.state("productEdit.info", {
							url: "/info",
							templateUrl: "app/products/productEditInfoView.html"
						})

						.state("productEdit.price", {
							url: "/price",
							templateUrl: "app/products/productEditPriceView.html"
						})

						.state("productEdit.tags", {
							url: "/tags",
							templateUrl: "app/products/productEditTagsView.html"
						})

						.state("productDetail", {
							url: "/products/:productId",
							templateUrl: "app/products/productDetailView.html",
							controller: "ProductDetailCtrl as vm",
							resolve:{
								productResource: "productResource",

								product: function (productResource, $stateParams){
									var productId = $stateParams.productId;
									return productResource.get(
										{ productId: productId }).$promise;
								}
							}
						})

						.state("priceAnalytics" , {
							url: "/priceAnalytics",
							templateUrl:"app/prices/priceAnalyticsView.html",
							controller: "PriceAnalyticsCtrl",
							resolve:{
								productResource: "productResource",

								//get data from resource before navigating to new page
								products: function (productResource){
										return productResource.query(function(response) {
										//no code needed for success
										},
										//failure function
										function(response) {
											if (response.status == 404) {
												alert("Error accessing resource: " +
													response.config.method + " " +
													response.config.url);
											} else {
												alert(response.statusText);
											}
										}).$promise;
								}
							}
						})

				}]

	);

}());