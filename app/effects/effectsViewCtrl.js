(function () {
	angular
			.module("productManagement")
			.controller("EffectsViewCtrl",
						["$scope",
						 "effectResource",
						 "productResource",
							EffectsViewCtrl]);
	
	function EffectsViewCtrl($scope, effectResource, productResource){
		var vm = this;

		vm.F = false;
		vm.C = true;
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};

		$scope.selectTemp = function(name){
			vm.currentTemp = name;

			if(name === 'C'){
				vm.F = true;
				vm.C = false;
				vm.styleF={"color":"white","font-size": "0.8em"};
				vm.styleC={"color":"Red","font-size": "1.2em"};

			}else if(name === 'F'){
				vm.F = false;
				vm.C = true;
				vm.styleF={"color":"Red","font-size": "1.2em"};
				vm.styleC={"color":"white","font-size": "0.8em"};
			}
		}

		effectResource.query(function(data){
			vm.effects = data;
		});

		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		};

		$scope.selectEffect = function(name){
			var tempArray=[];
			var num=0;

			productResource.query(function(data){
				for(var i=0; i<data.length; i++){
					for(var x=0; x<data[i].Property.length; x++){
						if(name === data[i].Property[x]){
							tempArray[num] = data[i];
							num++;
						}
					}
				}
				vm.selectedProducts = tempArray;
			});
		};
	}

}());