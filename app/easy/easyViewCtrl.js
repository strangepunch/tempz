(function () {
	angular
			.module("productManagement")
			.controller("EasyViewCtrl",
						["$scope",
						 "$cookies",
						 "localStorageService",
						 "tempResource",
						 "strainNamesResource",
						 "productResource",
						 "effectResource",
						 "strainResource",
							EasyViewCtrl]);
	
	function EasyViewCtrl($scope, $cookies, localStorageService, tempResource, strainNamesResource, productResource, effectResource, strainResource){
		var vm = this;

		//Store which page your where on, before going to details mode, in Local Storage/Cookie
		if(localStorageService.isSupported) {
	    	localStorageService.set('whereAmIFrom', "Med");
	    	localStorageService.set('setDetail', "Effect");
	    }else{
	    	$cookies.whereAmIFrom = "Med";
			$cookies.setDetail = "Effect";
	    }

		vm.userTempArrayU = [];
		vm.userTempArrayUC = [];
		vm.effectsEnglish = [];
		vm.dataForYou = [];
		
		//init stuff for temp display and bar and logic settings
		vm.currentTemp = 'F';
		vm.tempDisplay = 126;
		//set the ng-style of the temperature selection
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"font-size": "0.8em"};

		//set the ng-style of the mode selection
		vm.styleMed={"color":"Red","font-size": "1.1em"};
		vm.styleRec={"font-size": "0.8em"};

		//Storage space for goEasy seach
		vm.userSelect = [{"condName":"", "strnName":""}];

		//final data from strain array for user selection
		vm.withValue = [];
		vm.strainComp = [];
		//final data for effect in plain english
		vm.englishEffectName = [];
		vm.currentSelectEffNum = 0;

		//find and display selected temps
		tempResource.query(function(data){
			vm.Temps = data;
			vm.TempsF = data;
			vm.TempsC = [];
			for(var i=0; i<data.length;i++){
				vm.TempsC[i] = Math.round((data[i] - 32) * 5.0/9.0);
			}
		});

		//change temperature display numbers between F and C
		vm.countF=0;
		vm.countC=0;
		$scope.selectTemp = function(name){
			vm.currentTemp = name;
			if(name === 'C'){
				vm.styleF={"font-size": "0.8em"};
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
				vm.styleC={"font-size": "0.8em"};
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
		};
		
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
			vm.currentSelectEffNum = 0;

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
				$scope.selectedTempsComponent(vm.EffectsProductName[vm.currentSelectEffNum],vm.strainComp);
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
				$scope.selectedTempsComponent(vm.EffectsProductName[vm.currentSelectEffNum],vm.strainComp);
				vm.englishEffectName = $scope.getEnglishEffect(vm.effectProperty);

			}
			//find out if there is more than one components listed for this temperature
			if(vm.EffectsProductName.length>1){
				vm.moreThanOne = true;
			}else{
				vm.moreThanOne = false;
			}
		};
/**--------------Populate the first screen's two questions with selections-----------------**/
		//inititial list of condition names for selection
		effectResource.query(function(data){
			vm.allEffects = data;

			var num = 0;
			vm.conditionNames = [];
			for(var i=0; i<data.length; i++){
				for(var x=0; x<data[i].conditionsTreated.length; x++){
					vm.conditionNames[num] = data[i].conditionsTreated[x];
					num++;
				}
			}
		});
		//display and store the user selected condition name
		$scope.selectCondition = function(name){
	     	vm.showQ1 = !vm.showQ1; //toggle the questions display off
	     	vm.selectedCond = name;
	     	vm.userSelect[0].condName = vm.selectedCond;
	    };

	    //inititial list of strain names for selection
	    strainNamesResource.query(function(data){
			vm.strainNames = data;
		});
		//display and store the user selected strain name
		$scope.selectStrain = function(name){
	     	vm.showQ2 = !vm.showQ2; //toggle the questions display off
	     	vm.selectedStrain = name;
	     	vm.userSelect[0].strnName = vm.selectedStrain;
	    };
	    //search and filter strain names for selection
	    vm.searchAll = "";
    	$scope.searchStrain = function(name){
    		vm.searchAll = name;
    	 	switch(name){
    	 		case 'All':
    	 			vm.searchAll = "";
    	 			strainNamesResource.query(function(data){
						vm.strainNames = data;
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
					});
					break;
    	 	} 
    	};
    	//search button --- clear Search
	    $scope.clearSearch = function () {
	        vm.searchAll = "";
	    };
/**----------------------------------------------------------------------------------------**/

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

    		//clear selections
    		vm.userSelect = [{"condName":"", "strnName":""}];
    		vm.selectedCond = "";
    		vm.selectedStrain = ""; 

    		//clear data
    		vm.suggested = false;
    		vm.suggestedStains = [];
    		vm.finalSuggestedStrains = [];
    		vm.ShowStrains = false;

    		//sets the initial screen back to original setting
    		vm.currentTemp = 'F';
			vm.tempDisplay = 126;
			vm.userTempArrayU = [];
    	};

    	//the GO button
    	$scope.goEasy = function(){
    		//vm.showA1 = false;
    		//ngProgress.start();
    		//ngProgress.set(10);
    		//Hide or display the "more or less" button depend on if suggested strain button is pressed 
    		if(vm.suggested == false){
    			vm.thereIsMore = false;
    			vm.MoreStrains = 3;
				vm.MoreOrLess = false;
				vm.ShowStrains = false;
    		}else{
    			vm.MoreStrains = 3;
				vm.MoreOrLess = false;
				vm.ShowStrains = true;
    		}
    		
    		//make sure user input a medical condition
    		if(vm.userSelect[0].condName===''){
    			//alart message
    			vm.alertMsg = "Please select a medical condition."
    			vm.alert = {"color":"red"};
    			//ngProgress.complete();
    			return vm.alertMsg;
    		}

    		//hide the question screen and display solution screen
    		$scope.showAnswer = true;
			$scope.showQuestion = false;

			//---for user selected condition---//
			//ngProgress.set(20);

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
    		
    		//ngProgress.set(40);

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
			vm.productNameArrayU = vm.productNameArray.unique(); //used for suggest strains later
			
			//ngProgress.set(45);

			//change the display to reflect the lowest temp value from the user's selected condition
			if(vm.userTempArrayU != 0){
				
				if(vm.currentTemp ==='C'){
	    			vm.userTempArrayUC = [];
	    			for(var i=0; i<vm.userTempArrayU.length;i++){
						vm.userTempArrayUC[i] = Math.round((vm.userTempArrayU[i] - 32) * 5.0/9.0);
					}

					vm.tempDisplay = Array.min(vm.userTempArrayUC);
					//ngProgress.set(40);
					$scope.catching(vm.tempDisplay);

				}else{
					vm.tempDisplay = Array.min(vm.userTempArrayU);
					//ngProgress.set(40);
					$scope.catching(vm.tempDisplay);
				}

			}else{
				//ngProgress.complete();
				return vm.tempDisplay; //display does not change if there is no temp in array
			}

			//user friendly names of effect(s) treated for the user's selected condition
			vm.effectsEnglish = $scope.getEnglishEffect(vm.effectsNameArray); 

    		//---for user selected strain---//
    		//ngProgress.start();
    		vm.hasEnterStrain = false;
    		if(vm.userSelect[0].strnName != ''){
    			//ngProgress.set(50);
    			vm.hasEnterStrain = true;
    			vm.yourStrain = [];
    			//$scope.loading = true;
    			strainResource.query(function(data){

    				//$scope.loading = false;
					for(var i=0; i<data.length; i++){
						if(vm.userSelect[0].strnName == data[i].strainName){
							vm.yourStrain = data[i];
						}
					}

					//Get all components the strain you selected
					vm.strainComp = $scope.getComp(vm.yourStrain.components);
					//Get components with value over 0 for the strain you selected
					vm.withValue = $scope.getCompWithValue(vm.yourStrain.components);

					//ngProgress.set(55);
					$scope.selectedTempsComponent(vm.EffectsProductName[vm.currentSelectEffNum],vm.strainComp);
					//ngProgress.set(60);
				});
				//ngProgress.complete();

    		} else {
    			//$scope.loading = false;
    			vm.hasEnterStrain = false;
    			//ngProgress.complete();
    			//return alert("Please select a strain for better info.");
    		}
    		//ngProgress.complete();
    		

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
    	$scope.selectedTempsComponent = function (eff, arr){
    		//$scope.loading = true;
    		if(vm.hasEnterStrain != false){
    			for(var i=0; i<arr.length; i++){
    				if(eff === arr[i].name){
    					vm.dataForYou = arr[i];
    				}
    			}
    			//$scope.loading = false;
    			return;
    		}else{
    			//$scope.loading = false;
    			vm.hasEnterStrain = false
    			return;
    		}
    	};
    	//find effects treated for your condition in plain english
    	$scope.getEnglishEffect = function(effcArray){
    		var thisArray = [];
    		var num = 0;
    		//console.log("effcArray", effcArray)
    		effectResource.query(function(data){
    			for(var i=0; i<effcArray.length; i++){
    				for(var x=0; x<data.length; x++){
    					if(effcArray[i] === data[x].effectName){
    						thisArray[num] = data[x].descriptionAbbrev;
    						num++;
    					}
    				}
    			}
    			//console.log('thisArray', thisArray);
    		});

    		return thisArray;
    	};
    	
    	//highlight only the temps that is used to treat your condition
    	$scope.thisTemp = function(temp){
			if(localStorageService.isSupported) {
				switch (localStorageService.get('myTheme')){
			        case "css/beachTheme.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/movieTheme.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        case "css/khakiTheme.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/app.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        default:
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
		        }

			} else{

				switch ($cookies.myTheme){
			        case "css/beachTheme.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/movieTheme.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        case "css/khakiTheme.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/app.css":
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        default:
			            vm.hasTemp = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
		        }

			}    		

    		if(vm.currentTemp === 'F'){
	    		for(var i=0; i<vm.userTempArrayU.length; i++){
	    			if(temp === vm.userTempArrayU[i]){
	    				return vm.hasTemp;
	    			}
	    		}
    		}else if(vm.currentTemp ==='C'){
    			vm.userTempArrayUC = [];
    			for(var i=0; i<vm.userTempArrayU.length;i++){
					vm.userTempArrayUC[i] = Math.round((vm.userTempArrayU[i] - 32) * 5.0/9.0);
				}

    			for(var i=0; i<vm.userTempArrayUC.length; i++){
    				if(temp === vm.userTempArrayUC[i]){
    					return vm.hasTemp;
    				}
    			}
    		}
    		
    	};

    	//highlight the treated condition
    	$scope.thisCond = function(cond){
    		if(localStorageService.isSupported) {
				switch (localStorageService.get('myTheme')){
			        case "css/beachTheme.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/movieTheme.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        case "css/khakiTheme.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/app.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        default:
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
		        }

			} else{

				switch ($cookies.myTheme){
			        case "css/beachTheme.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/movieTheme.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        case "css/khakiTheme.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"red"};
			            break;
			        case "css/app.css":
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
			            break;
			        default:
			            vm.hasCond = {"font-weight":"bold","font-size":"1.1em","color":"yellow"};
		        }

			}
    		
			for(var i=0; i<vm.effectsEnglish.length; i++){
				if(cond === vm.effectsEnglish[i]){
					return vm.hasCond;
				}
			}
	    	
    	};

    	//For when there is more than one components listed for the same temperature
    	$scope.getNextEffect = function(num,name){
    		vm.moreThanOne = false;
 
    		vm.currentSelectEffNum = num;
			var tempArray=[];
			for(var i=0; i<vm.products.length; i++){
				if(name === vm.products[i].productName){
					  tempArray = vm.products[i].Property;
				}
			}
			//Store the array of effects for selected component under same temperature
			vm.effectProperty = tempArray;
			
    		$scope.selectedTempsComponent(vm.EffectsProductName[vm.currentSelectEffNum],vm.strainComp);
			vm.englishEffectName = $scope.getEnglishEffect(vm.effectProperty);
    	};
    	//Highlight the component that is active
    	$scope.styleEffSelected = function(dex){
    		//color setting
    		vm.makeRed = {"color":"Red","font-size": "1.1em"};
    		vm.makeNormal = {"font-size": "1.1em"};

    		switch (dex){
    			case 0:
	    			if(vm.currentSelectEffNum === dex){
	    				return vm.makeRed;
	    			}else{
	    				return vm.makeNormal;
	    			}
	    			break;
    			case 1:
	    			if(vm.currentSelectEffNum === dex){
	    				return vm.makeRed;
	    			}else{
	    				return vm.makeNormal;
	    			}
	    			break;
    			case 2:
	    			if(vm.currentSelectEffNum === dex){
	    				return  vm.makeRed;
	    			}else{
	    				return  vm.makeNormal;
	    			}
	    			break;
	    		default:
	    			vm.currentSelectEffNum = 0;
	    			return  vm.makeNormal;
	    			break;
    		}
    	};

