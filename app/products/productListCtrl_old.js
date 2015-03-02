(function () {
	angular
			.module("productManagement")
			.controller("ProductListCtrl",
						["productResource",
							ProductListCtrl]);
	
	function ProductListCtrl(productResource){
		var vm = this;

		productResource.query(function(data){
			vm.chords = data;
			console.log(vm.chords);
		});

		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		}
	}

}());