(function () {
	angular
			.module("productManagement")
			.controller("TempsViewCtrl",
						["$scope",
						 "tempResource",
						 "productResource",
							TempsViewCtrl]);
	
	function TempsViewCtrl($scope, tempResource, productResource){
		var vm = this;

		//init stuff for temp display and bar and logic settings
		vm.currentTemp = 'F';
		vm.tempDisplay = 126;
		vm.blah = 52;
		vm.countF=0;
		vm.countC=0;
		//set the ng-style of the temperature selection
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};
		vm.effectProperty = [];

		//find and display selected temps
		tempResource.query(function(data){
			vm.Temps = data;
			vm.selectedTemps = vm.Temps;
			$scope.numLimit = vm.Temps.length/2;
		});
		//initial first effect for set temperature
		productResource.query(function(data){
			vm.products = data;
			var tempArray=[];

			for(var i=0; i<vm.products.length; i++){
				if(vm.tempDisplay === vm.products[i].highTemp){
					for(var x=0; x<vm.products[i].Property.length; x++){
					  tempArray[x] = vm.products[i].Property[x];
					}
				}
			}
			vm.effectProperty = tempArray;
		});

		//change between F and C
		$scope.selectTemp = function(name){
			vm.currentTemp = name;
			var tempArray = [];
			if(name === 'C'){
				var t = vm.tempDisplay;
				var f = 0;
				vm.styleF={"color":"white","font-size": "0.8em"};
				vm.styleC={"color":"Red","font-size": "1.2em"};
				for(var i=0; i<vm.Temps.length;i++){
					tempArray[i] = Math.round((vm.Temps[i] - 32) * 5.0/9.0);
				}
				vm.selectedTemps = tempArray;
				
				if (vm.countC < 1){
					f = Math.round((t - 32) * 5.0/9.0);
					vm.tempDisplay = f;
					vm.countC=1;
					vm.countF=0;
				}
				
				
			}else if(name === 'F'){
				var t = vm.tempDisplay;
				var f = 0;

				vm.styleF={"color":"Red","font-size": "1.2em"};
				vm.styleC={"color":"white","font-size": "0.8em"};
				for(var i=0; i<vm.Temps.length;i++){
					tempArray[i] = vm.Temps[i];
				}
				vm.selectedTemps = tempArray;
				if (vm.countF < 1){
					f = Math.round(t * 9.0 / 5.0 + 32);
					vm.tempDisplay = f;
					vm.countF=1;
					vm.countC=0;
				}
				
			}
		}

		//find effects using either F or C temp
		$scope.catching = function(value){
			vm.tempDisplay = value;
			vm.countF=0;
			vm.countC=0;
			var tempArray=[];
			var num = 0;
			if (vm.currentTemp === 'F'){

				for(var i=0; i<vm.products.length; i++){
					if(value === vm.products[i].highTemp){
						for(var x=0; x<vm.products[i].Property.length; x++){
							tempArray[num] = vm.products[i].Property[x];
							num++;
						}
					}
				}
				vm.effectProperty = tempArray;

			} else if (vm.currentTemp === 'C'){

				for(var i=0; i<vm.products.length; i++){

					if( value === vm.products[i].highTempC){
						for(var x=0; x<vm.products[i].Property.length; x++){
						  tempArray[num] = vm.products[i].Property[x];
						  num++;
						}
					}
				}
				vm.effectProperty = tempArray;

			}
		}
		
	}

}());