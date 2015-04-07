(function () {
	angular
			.module("productManagement")
			.controller("TipListCtrl",
						["productResource",
							TipListCtrl]);
	
	function TipListCtrl(productResource){
		var vm = this;

		productResource.query(function(data){
			vm.products = data;
		});

		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		}

		vm.currentPage = 0;

		vm.nextPage = function() {
    		console.log(2);
    		console.log(vm.products.length);
    		if (vm.currentPage < vm.products.length) {
      			vm.currentPage++;
    		}
    		console.log(vm.currentPage);
    		return vm.currentPage;
  		};

  		vm.prevPage = function() {
    		console.log(2);
    		console.log(vm.products.length);
    		if (vm.currentPage > 0) {
      			vm.currentPage--;
    		}
    		console.log(vm.currentPage);
    		return vm.currentPage;
  		};
	}

}());