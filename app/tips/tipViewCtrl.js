(function () {
	angular
			.module("productManagement")
			.controller("TipViewCtrl",
						["$scope",  
						 "tipResource",
             "ngProgress",
							TipViewCtrl]);
	
	function TipViewCtrl($scope,tipResource,ngProgress){
		var vm = this;

    vm.currentTip = [];

    ngProgress.start();
		//populate vm.tip with all the arrays of data arrays
		tipResource.query(function(data){
			vm.tips = data;
      ngProgress.complete();
		});

    //filter out tips under selected catagory
    $scope.selectCatagory = function(name){

      ngProgress.start();

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

      ngProgress.complete();

    }; 

    $scope.Price = 'tipId';
    $scope.orderPrice = function(name){
      switch (name){
         case 'Low':
            $scope.Price = 'price';
         break;
         case 'High':
            $scope.Price = '-price';
         break;
         default:
            $scope.Price = 'tipId';

      }
    }

	} 

}());