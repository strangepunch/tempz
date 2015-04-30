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

	}

}());