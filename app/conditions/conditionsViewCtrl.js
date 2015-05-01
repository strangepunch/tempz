(function () {
	angular
			.module("productManagement")
			.controller("ConditionsViewCtrl",
						["$scope",
						 "conditionResource",
						 "strainResource",
							ConditionsViewCtrl]);
	
	function ConditionsViewCtrl($scope, conditionResource, strainResource){
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

		conditionResource.query(function(data){
			vm.conditions = data;
			
			vm.selectedCondition = vm.conditions[16];

			vm.strainName = vm.conditions[16].strains;
			//console.log(vm.strainName);

			strainResource.query(function(data){
				
				var tempArray =[];
				var tempArray2 = [];
				var num = 0;
				var num2 = 0;

				for(var i=0; i<vm.strainName.length; i++){
					for(var x=0; x<data.length; x++){
						if(vm.strainName[i] === data[x].strainName){
							for(var y=0; y<data[x].components.length; y++){
								if(data[x].components[y].value > 0){
									tempArray[num] = data[x].components[y];
									num++;
								}
							}
							//console.log(tempArray);
							tempArray2[num2] = {strainName:vm.strainName[i], components:tempArray, imageUrl:data[x].imageUrl};
							num2++;
							num = 0;
							tempArray = [];
						}
					}
				}

				vm.selectedStrains = tempArray2;
				//console.log(vm.selectedStrains);

			});
		});

		vm.limits = 3;
		vm.clicked = false;
		vm.buttonName = "More"
		$scope.setLimits = function(){
			vm.clicked = !vm.clicked;
			if(vm.clicked){
				vm.limits = vm.conditions.length;
				vm.buttonName = "Less"
			}
			else{
				vm.limits = 3;
				vm.buttonName = "More"
			}

		}

		$scope.selectCondition = function(cond){
			vm.selectedCondition = cond;
			vm.strainName = cond.strains;
			//console.log(vm.strainName);

			strainResource.query(function(data){
				
				var tempArray =[];
				var tempArray2 = [];
				var num = 0;
				var num2 = 0;

				for(var i=0; i<vm.strainName.length; i++){
					for(var x=0; x<data.length; x++){
						if(vm.strainName[i] === data[x].strainName){
							for(var y=0; y<data[x].components.length; y++){
								if(data[x].components[y].value > 0){
									tempArray[num] = data[x].components[y];
									num++;
								}
							}
							//console.log(tempArray);
							tempArray2[num2] = {strainName:vm.strainName[i], components:tempArray, imageUrl:data[x].imageUrl};
							num2++;
							num = 0;
							tempArray = [];
						}
					}
				}

				vm.selectedStrains = tempArray2;
				//console.log(vm.selectedStrains);

			});

		}

	}

}());