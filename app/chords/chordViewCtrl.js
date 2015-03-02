(function () {
	angular
			.module("productManagement")
			.controller("chordViewCtrl",
						["chordResource",
							ChordViewCtrl]);
	
	function ChordViewCtrl(chordResource){
		var vm = this;

		chordResource.query(function(data){
			vm.chords = data;
		});

		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		}
	}

}());