(function () {
	angular
			.module("productManagement")
			.controller("RecViewCtrl",
						["$scope",
						 "modeResource",
						 "tasteResource",
						 "recEffectResource",
						 "strainNamesResource",
						 "productResource",
						 "strainResource",
						 "ngProgress",
							RecViewCtrl]);
	
	function RecViewCtrl($scope, modeResource, tasteResource, recEffectResource, strainNamesResource, productResource, strainResource, ngProgress){
		var vm = this;

		//set the ng-style of the mode selection
		vm.styleMed={"color":"white","font-size": "0.8em"};
		vm.styleRec={"color":"Red","font-size": "1.1em"};

		//initiate center image for first time entry
		vm.centerImage = "1.png";
		vm.modeName = "Flavor";
		vm.discMode = "Taste";
		vm.taste = true;
		vm.strain = false;
		vm.effect = false;
		/**------maybe write a function to check if it's coming back from detail screen
			and populating these above with previous info---------------------------**/

		//Storage space for goEasy seach
		//vm.userSelect = [{"condName":"", "strnName":""}];

		//setup display of questions
    	$scope.showQuestion1 = true;
    	$scope.showQuestion2 = false;
    	$scope.showQuestion3 = false;
    	$scope.showAnswer1 = false;
    	$scope.showAnswer2 = false;
    	$scope.showAnswer3 = false;
    	
    	//make sure they select something
    	vm.selectedSomething = 0;

    	//initial display of strains limited to 3
    	vm.MoreStrains = 3;
    	vm.thereIsMore = false;

		//Populate modes
		modeResource.query(function(data){
			vm.Modes = data;
			vm.ModeT = [data[3],data[4],data[5]];
			vm.ModeS = [data[6],data[7],data[8]];
			vm.ModeE = [data[9],data[10],data[11]];
			vm.currentMode = vm.Modes[0]; //initiate mode
		});

		//select a mode
		$scope.selectMode = function(mode){
			vm.currentMode = mode;
			switch(mode) {
			    case 1:
			    	vm.modeName = "Flavor";
			    	vm.centerImage = "1.png";
			    	vm.discMode = "Taste";
			    	vm.taste = true;
					vm.strain = false;
					vm.effect = false;
			    	$scope.showQuestion1 = true;
    				$scope.showQuestion2 = false;
    				$scope.showQuestion3 = false;
    				$scope.showAnswer1 = false;
    				$scope.showAnswer2 = false;
    				$scope.showAnswer3 = false;
    				vm.selectedSomething = 0;
    				vm.selectedTaste = null;
    				vm.strainSuggestions=[];
    				vm.tasteTemp = -1;
    				vm.strainT = "";
					vm.effectT="";
			        break;
			    case 2:
			    	vm.modeName = "Effect";
			    	vm.centerImage = "2.png";
			    	vm.discMode = "Feel";
			    	vm.taste = false;
					vm.strain = false;
					vm.effect = true;
			    	$scope.showQuestion1 = false;
    				$scope.showQuestion2 = true;
    				$scope.showQuestion3 = false;
    				$scope.showAnswer1 = false;
    				$scope.showAnswer2 = false;
    				$scope.showAnswer3 = false;
    				vm.selectedSomething = 0;
    				vm.selectedEffect = null;
    				vm.strainSuggestions=[];
    				vm.tasteTemp = -1;
    				vm.strainT = "";
					vm.effectT="";
			        break;
			    case 3:
			    	vm.modeName = "Buds";
			    	vm.centerImage = "3.png";
			    	vm.discMode = "Strain";
			    	vm.taste = false;
					vm.strain = true;
					vm.effect = false;
			    	$scope.showQuestion1 = false;
    				$scope.showQuestion2 = false;
    				$scope.showQuestion3 = true;
    				$scope.showAnswer1 = false;
    				$scope.showAnswer2 = false;
    				$scope.showAnswer3 = false;
    				vm.selectedSomething = 0;
    				vm.selectedStrain = null;
    				vm.strainSuggestions=[];
    				vm.tasteTemp = -1;
    				vm.strainT = "";
					vm.effectT="";
			        break;
			    default:
			        vm.modeName = "Select Mode";
			        vm.centerImage = "1.png";
			        vm.discMode = "Select Mode";
			}

		};


/**---------Selecting answers in Flavor, Effect, Strain mode-------------**/
/**---------Flavor Mode-------------**/
		//Populate FLAVOR selection display
		tasteResource.query(function(data){
			vm.tasteList = data;
		});
		//select a taste
		$scope.selectTaste = function(name){
			vm.showQ1 = !vm.showQ1; //toggle the questions display off
			vm.selectedTaste = name;
			for (var i = 0; i<vm.tasteList.length; i++){
				if(vm.tasteList[i].taste === name){
					vm.centerImage = vm.tasteList[i].imageUrl;
					vm.modeName = vm.tasteList[i].taste;
					vm.tasteTemp = vm.tasteList[i].tempF;
				}
			};
			vm.selectedSomething = 1;
		};
/**---------Effect Mode-------------**/
		//Populate EFFECT selection display
		recEffectResource.query(function(data){
			var num = 0;
			vm.recEffectList = [];
			for(var i=0; i<data.length; i++){
				if(data[i].recEffectType === 'P'){
					vm.recEffectList[num] = data[i];
					num++;
					vm.postiveStyle = {"color":"green"};
				}
			}
		});
		//select an effect 
		$scope.selectEffect = function(name){
			vm.showQ2 = !vm.showQ2; //toggle the questions display off
			vm.selectedEffect = name;
			for (var i = 0; i<vm.recEffectList.length; i++){
				if(vm.recEffectList[i].recEffectName === name){
					vm.centerImage = vm.recEffectList[i].imageUrl;
					vm.modeName = vm.recEffectList[i].recEffectName;
					vm.effectT = vm.recEffectList[i].recEffectTempRange;
					vm.selectedEffectType = vm.recEffectList[i].recEffectType;
					//console.log("vm.effectT", vm.effectT)
				}
			};
			vm.selectedSomething = 1;
		};
		//search and filter effects
	    vm.searchAll = "";
    	$scope.searchEffect = function(name){
    		vm.searchAll = name;
    	 	switch(name){
    	 		case 'All':
    	 			vm.searchAll = "";
    	 			recEffectResource.query(function(data){
						vm.recEffectList = data;
					});
					vm.postiveStyle = {"color":"white"};
					break;	
    	 		case 'Positive':
    	 			vm.searchAll = "";
    	 			recEffectResource.query(function(data){
    	 				var num = 0;
						vm.recEffectList = [];
						for(var i=0; i<data.length; i++){
    	 					if(data[i].recEffectType === 'P'){
    	 						vm.recEffectList[num] = data[i];
    	 						num++;
    	 					}
    	 				}
					});
					vm.postiveStyle = {"color":"green"};
					break;	   
				case 'Negative':
					vm.searchAll = "";
    	 			recEffectResource.query(function(data){
    	 				var num = 0;
						vm.recEffectList = [];
						for(var i=0; i<data.length; i++){
    	 					if(data[i].recEffectType === 'N'){
    	 						vm.recEffectList[num] = data[i];
    	 						num++;
    	 					}
    	 				}
					});
					break;	
    	 	} 
    	};
/**---------Strain Mode-------------**/
		//inititial list of STRAIN names for selecting
	    strainNamesResource.query(function(data){
			vm.strainNames = data;
		});
		//display and store the user selected strain name
		$scope.selectStrain = function(name){
	     	vm.showQ3 = !vm.showQ3; //toggle the questions display off
	     	vm.selectedStrain = name;
	     	vm.selectedSomething = 1;
	     	for(var i=0; i<vm.strainNames.length; i++){
	     		if(vm.strainNames[i].strainName === name){
	     			vm.strainT = vm.strainNames[i].strainType;
	     		}
	     	}
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
/**---------Selecting answers in Flavor, Effect, Strain mode END------------**/

/**---------SEARCH FUNCTION for Flavor, Effect, Strain mode------------**/
		//Flavor
		$scope.searchForTaste = function (Flavor){
			strainResource.query(function(data){
				ngProgress.complete();
				var num = 0;
 				vm.strainSuggestions = [];
 				for(var i=0; i<data.length; i++){
 					for(var x=0; x<data[i].taste.length; x++){
 						if(data[i].taste[x] === Flavor){
 							vm.strainSuggestions[num] = data[i];
 							num++;
 						}
 					}
 				}
 				
 				if(vm.strainSuggestions.length > 3){
	    			vm.thereIsMore = true;
	    		}else{
	    			vm.thereIsMore = false;	
	    		}
				//console.log("list of Seached", vm.strainSuggestions);
			});

		};
		//Effect
		$scope.searchForFeel = function (Effect,Type){
			strainResource.query(function(data){
				ngProgress.complete();
				var num = 0;
 				vm.strainSuggestions = [];
 				if(Type === "N"){
 					for(var i=0; i<data.length; i++){
	 					for(var x=0; x<data[i].negativeEffects.length; x++){
	 						if(data[i].negativeEffects[x] === Effect){
	 							vm.strainSuggestions[num] = data[i];
	 							num++;
	 						}
	 					}
	 				}
 				}else{
 					for(var i=0; i<data.length; i++){
	 					for(var x=0; x<data[i].positiveEffects.length; x++){
	 						if(data[i].positiveEffects[x] === Effect){
	 							vm.strainSuggestions[num] = data[i];
	 							num++;
	 						}
	 					}
	 				}
 				}
 				if(vm.strainSuggestions.length > 3){
	    			vm.thereIsMore = true;
	    		}else{
	    			vm.thereIsMore = false;	
	    		}
				//console.log("list of Seached", vm.strainSuggestions);
			});

		};
		//Strain
		$scope.searchForBud = function (Strain){
			strainResource.query(function(data){
				ngProgress.complete();
				var num = 0;
 				vm.strainSuggestions = [];
 				for(var i=0; i<data.length; i++){
					if(data[i].strainName === Strain){
						vm.strainSuggestions[num] = data[i];
						num++;
					}
 				}

 				if(vm.strainSuggestions.length > 3){
	    			vm.thereIsMore = true;
	    		}else{
	    			vm.thereIsMore = false;	
	    		}
			});

		};
/**---------SEARCH FUNCTION for Flavor, Effect, Strain mode END------------**/

		//this sets the ng-class to active
		$scope.active = function(item){

    		switch(item) {
			    case vm.currentMode:
				    if(item < 4){
				    	return "active";
				    }else{
				    	return "active2";
				    }
			        break;
			    case 'Lo':
			    	if(vm.tasteTemp != -1 && vm.tasteTemp <= 365){
			    		return "active2";
			    	}
			    	else if(vm.effectT === 'Lo'){
			    		return "active2";
			    	}
			    	break;
			    case 'Md':
			    	if(365 < vm.tasteTemp && vm.tasteTemp < 392){
			    		return "active2";
			    	}
			    	else if(vm.effectT === 'Md'){
			    		return "active2";
			    	}
			    	break;
			    case 'Hi':
			    	if(vm.tasteTemp >= 392){
			    		return "active2";
			    	}
			    	else if(vm.effectT === 'Hi'){
			    		return "active2";
			    	}
			    	break;
			    case 'i':
			    	if(vm.strainT === 'Indica'){
			    		return "active2";
			    	}
			    	break;
			    case 's':
			    	if(vm.strainT === 'Sativa'){
			    		return "active2";
			    	}
			    	break;
			    case 'h':
			    	if(vm.strainT === 'Hybrid'){
			    		return "active2";
			    	}
			    	break;
			    default:
			        return "!active";
			}
			
    	};
    	
    	//go back a step by hiding the solution screen and displaying question screen
    	$scope.goBack = function(mode){

    		switch (mode){
    			case 'A1':
    				$scope.showAnswer1 = false;
					$scope.showQuestion1 = true;
					vm.selectedSomething = 0;
    				vm.selectedTaste = null;
    				vm.strainSuggestions=[];
    				vm.MoreOrLess = false;
    				vm.thereIsMore = false;
					break;
				case 'A2':
					$scope.showAnswer2 = false;
					$scope.showQuestion2 = true;
					vm.selectedSomething = 0;
    				vm.selectedEffect = null;
    				vm.strainSuggestions=[];
    				vm.MoreOrLess = false;
    				vm.thereIsMore = false;
					break;
				case 'A3':
					$scope.showAnswer3 = false;
					$scope.showQuestion3 = true;
					vm.selectedSomething = 0;
    				vm.selectedStrain = null;
    				vm.strainSuggestions=[];
    				vm.MoreOrLess = false;
    				vm.thereIsMore = false;
					break;
    		}
   
    	}

    	//display more
    	$scope.goMore = function(mode){

    		switch (mode){
    			case 'A1':
    				vm.MoreStrains = vm.strainSuggestions.length;
    				vm.MoreOrLess = true;
					break;
				case 'A2':
					vm.MoreStrains = vm.strainSuggestions.length;
					vm.MoreOrLess = true;
					break;
				case 'A3':
					vm.MoreStrains = vm.strainSuggestions.length;
					vm.MoreOrLess = true;
					break;
				default:
					vm.MoreStrains = 3;
					vm.MoreOrLess = false;
					break;
    		}
   
    	}

    	//the GO button
    	$scope.goEasy = function(mode){

    		//make sure user input a medical condition
    		if(vm.selectedSomething === 0){
    			vm.alert = {"color":"red"};
    			return vm.alertMsg = "Please select something.";
    		};

    		switch (mode){
    			case 'Q1':
    				ngProgress.start();
    				vm.MoreStrains = 3;
    				$scope.showAnswer1 = true;
					$scope.showQuestion1 = false;
					$scope.searchForTaste(vm.selectedTaste);
					break;
				case 'Q2':
					ngProgress.start();
					vm.MoreStrains = 3;
					$scope.showAnswer2 = true;
					$scope.showQuestion2 = false;
					$scope.searchForFeel(vm.selectedEffect,vm.selectedEffectType);
					break;
				case 'Q3':
					ngProgress.start();
					vm.MoreStrains = 3;
					$scope.showAnswer3 = true;
					$scope.showQuestion3 = false;
					$scope.searchForBud(vm.selectedStrain);
					break;
    		}

    	};

    	//toggle the questions display on/off
    	vm.toggleQuestion = function(choice){
    		switch (choice){
    			case 'Q1':
    				//console.log("Q1");
					vm.showQ1 = !vm.showQ1;
					vm.alert = {"color":"white"};
					vm.alertMsg = "";
					break;
				case 'Q2':
					//console.log("Q2");
					vm.showQ2 = !vm.showQ2;
					vm.alert = {"color":"white"};
					vm.alertMsg = "";
					break;
				case 'Q3':
					//console.log("Q2");
					vm.showQ3 = !vm.showQ3;
					vm.alert = {"color":"white"};
					vm.alertMsg = "";
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