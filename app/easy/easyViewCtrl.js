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
		vm.userTempArrayU = [];
		//init stuff for temp display and bar and logic settings
		vm.currentTemp = 'F';
		vm.tempDisplay = 126;
		//set the ng-style of the temperature selection
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};

		//set the ng-style of the mode selection
		vm.styleMed={"color":"Red","font-size": "1.1em"};
		vm.styleRec={"color":"white","font-size": "0.8em"};
		vm.displayQuestion = "Choose a medical condition";

		//Storage space for goEasy seach
		vm.userSelect = [{"condName":"", "strnName":""}];

		//final data from strain array for user selection
		vm.withValue = [];
		vm.strainComp = [];
		//final data for effect in plain english
		vm.englishEffectName = [];

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

		//change styles between Med and Rec
		$scope.selectMode = function(name){
			if(name === 'Rec'){
				vm.styleMed={"color":"white","font-size": "0.8em"};
				vm.styleRec={"color":"Red","font-size": "1.1em"};

				vm.displayQuestion = "Choose a recreational effect";

			}else if(name === 'Med'){
				vm.styleMed={"color":"Red","font-size": "1.1em"};
				vm.styleRec={"color":"white","font-size": "0.8em"};

				vm.displayQuestion = "Choose a medical condition";
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
			//console.log(value);

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
				$scope.selectedTempsComponent(vm.EffectsProductName[0],vm.strainComp);
				vm.englishEffectName = $scope.getEnglishEffect(vm.effectProperty);

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
				$scope.selectedTempsComponent(vm.EffectsProductName[0],vm.strainComp);
				vm.englishEffectName = $scope.getEnglishEffect(vm.effectProperty);

			}

			console.log("vm.EffectsProductName", vm.EffectsProductName);
			console.log("vm.effectProperty", vm.effectProperty);
		}

		//inititial list of condition names for selecting
		effectResource.query(function(data){
			vm.allEffects = data;

			var num = 0;
			vm.conditionNames = [];
			for(var i=0; i<data.length; i++){
				for(var x=0; x<data[i].conditionsTreated.length; x++){
					vm.conditionNames[num] = data[i].conditionsTreated[x];
				}
				num++;
			}
			//console.log("list of conditions", vm.conditionNames);
		});
		//display and store the user selected condition name
		$scope.selectCondition = function(name){
	     	//console.log("selected condition name:", name);
	     	vm.showQ1 = !vm.showQ1; //toggle the questions display off
	     	vm.selectedCond = name;
	     	vm.userSelect[0].condName = vm.selectedCond;
	     	//console.log("vm.userSelect[0]", vm.userSelect);
	    }

	    //inititial list of strain names for selecting
	    strainNamesResource.query(function(data){
			vm.strainNames = data;
			//console.log("list of strains", vm.strainNames);
		});
		//display and store the user selected strain name
		$scope.selectStrain = function(name){
	     	//console.log("selected strain name:", name);
	     	vm.showQ2 = !vm.showQ2; //toggle the questions display off
	     	vm.selectedStrain = name;
	     	vm.userSelect[0].strnName = vm.selectedStrain;
			//console.log("vm.userSelect[0]", vm.userSelect);
	    }
	    //search and filter strains
	    vm.searchAll = "";
    	$scope.searchStrain = function(name){
    		vm.searchAll = name;
    	 	//console.log("search", name);
    	 	switch(name){
    	 		case 'All':
    	 			vm.searchAll = "";
    	 			strainNamesResource.query(function(data){
						vm.strainNames = data;
						//console.log("list of strains", vm.strainNames);
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
						//console.log("list of Sativa", vm.strainNames);
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
						//console.log("list of Indica", vm.strainNames);
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
						//console.log("list of Hybrid", vm.strainNames);
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
						//console.log("list of Seached", vm.strainNames);
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

    	//go back a step by hiding the solution screen and displaying question screen
    	$scope.showAnswer = false;
    	$scope.showQuestion = true;
    	$scope.goBack = function(){
    		$scope.showAnswer = false;
    		$scope.showQuestion = true;
    	}

    	//the GO button
    	$scope.goEasy = function(){
    		vm.showA1 = false;
    		//vm.selectedStrain
    		//vm.selectedCond
    		//vm.userSelect
    		
    		//make sure user input a medical condition
    		if(vm.userSelect[0].condName===''){
    			return alert("Please select a medical condition.");
    		}

    		//hide the question screen and display solution screen
    		$scope.showAnswer = true;
			$scope.showQuestion = false;

			//---for user selected condition---//

    		var num = 0;
    		vm.effectsNameArray = [];
    		for(var i=0; i < vm.allEffects.length; i++){
    			for(var x=0; x < vm.allEffects[i].conditionsTreated.length; x++){
    				if(vm.userSelect[0].condName === vm.allEffects[i].conditionsTreated[x]){
    					vm.effectsNameArray[num] = vm.allEffects[i].effectName;
    					num++;
    				}
    			}
    		}
    		//console.log("vm.effectsNameArray", vm.effectsNameArray)

    		var num2 = 0;
    		vm.productNameArray = [];
    		vm.userTempArray = [];
    		for(var i=0; i < vm.effectsNameArray.length; i++){
	    		for(var x=0; x < vm.products.length; x++){
	    			for(var y=0; y < vm.products[x].Property.length; y++){
	    				if(vm.effectsNameArray[i] === vm.products[x].Property[y]){
	    					vm.productNameArray[num2] = vm.products[x].productName;
    						vm.userTempArray[num2] = vm.products[x].highTemp;
    						num2++;
	    				}
	    			}
	    		}	
    		}
    		vm.userTempArrayU = vm.userTempArray.unique(); 
			vm.productNameArrayU = vm.productNameArray.unique();

			//change the display to reflect the lowest temp value from the user's selected condition
			if(vm.userTempArrayU != 0){
				vm.tempDisplay = Array.min(vm.userTempArrayU);
				$scope.catching(vm.tempDisplay);
			}else{
				return vm.tempDisplay; //display does not change if there is no temp in array
			}

			vm.effectsEnglish = $scope.getEnglishEffect(vm.effectsNameArray);

    		//console.log("vm.productNameArray", vm.productNameArray)
    		//console.log("vm.productNameArrayU",vm.productNameArrayU)

    		//console.log("vm.userTempArray", vm.userTempArray)
    		//console.log("vm.userTempArrayU",vm.userTempArrayU)

    		//console.log("$scope.showAnswer",$scope.showAnswer)

    		//---for user selected strain---//
    		vm.hasEnterStrain = false;
    		if(vm.userSelect[0].strnName != ''){
    			vm.hasEnterStrain = true;
    			vm.yourStrain = [];
    			strainResource.query(function(data){
					for(var i=0; i<data.length; i++){
						if(vm.userSelect[0].strnName == data[i].strainName){
							vm.yourStrain = data[i];
						}
					}

					console.log(vm.yourStrain);
					vm.withValue = $scope.getCompWithValue(vm.yourStrain.components);
					vm.strainComp = $scope.getComp(vm.yourStrain.components);
					console.log('vm.withValue', vm.withValue);

					$scope.selectedTempsComponent(vm.EffectsProductName[0],vm.strainComp);
				});

    		} else {
    			vm.hasEnterStrain = false;
    			return alert("Please select a strain for better info.");
    		}

    		

    	};
    	//grab the array of components from choosen strain array
    	$scope.getComp = function(obj){
    		var num = 0;
    		var	array = [];

    		for(var i=0; i<obj.length; i++){
    			
				array[num] = obj[i];
				num++;
    			
			};

			return array;
    	};
    	//reduce the array of components to only ones with value over 0
    	$scope.getCompWithValue = function(obj){
    		var num = 0;
    		var	array = [];

    		for(var i=0; i<obj.length; i++){
    			if(obj[i].value != 0){
    				array[num] = obj[i];
    				num++;
    			}
			};

			return array;
    	};
    	//look for components from this selected temperature
    	vm.dataForYou = [];
    	$scope.selectedTempsComponent = function (eff, arr){
    		if(vm.hasEnterStrain != false){
    			for(var i=0; i<arr.length; i++){
    				//console.log("eff",eff);
    				//console.log("arr[i].name",arr[i].name);
    				if(eff === arr[i].name){
    					vm.dataForYou = arr[i];
    				}
    			}
    		}else{
    			return vm.hasEnterStrain = false;
    		}
    	}
    	//find effects treated for your condition in plain english
    	$scope.getEnglishEffect = function(effcArray){
    		var thisArray = [];
    		var num = 0;
    		effectResource.query(function(data){
    			for(var i=0; i<effcArray.length; i++){
    				for(var x=0; x<data.length; x++){
    					if(effcArray[i] === data[x].effectName){
    						thisArray[num] = data[x].descriptionAbbrev;
    						num++;
    					}
    				}
    			}
    			console.log('thisArray', thisArray);
    		});

    		return thisArray;
    	}
    	//has to be equal length to begin with
    	/**
    	$scope.combineTwoEffectName = function(arr1, arr2){
    		var array=[];
    		for(var i=0; i<arr1.length; i++){
    			array[i] = arr1[i] + ' (' + arr2[i] + ')';
    		}
    		console.log('array', array);
    		return array;
    	}**/

    	//highlight only the temps that is used to treat your condition
    	$scope.thisTemp = function(temp){
    		vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
    		for(var i=0; i<vm.userTempArrayU.length; i++){
    			if(temp === vm.userTempArrayU[i]){
    				return vm.hasTemp;
    			}
    		}
    	}

    	//highlight the treated condition
    	$scope.thisCond = function(cond){
    		vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
    		for(var i=0; i<vm.effectsEnglish.length; i++){
    			if(cond === vm.effectsEnglish[i]){
    				return vm.hasCond;
    			}
    		}
    	}

    	//toggle the questions display on/off
    	vm.toggleQuestion = function(choice){
    		switch (choice){
    			case 'Q1':
    				//console.log("Q1 A");
					vm.showQ1 = !vm.showQ1;
					break;
				case 'Q2':
					//console.log("Q2");
					vm.showQ2 = !vm.showQ2;
					break;
				case 'A1':
					//console.log("Q2");
					vm.showA1 = !vm.showA1;
					break;
    		}
		}

		//researched javascript codes in dealing with arrays
    	//make array unique
    	Array.prototype.contains = function(v) {
		    for(var i = 0; i < this.length; i++) {
		        if(this[i] === v) return true;
		    }
		    return false;
		};
		Array.prototype.unique = function() {
		    var arr = [];
		    for(var i = 0; i < this.length; i++) {
		        if(!arr.contains(this[i])) {
		            arr.push(this[i]);
		        }
		    }
		    return arr; 
		};

		//find lowest value
		Array.min = function( array ){
    		return Math.min.apply( Math, array );
		};
	    
	}

}());