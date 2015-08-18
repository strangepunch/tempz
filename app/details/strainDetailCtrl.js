(function () {
	
		angular
      .module("productManagement")
      .controller("StrainDetailCtrl",
            ["$scope",
             "strain",
             "detailModeResource", 
             "strainResource",
              StrainDetailCtrl]);
  
  function StrainDetailCtrl($scope,strain,detailModeResource,strainResource){
    var vm = this;

    //set the ng-style of the mode selection
    vm.styleMed={"color":"white","font-size": "0.8em"};
    vm.styleRec={"color":"Red","font-size": "1.1em"};

    //initiate center image for first time entry
    vm.centerImage = strain.imageUrl;
    vm.modeName = strain.strainName;
    vm.discMode = "Positive";
    vm.selectedMode = "Positive Effects";

    //display on/off list
    vm.Positive = true;
    vm.Percent = false;
 
    //Populate modes
    detailModeResource.query(function(data){
      vm.Modes = data;
      vm.ModeA = [data[0],data[1],data[2]];
      vm.ModeB = [data[3],data[4],data[5]];
      vm.currentMode = vm.Modes[0]; //initiate mode
    });

    //select a mode
    $scope.selectMode = function(mode){
      vm.currentMode = mode;
      switch(mode) {
          case 'Pos':
              vm.Positive = true;
              vm.Percent = false;
              vm.discMode = "Positive";
              vm.selectedMode = "Positive Effects";
              break;
          case 'Neg':
              vm.discMode = "Negative";
              break;
          case 'Per':
              vm.Positive = false;
              vm.Percent = true;
              vm.discMode = "Percents";
              vm.selectedMode = "Component Percentage"
              break;
          default:
              vm.discMode = "Select Mode";
      }

    };

    vm.currentStrain = strain;

    //this sets the ng-class to active
    $scope.active = function(item){

        switch(item) {
          case 'Pos':
              if(vm.currentMode == 'Pos'){
                return "active";
              }
              break;
          case 'Neg':
              if(vm.currentMode == 'Neg'){
                return "active2";
              }
              break;
          case 'Per':
              if(vm.currentMode == 'Per'){
                return "active";
              }
              break;
          default:
              return "!active";
        }
      
      };
  }
    
}());