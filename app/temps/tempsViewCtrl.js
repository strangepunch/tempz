(function () {
	angular
			.module("productManagement")
			.controller("TempsViewCtrl",
						["$scope",
						 "productResource",
							TempsViewCtrl]);
	
	function TempsViewCtrl($scope, productResource){
		var vm = this;

		productResource.query(function(data){
			vm.products = data;
		});

		vm.currentTemp = 'F';
		vm.temp = 125;
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};
		vm.minTemp = 125.6;
		vm.maxTemp = 482;

		$scope.selectTemp = function(name){
			vm.currentTemp = name;

			if(name === 'C'){
				vm.temp = 52;
				vm.styleF={"color":"white","font-size": "0.8em"};
				vm.styleC={"color":"Red","font-size": "1.2em"};
				vm.minTemp = 52;
				vm.maxTemp = 250;

			}else if(name === 'F'){
				vm.temp = 125;
				vm.styleF={"color":"Red","font-size": "1.2em"};
				vm.styleC={"color":"white","font-size": "0.8em"};
				vm.minTemp = 125.6;
				vm.maxTemp = 482;

			}
		}

		$scope.catching = function(value){

			var tempArray=[];

			if (vm.currentTemp === 'F'){

				for(var i=0; i<vm.products.length; i++){

					if(value === vm.products[i].highTemp){
						for(var x=0; x<vm.products[i].Property.length; x++){
						  tempArray[x] = vm.products[i].Property[x];
						}
					}
					console.log("tempArray[x]", tempArray[x])
				}
				vm.effectProperty = tempArray;

			} else if (vm.currentTemp === 'C'){

				for(var i=0; i<vm.products.length; i++){

					if( value === vm.products[i].highTempC){
						for(var x=0; x<vm.products[i].Property.length; x++){
						  tempArray[x] = vm.products[i].Property[x];
						}
					}

				}
				vm.effectProperty = tempArray;

			}
		}
		
	}

}());