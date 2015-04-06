(function () {
	angular
			.module("productManagement")
			.controller("EffectsViewCtrl",
						["productResource",
							EffectsViewCtrl]);
	
	function EffectsViewCtrl(productResource){
		var vm = this;

		productResource.query(function(data){
			vm.products = data;
		});

		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		}
	}

}());