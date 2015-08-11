(function () {
	angular
			.module("productManagement")
			.controller("RecViewCtrl",
						["$scope",
						 "modeResource",
						 "tasteResource",
						 "strainNamesResource",
						 "productResource",
						 "strainResource",
						 "ngProgress",
							RecViewCtrl]);
	
	function RecViewCtrl($scope, modeResource, tasteResource, strainNamesResource, productResource, strainResource, ngProgress){
		var vm = this;

		//set the ng-style of the mode selection
		vm.styleMed={"color":"white","font-size": "0.8em"};
		vm.styleRec={"color":"Red","font-size": "1.1em"};

		//initiate center image for first time entry
		vm.centerImage = "1.png";
		vm.modeName = "Flavor";
		vm.discMode = "Taste";

		//Storage space for goEasy seach
		vm.userSelect = [{"condName":"", "strnName":""}];

		//setup display of questions
    	$scope.showQuestion1 = true;
    	$scope.showQuestion2 = false;
    	$scope.showQuestion3 = false;
    	$scope.showAnswer1 = false;
    	$scope.showAnswer2 = false;
    	$scope.showAnswer3 = false;
    	

		//Populate modes
		modeResource.query(function(data){
			vm.Modes = data;
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
			    	$scope.showQuestion1 = true;
    				$scope.showQuestion2 = false;
    				$scope.showQuestion3 = false;
    				$scope.showAnswer1 = false;
    				$scope.showAnswer2 = false;
    				$scope.showAnswer3 = false;
			        break;
			    case 2:
			    	vm.modeName = "Effect";
			    	vm.centerImage = "2.png";
			    	vm.discMode = "Feel";
			    	$scope.showQuestion1 = false;
    				$scope.showQuestion2 = true;
    				$scope.showQuestion3 = false;
    				$scope.showAnswer1 = false;
    				$scope.showAnswer2 = false;
    				$scope.showAnswer3 = false;
			        break;
			    case 3:
			    	vm.modeName = "Buds";
			    	vm.centerImage = "3.png";
			    	vm.discMode = "Strain";
			    	$scope.showQuestion1 = false;
    				$scope.showQuestion2 = false;
    				$scope.showQuestion3 = true;
    				$scope.showAnswer1 = false;
    				$scope.showAnswer2 = false;
    				$scope.showAnswer3 = false;
			        break;
			    case 4:
			    	vm.modeName = "Postive";
			    	vm.centerImage = "4.png";
			    	vm.discMode = "Postive";
			        break;
			    case 5:
			    	vm.modeName = "Negative";
			    	vm.centerImage = "5.png";
			    	vm.discMode = "Negative";
			        break;
			    case 6:
			    	vm.modeName = "Random";
			    	vm.centerImage = "6.png";
			    	vm.discMode = "Random";
			        break;
			    default:
			        vm.modeName = "Select Mode";
			        vm.centerImage = "1.png";
			        vm.discMode = "Select Mode";
			}

		};
/**---------Selecting answers in Flavor, Effect, Strain mode-------------**/
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
				}
			};
		};

		//inititial list of STRAIN names for selecting
	    strainNamesResource.query(function(data){
			vm.strainNames = data;
		});
		//display and store the user selected strain name
		$scope.selectStrain = function(name){
	     	vm.showQ3 = !vm.showQ3; //toggle the questions display off
	     	vm.selectedStrain = name;
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
					break;
				case 'A2':
					$scope.showAnswer2 = false;
					$scope.showQuestion2 = true;
					break;
				case 'A3':
					$scope.showAnswer3 = false;
					$scope.showQuestion3 = true;
					break;
    		}
   
    	}

    	//the GO button
    	$scope.goEasy = function(mode){

    		switch (mode){
    			case 'Q1':
    				$scope.showAnswer1 = true;
					$scope.showQuestion1 = false;
					break;
				case 'Q2':
					$scope.showAnswer2 = true;
					$scope.showQuestion2 = false;
					break;
				case 'Q3':
					$scope.showAnswer3 = true;
					$scope.showQuestion3 = false;
					break;
    		}

    	};

    	//toggle the questions display on/off
    	vm.toggleQuestion = function(choice){
    		switch (choice){
    			case 'Q1':
    				//console.log("Q1");
					vm.showQ1 = !vm.showQ1;
					break;
				case 'Q2':
					//console.log("Q2");
					vm.showQ2 = !vm.showQ2;
					break;
				case 'Q3':
					//console.log("Q2");
					vm.showQ3 = !vm.showQ3;
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