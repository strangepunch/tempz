(function () {
	angular
			.module("productManagement")
			.controller("EasyViewCtrl",
						["$scope",
						 "tempResource",
						 "strainNamesResource",
						 "productResource",
						 "effectResource",
						 "strainResource",
						 "ngProgress",
							EasyViewCtrl]);
	
	function EasyViewCtrl($scope, tempResource, strainNamesResource, productResource, effectResource, strainResource, ngProgress){
		var vm = this;

		//init stuff for temp display and bar and logic settings
		vm.currentTemp = 'F';
		vm.tempDisplay = 126;
		//set the ng-style of the temperature selection
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};

		//find and display selected temps
		tempResource.query(function(data){
			vm.Temps = data;
			vm.TempsF = data;
			vm.TempsC = [];
			for(var i=0; i<data.length;i++){
				vm.TempsC[i] = Math.round((data[i] - 32) * 5.0/9.0);
			}
		});

		//change between F and C
		vm.countF=0;
		vm.countC=0;
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
		}

		
		//name of the component(s) for selected temperature
		vm.EffectsProductName = [];
		//list of medical effects for each components for selected temperature
		vm.effectProperty = [];
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
		
		});

		//find effects using either F or C temp
		$scope.catching = function(value){
			vm.tempDisplay = value;
			vm.countF=0;
			vm.countC=0;
			var tempArray=[];
			var num = 0;
			var numX = 0;
			console.log(value);

			//get component name and list of medical effects
			if (vm.currentTemp === 'F'){

				vm.EffectsProductName = [];

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

				vm.EffectsProductName = [];

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
		}

		//inititial list of condition names for selecting
		effectResource.query(function(data){
			var num = 0;
			vm.conditionNames = [];
			for(var i=0; i<data.length; i++){
				for(var x=0; x<data[i].conditionsTreated.length; x++){
					vm.conditionNames[num] = data[i].conditionsTreated[x];
				}
				num++;
			}
			console.log("list of conditions", vm.conditionNames);
		});
		//display and store the user selected condition name
		$scope.selectCondition = function(name){
	     	console.log("selected condition name:", name);
	     	vm.selectedCond = name;
	    }

	    //inititial list of strain names for selecting
	    strainNamesResource.query(function(data){
			vm.strainNames = data;
			console.log("list of strains", vm.strainNames);
		});
		//display and store the user selected strain name
		$scope.selectStrain = function(name){
	     	console.log("selected strain name:", name);
	     	vm.selectedStrain = name;
	    }
	    //search and filter strains
	    vm.searchAll = "";
    	$scope.searchStrain = function(name){
    		vm.searchAll = name;
    	 	console.log("search", name);
    	 	switch(name){
    	 		case 'All':
    	 			vm.searchAll = "";
    	 			strainNamesResource.query(function(data){
						vm.strainNames = data;
						console.log("list of strains", vm.strainNames);
					});
					break;	
    	 		case 'Sativa':
    	 			vm.searchAll = "";
    	 			strainNamesResource.query(function(data){
    	 				var num = 0;
    	 				vm.strainNames = [];
    	 				for(var i=0; i<data.length; i++){
    	 					if(data[i].strainType === 'Sativa'){
    	 						vm.strainNames[num] = data[i];
    	 						num++;
    	 					}
    	 				}
						console.log("list of Sativa", vm.strainNames);
					});
					break;	   
				case 'Indica':
					vm.searchAll = ""; 
					strainNamesResource.query(function(data){
    	 				var num = 0;
    	 				vm.strainNames = [];
    	 				for(var i=0; i<data.length; i++){
    	 					if(data[i].strainType === 'Indica'){
    	 						vm.strainNames[num] = data[i];
    	 						num++;
    	 					}
    	 				}
						console.log("list of Indica", vm.strainNames);
					});
					break;	
				case 'Hybrid':
					vm.searchAll = "";
					strainNamesResource.query(function(data){
    	 				var num = 0;
    	 				vm.strainNames = [];
    	 				for(var i=0; i<data.length; i++){
    	 					if(data[i].strainType === 'Hybrid'){
    	 						vm.strainNames[num] = data[i];
    	 						num++;
    	 					}
    	 				}
						console.log("list of Hybrid", vm.strainNames);
					});
					break;	
				default:
        			strainNamesResource.query(function(data){
        				var num = 0;
    	 				vm.strainNames = [];
    	 				for(var i=0; i<data.length; i++){
    	 					if(data[i].strainName == name){
    	 						vm.strainNames[num] = data[i];
    	 						num++;
    	 					}
    	 				}
						console.log("list of Seached", vm.strainNames);
					});
					break;
    	 	} 
    	};
    	//search button --- clear Search
	    $scope.clearSearch = function () {
	        vm.searchAll = "";
	    };


		//this sets the ng-class to active
		$scope.active = function(item){

    		switch(item) {
			    case vm.tempDisplay:
				    if(item < 351){
				    	return "active";
				    }else{
				    	return "active2";
				    }
			        break;
			    default:
			        return "!active";
			}
			
    	};

    	


	     
		
	}

}());