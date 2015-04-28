(function () {
	angular
			.module("productManagement")
			.controller("StrainsViewCtrl",
						["$scope",
						 "strainResource",
						 "productResource",
							StrainsViewCtrl]);
	
	function StrainsViewCtrl($scope, strainResource, productResource){
		var vm = this;

		vm.F = false;
		vm.C = true;
		vm.styleF={"color":"Red","font-size": "1.2em"};
		vm.styleC={"color":"white","font-size": "0.8em"};

		$scope.selectTemp = function(name){
			vm.currentTemp = name;

			if(name === 'C'){
				vm.F = true;
				vm.C = false;
				vm.styleF={"color":"white","font-size": "0.8em"};
				vm.styleC={"color":"Red","font-size": "1.2em"};

			}else if(name === 'F'){
				vm.F = false;
				vm.C = true;
				vm.styleF={"color":"Red","font-size": "1.2em"};
				vm.styleC={"color":"white","font-size": "0.8em"};
			}
		}

		vm.showUp = false;
		vm.selectedEffect = [];
		vm.selectedTemps = [];
		strainResource.query(function(data){
			vm.strains = data;
			vm.selectedStrain = data[0];

			var tempArray = [];
			var num = 0;
			for(var i=0; i<vm.selectedStrain.components.length; i++){
				if(vm.selectedStrain.components[i].value > 0){
					tempArray[num] = vm.selectedStrain.components[i];
					num++;
				}
			}
			vm.selectedEffect = tempArray;

			productResource.query(function(data){
				var tempArray = [];
				var num = 0;
				
				for(var i=0; i<vm.selectedEffect.length; i++){
					//console.log(vm.selectedEffect[i]);
					for(var x=0; x<data.length; x++){
						//console.log(data[x]);
						if(vm.selectedEffect[i].name === data[x].productName){
							console.log(data[x]);
							tempArray[num] =  data[x];
							num++;
						}
					}	
				}
				vm.selectedTemps = tempArray;
			});

		});


		vm.showImage = false;

		vm.toggleImage = function(){
			vm.showImage = !vm.showImage;
		};

		vm.limits = 3;
		vm.clicked = false;
		vm.buttonName = "More"
		$scope.limitStrain = function(){
			vm.clicked = !vm.clicked;
			if(vm.clicked){
				vm.limits = vm.strains.length;
				vm.buttonName = "Less"
			}
			else{
				vm.limits = 3;
				vm.buttonName = "More"
			}

		}
		
		$scope.selectedStrain = function(data){
			vm.showUp = false;
			vm.selectedStrain = data;

			var tempArray = [];
			var num = 0;
			for(var i=0; i<vm.selectedStrain.components.length; i++){
				if(vm.selectedStrain.components[i].value > 0){
					tempArray[num] = vm.selectedStrain.components[i];
					num++;
				}
			}
			vm.selectedEffect = tempArray;

			productResource.query(function(data){
				var tempArray = [];
				var num = 0;
				
				for(var i=0; i<vm.selectedEffect.length; i++){
					//console.log(vm.selectedEffect[i]);
					for(var x=0; x<data.length; x++){
						//console.log(data[x]);
						if(vm.selectedEffect[i].name === data[x].productName){
							console.log(data[x]);
							tempArray[num] =  data[x];
							num++;
						}
					}	
				}
				vm.selectedTemps = tempArray;
			});
		}
		
		$scope.activeStrain = function(name){
			if(name === vm.selectedStrain.strainName){
				return true;
			}else{
				return false;
			}
		}

		vm.hide = "more";
		vm.showSnippit = true;
		$scope.showHide = function(){
			vm.showSnippit = !vm.showSnippit;
			if(!vm.showSnippit){
				vm.hide = "less";
			}
			else{
				vm.hide = "more";
			}
		}

		vm.condLimits = 4;
		vm.condClicked = false;
		vm.condName = "more"
		$scope.conditionLimit = function(data){
			vm.condClicked = !vm.condClicked;
			if(vm.condClicked){
				vm.condLimits = data.length;
				vm.condName = "less"
			}
			else{
				vm.condLimits = 4;
				vm.condName = "more"
			}

		}
	}

}());