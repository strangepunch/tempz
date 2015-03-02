(function () {
	angular
			.module("productManagement")
			.controller("ChordListCtrl",
						["productResource",
							ChordListCtrl]);
	
	function ChordListCtrl(productResource){
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