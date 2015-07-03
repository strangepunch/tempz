(function () {
	angular
			.module("productManagement")
			.controller("EasyViewCtrl",
						["$scope",
						 "tempResource",
						 "productResource",
						 "strainResource",
						 "ngProgress",
							EasyViewCtrl]);
	
	function EasyViewCtrl($scope, tempResource, productResource, strainResource, ngProgress){
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

		//find effects using either F or C temp
		$scope.catching = function(value){
			vm.tempDisplay = value;
			vm.countF=0;
			vm.countC=0;
			var tempArray=[];
			var num = 0;
			var numX = 0;
			console.log(value);
		}

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

    	//search button --- clear Search
    	 vm.searchAll = "";
	     $scope.clearSearch = function () {
	        vm.searchAll = "";
	     };
		
	}

}());