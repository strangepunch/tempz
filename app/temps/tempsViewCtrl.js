(function () {
	angular
			.module("productManagement")
			.controller("TempsViewCtrl",
						["$scope",
						 "tempResource",
						 "productResource",
						 "strainResource",
							TempsViewCtrl]);
	
	function TempsViewCtrl($scope, tempResource, productResource, strainResource){
		var vm = this;

		//init stuff for temp display and bar and logic settings
		vm.currentTemp = 'F';
		vm.tempDisplay = 126;
		//set the ng-style of the temperature selection
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};
		vm.effectProperty = [];

		vm.currentPosition = 6;
		vm.leftT={"color":"gray"};
		vm.rightT={"color":"black"};
		vm.selectedTemps = [];
		//find and display selected temps
		tempResource.query(function(data){
			vm.Temps = data;
			vm.TempsF = data;
			vm.TempsC = [];
			for(var i=0; i<data.length;i++){
				vm.TempsC[i] = Math.round((data[i] - 32) * 5.0/9.0);
			}
			for(var i=0; i<vm.currentPosition; i++){
				vm.selectedTemps[i] = vm.Temps[i];
			}
		});

		//for scrolling through the tbox of temperature values
		$scope.tempSlider = function(name){
			var num = 0;

			if(name === 'right'){
				if(vm.currentPosition < vm.Temps.length){
					for(var i=vm.currentPosition;i<vm.currentPosition+6;i++){
						vm.selectedTemps[num] = vm.Temps[i];
						num++;
						vm.leftT={"color":"black"};
						vm.rightT={"color":"black"};
					}
					vm.currentPosition = vm.currentPosition + 6;
				}else{
					vm.rightT={"color":"gray"};
				}
				
			}
			if(name === 'left'){
				vm.currentPosition = vm.currentPosition - 6;
				if(vm.currentPosition > 6){
					for(var i=vm.currentPosition-6;i<vm.currentPosition;i++){
						vm.selectedTemps[num] = vm.Temps[i];
						num++;
						vm.leftT={"color":"black"};
						vm.rightT={"color":"black"};
					}
				}else if (vm.currentPosition = 6){
					for(var i=0;i<vm.currentPosition;i++){
						vm.selectedTemps[num] = vm.Temps[i];
						num++;
						vm.leftT={"color":"gray"};
					}
				}
			}	


		}		

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
			if(name === 'C'){
				vm.styleF={"color":"white","font-size": "0.8em"};
				vm.styleC={"color":"Red","font-size": "1.2em"};
				vm.Temps = vm.TempsC;

				var t = vm.tempDisplay;
				var f = 0;
				if (vm.countC < 1){
					f = Math.round((t - 32) * 5.0/9.0);
					vm.tempDisplay = f;
					vm.countC=1;
					vm.countF=0;
				}
			
			}else if(name === 'F'){
				vm.styleF={"color":"Red","font-size": "1.2em"};
				vm.styleC={"color":"white","font-size": "0.8em"};
				vm.Temps = vm.TempsF;

				var t = vm.tempDisplay;
				var f = 0;
				if (vm.countF < 1){
					f = Math.round(t * 9.0 / 5.0 + 32);
					vm.tempDisplay = f;
					vm.countF=1;
					vm.countC=0;
				}
				
			}
			var num = 0;
			if(vm.currentPosition > 6){
				for(var i=vm.currentPosition-6;i<vm.currentPosition;i++){
					vm.selectedTemps[num] = vm.Temps[i];
					num++;
					vm.leftT={"color":"black"};
					vm.rightT={"color":"black"};
				}
			}else if (vm.currentPosition = 6){
				for(var i=0;i<vm.currentPosition;i++){
					vm.selectedTemps[num] = vm.Temps[i];
					num++;
					vm.leftT={"color":"gray"};
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

		strainResource.query(function(data){
			vm.Strains = data;
			console.log(vm.Strains[0].components);
			var name = 'CBD';
			if(vm.Strains[0].components.CBD > 0)
			{
				console.log('yes');
			}
		});
		
	}

}());