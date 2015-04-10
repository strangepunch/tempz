(function () {
	angular
			.module("productManagement")
			.controller("EffectsViewCtrl",
						["$scope",
						 "productResource",
							EffectsViewCtrl]);
	
	function EffectsViewCtrl($scope, productResource){
		var vm = this;

		productResource.query(function(data){
			vm.products = data;
		});

		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		};

		$scope.selectEffect = function(name){
			var tempArray=[];
			for(var i=0; i<vm.products.length; i++){
				if(name === vm.products[i].productName){
					for(var x=0; x<vm.products[i].Property.length; x++){
					  tempArray[x] = vm.products[i].Property[x];
					}
				}
			}
			vm.effectProperty = tempArray;
		};
	}

}());