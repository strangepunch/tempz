(function () {
	angular
			.module("productManagement")
			.controller("TipViewCtrl",
						["$scope",  
						 "tipResource",
							TipViewCtrl]);
	
	function TipViewCtrl($scope,tipResource){
		var vm = this;

    vm.currentTip = [];

		//populate vm.tip with all the arrays of data arrays
		tipResource.query(function(data){
			vm.tips = data;
		});

    //filter out tips under selected catagory
    $scope.selectCatagory = function(name){

      tipResource.query(function(data){
        var tipsArray = []; //temp array
        var num = 0;

        if(name === 'All'){

          vm.tips = data;

        } else{

           for(var i=0; i<data.length; i++){

              if(data[i].tipCatagory === name){
                tipsArray[num] = data[i];
                num++;
              };

            }
            vm.tips = tipsArray;
        }
  
      });

    };  
	} 

}());