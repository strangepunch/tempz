(function () {
	angular
			.module("productManagement")
			.controller("VapeListCtrl",
						["vapeResource",
							VapeListCtrl]);
	
	function VapeListCtrl(vapeResource){
		var vm = this;

		vapeResource.query(function(data){
			vm.vapes = data;
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