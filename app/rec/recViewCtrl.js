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
			        break;
			    case 2:
			    	vm.modeName = "Effect";
			    	vm.centerImage = "2.png";
			    	vm.discMode = "Feel";
			        break;
			    case 3:
			    	vm.modeName = "Buds";
			    	vm.centerImage = "3.png";
			    	vm.discMode = "Strain";
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

		//Populate flavor selection display
		tasteResource.query(function(data){
			vm.tasteList = data;
		});
		//select a taste
		$scope.selectTaste = function(name){
			vm.selectedTaste = name;
			for (var i = 0; i<vm.tasteList.length; i++){
				if(vm.tasteList[i].taste === name){
					vm.centerImage = vm.tasteList[i].imageUrl;
					vm.modeName = vm.tasteList[i].taste;
				}
			};
			vm.showQ1 = !vm.showQ1; 
		};

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
    	$scope.showAnswer = false;
    	$scope.showQuestion = true;
    	$scope.goBack = function(){
    		$scope.showAnswer = false;
    		$scope.showQuestion = true;
    	}

    	//the GO button
    	$scope.goEasy = function(){
    		vm.showA1 = false;

    		//hide the question screen and display solution screen
    		$scope.showAnswer = true;
			$scope.showQuestion = false;

    	};

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