//------find and suggest strains based one selected temp for the condition-------------//
		//The button "Need A Strain" on the first page
    	$scope.goSuggest = function(){
    		
    		//make sure user input a medical condition
    		if(vm.userSelect[0].condName===''){
    			//alert message
    			vm.alertMsg = "Please select a medical condition."
    			vm.alert = {"color":"red"};
    			return vm.alertMsg;
    		}
    		vm.suggested = true;
    		vm.ShowStrains = true; //show button on
    		vm.thereIsMore = false;

    		$scope.goEasy();
    	};

    	//The button "Show" in suggested strain in the second screen
    	vm.suggested = false;
    	$scope.getSuggestStrain = function(){
    		//ngProgress.start();
    		//$scope.loading = true;

    		//make sure somethings are hidden at the beginning
    		vm.ShowStrains = false; //show button off after it's pressed once
    		vm.noMatchMSG = "";
    		vm.thereIsMore = false;
    		vm.hasMatches = true;

    		//set the orderBy value
    		vm.orderByValue = '-matches'

    		//set the color of which filter is selected first
    		vm.active1 = {"font-weight": "bold", "color":"#009900"};
    		vm.active2 = '';
    		vm.active3 = '';
    		vm.active4 = '';
    		vm.active5 = '';
    		vm.active6 = '';

    		//ngProgress.set(30);

    		//Find strains by using components from conditions search that would treat the conditions
    		var num = 0;
    		var isMatch = 0;
    		vm.suggestedStains = [];
    		vm.finalSuggestedStrains = [];
    		strainResource.query(function(data){
    			
    			//ngProgress.set(60);

    			for (var x=0; x < data.length; x++){
    				for(var i=0; i < vm.productNameArrayU.length; i++){
    					for (var y=0; y < data[x].components.length; y++){
    						if(data[x].components[y].name === vm.productNameArrayU[i]){
    							if(data[x].components[y].value > 0){
    								isMatch++;
    							}

    						}
    					}

    				}
    				//If there is a match in the component(s) for each strain
    				if(isMatch != 0 && isMatch <= vm.productNameArrayU.length){
    					vm.suggestedStains[num] = data[x];
    					vm.finalSuggestedStrains[num] = {"matches":isMatch, "strnData":vm.suggestedStains[num]};
    					num++;
    					isMatch = 0;
    				}else{
    					isMatch = 0;
    				}
    			}
    			//$scope.loading = false;
    			//ngProgress.complete();

    			//decide if the "More" button will show or not
    			//display message for strains found or not
	    		if(vm.finalSuggestedStrains.length > 3){
	    			vm.hasMatches = true;
					//vm.ShowStrains = true;
					vm.thereIsMore = true;
				}else if(vm.finalSuggestedStrains.length === 0){
					vm.hasMatches = false;
					vm.noMatchMSG = "Sorry. No matches found."
					vm.thereIsMore = false;
					//vm.ShowStrains = false;
				}

				vm.originalData = vm.finalSuggestedStrains;

    		});

    	};

    	//display more
    	//vm.thereIsMore = false;
    	vm.MoreStrains = 3;
    	$scope.goMore = function(mode){
    		switch (mode){
    			case 'A1':
    				vm.MoreStrains = vm.originalData.length;
    				vm.MoreOrLess = true;
					break;
				case 'A2':
					vm.MoreStrains = 3;
					vm.MoreOrLess = false;
					break;
				default:
					vm.MoreStrains = 3;
					vm.MoreOrLess = false;
					break;
    		}
   
    	};

    	//filter the suggested strains
    	$scope.filterSuggestedStrains = function(choice){
    		var sortedData = [];
    		var num = 0;
    		switch (choice){
    			case 's':
    				for(var i=0;i<vm.originalData.length;i++){
    					if(vm.originalData[i].strnData.strainType === 'Sativa'){
    						sortedData[num] = vm.originalData[i];
    						num++;
    					}
    				}
    				vm.finalSuggestedStrains = sortedData;
    				vm.orderByValue = '-matches';
    				//highlight the active filter
    				vm.active1 = '';
		    		vm.active2 = {"font-weight": "bold", "color":"#009900"};
		    		vm.active3 = '';
		    		vm.active4 = '';
		    		vm.active5 = '';
		    		vm.active6 = '';
					break;
				case 'i':
					for(var i=0;i<vm.originalData.length;i++){
    					if(vm.originalData[i].strnData.strainType === 'Indica'){
    						sortedData[num] = vm.originalData[i];
    						num++;
    					}
    				}
    				vm.finalSuggestedStrains = sortedData;
    				vm.orderByValue = '-matches';
    				//highlight the active filter
    				vm.active1 = '';
		    		vm.active2 = '';
		    		vm.active3 = {"font-weight": "bold", "color":"#009900"};
		    		vm.active4 = '';
		    		vm.active5 = '';
		    		vm.active6 = '';
					break;
				case 'h':
					for(var i=0;i<vm.originalData.length;i++){
    					if(vm.originalData[i].strnData.strainType === 'Hybrid'){
    						sortedData[num] = vm.originalData[i];
    						num++;
    					}
    				}
    				vm.finalSuggestedStrains = sortedData;
    				vm.orderByValue = '-matches';
    				//highlight the active filter
    				vm.active1 = '';
		    		vm.active2 = '';
		    		vm.active3 = '';
		    		vm.active4 = {"font-weight": "bold", "color":"#009900"};
		    		vm.active5 = '';
		    		vm.active6 = '';
					break;
				case 'cbd':
					for(var i=0;i<vm.originalData.length;i++){
    					if(vm.originalData[i].strnData.components[1].name === 'CBD' && vm.originalData[i].strnData.components[1].value > 0){
    						sortedData[num] = vm.originalData[i];
    						num++;
    					}
    				}
    				vm.finalSuggestedStrains = sortedData;
    				vm.orderByValue = '-strnData.components[1].value';
    				//highlight the active filter
    				vm.active1 = '';
		    		vm.active2 = '';
		    		vm.active3 = '';
		    		vm.active4 = '';
		    		vm.active5 = {"font-weight": "bold", "color":"#009900"};
		    		vm.active6 = '';
					break;
				case 'thc':
					for(var i=0;i<vm.originalData.length;i++){
    					if(vm.originalData[i].strnData.components[0].name === 'THC9' && vm.originalData[i].strnData.components[0].value > 0){
    						sortedData[num] = vm.originalData[i];
    						num++;
    					}
    				}
    				vm.finalSuggestedStrains = sortedData;
    				vm.orderByValue = '-strnData.components[0].value';
    				//highlight the active filter
    				vm.active1 = '';
		    		vm.active2 = '';
		    		vm.active3 = '';
		    		vm.active4 = '';
		    		vm.active5 = '';
		    		vm.active6 = {"font-weight": "bold", "color":"#009900"};
					break;
				case 'all':
					vm.finalSuggestedStrains = vm.originalData;
					vm.orderByValue = '-matches';
					//highlight the active filter
					vm.active1 = {"font-weight": "bold", "color":"#009900"};
		    		vm.active2 = '';
		    		vm.active3 = '';
		    		vm.active4 = '';
		    		vm.active5 = '';
		    		vm.active6 = '';
					break;
				default:
					vm.finalSuggestedStrains = vm.originalData;
					vm.orderByValue = '-matches';
					//highlight the active filter
					vm.active1 = {"font-weight": "bold", "color":"#009900"};
		    		vm.active2 = '';
		    		vm.active3 = '';
		    		vm.active4 = '';
		    		vm.active5 = '';
		    		vm.active6 = '';
					break;
    		}

    	};

    	//toggle the questions display on/off
    	vm.toggleQuestion = function(choice){
    		switch (choice){
    			case 'Q1':
					vm.showQ1 = !vm.showQ1;
					vm.alert = "";
					vm.alertMsg = "";
					break;
				case 'Q2':
					vm.showQ2 = !vm.showQ2;
					break;
				case 'A1':
					vm.showA1 = !vm.showA1;
					break;
    		}
		};

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