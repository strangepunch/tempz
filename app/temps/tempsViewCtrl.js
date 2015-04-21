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
		$scope.orderName = '-value';
		$scope.filterName = 'Trainwreck';
		$scope.filterStrainName = function(name){
			console.log(name);
			$scope.filterName = name;
				
		}
		//init stuff for temp display and bar and logic settings
		vm.currentTemp = 'F';
		vm.tempDisplay = 126;
		//set the ng-style of the temperature selection
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};
		vm.effectProperty = [];
		//set the temperature bar
		vm.currentPosition = 6;
		vm.leftT={"color":"gray"};
		vm.rightT={"color":"black"};
		vm.selectedTemps = [];
		//effects array
		vm.EffectsProductName = [];

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
			var numX = 0;

			for(var i=0; i<vm.products.length; i++){
				if(vm.tempDisplay === vm.products[i].highTemp){
					for(var x=0; x<vm.products[i].Property.length; x++){
					  tempArray[x] = vm.products[i].Property[x];
					}
					vm.EffectsProductName[numX] = vm.products[i].productName;
				}
			}
			vm.effectProperty = tempArray;

			strainResource.query(function(data){
				vm.Strains = data;
				vm.Container = [];
				var num = 0;
				var test = 0;
				console.log(vm.EffectsProductName);
				for(var x=0; x<vm.EffectsProductName.length;x++){
					for(var i=0; i<data.length;i++){
						for(var j=0; j<data[i].components.length;j++){
							if(data[i].components[j].name === vm.EffectsProductName[x] && data[i].components[j].value > 0 ){
								vm.Container[num] = {strainId: vm.Strains[i].strainId,
										           	 strainName: vm.Strains[i].strainName,
										             conditions: vm.Strains[i].conditions,
										             comp:vm.Strains[i].components[j]};
								num++;
							}
						}				
					}
					console.log("test", test++);
					console.log("num", num);
					
				}
				console.log(vm.Container);
			});
		});

		//change between F and C
		$scope.selectTemp = function(name){
			vm.currentTemp = name;
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
			var numX = 0;
			console.log(value);
			if (vm.currentTemp === 'F'){

				for(var i=0; i<vm.products.length; i++){
					if(value === vm.products[i].highTemp){
						for(var x=0; x<vm.products[i].Property.length; x++){
							tempArray[num] = vm.products[i].Property[x];
							num++;
						}
						vm.EffectsProductName[numX] = vm.products[i].productName;
						numX++;
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
						vm.EffectsProductName[numX] = vm.products[i].productName;
						numX++;
					}
				}
				vm.effectProperty = tempArray;

			}
			
			strainResource.query(function(data){
				vm.Strains = data;
				vm.Container = [];
				var num = 0;
				var test = 0;
				console.log(vm.EffectsProductName);
				for(var x=0; x<vm.EffectsProductName.length;x++){
					for(var i=0; i<data.length;i++){
						for(var j=0; j<data[i].components.length;j++){
							if(data[i].components[j].name === vm.EffectsProductName[x] && data[i].components[j].value > 0 ){
								vm.Container[num] = {strainId: vm.Strains[i].strainId,
										           	 strainName: vm.Strains[i].strainName,
										             conditions: vm.Strains[i].conditions,
										             comp:vm.Strains[i].components[j]};
								num++;
							}
						}				
					}
					console.log("test", test++);
					console.log("num", num);
				}
				console.log(vm.Container);
			});
		}
		
	}

}());