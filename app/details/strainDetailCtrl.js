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

    //strain that is passed over
    vm.currentStrain = strain;

    //set the ng-style of the mode selection
    vm.styleMed={"color":"white","font-size": "0.8em"};
    vm.styleRec={"color":"Red","font-size": "1.1em"};

    //initiate center image for first time entry
    vm.centerImage = strain.imageUrl;
    vm.modeName = strain.strainName;
    vm.discMode = strain.strainType;
    vm.selectedMode = "Flavors you can expect";

    //display on/off list
    vm.Description = true
    vm.Positive = false;
    vm.Negative = false;
    vm.Percent = false;
    vm.Taste = true;
    vm.Conditions = false;
    vm.Vape = false;
 
    //Populate modes
    detailModeResource.query(function(data){
      vm.Modes = data;
      vm.ModeA = [data[0],data[1],data[2]];
      vm.ModeB = [data[3],data[4],data[5]];
      //vm.currentMode = vm.Modes[0]; //initiate mode
    });

    //select a mode
    $scope.selectMode = function(mode){
      vm.currentMode = mode;
      switch(mode) {
          case 'Pos':
              vm.Description = false;
              vm.Positive = true;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = false;
              vm.discMode = "Positive";
              vm.selectedMode = "Positive effects";
              break;
          case 'Neg':
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = true;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = false;
              vm.discMode = "Negative";
              vm.selectedMode = "Negative effects";
              break;
          case 'Per':
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = true;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = false;
              vm.discMode = "Percents";
              vm.selectedMode = "Component percentage"
              $scope.getCompWithValue();
              break;
          case 2:
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = true;
              vm.Conditions = false;
              vm.Vape = false;
              vm.discMode = "Tastes";
              vm.selectedMode = "Flavors you can expect"
              break;
          case 3:
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = true;
              vm.Vape = false;
              vm.discMode = "Conditions";
              vm.selectedMode = "Conditions treated"
              break;
          case 'Vap':
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = true;
              vm.discMode = "Vape Tips";
              vm.selectedMode = "Here are some tips"
              break;
          default:
              vm.Description = true
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = false;
              vm.discMode = "Select mode";
              break;
      }

    };

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
          case 2:
              if(vm.currentMode == 2){
                return "active";
              }
            break;
          case 3:
              if(vm.currentMode == 3){
                return "active2";
              }
            break;
          case 'Vap':
              if(vm.currentMode == 'Vap'){
                return "active2";
              }
              break;
          default:
              return "!active";
        }
      
    };

    //find components that has value over 0
    $scope.getCompWithValue = function(){
      var num = 0;
      vm.currentComp = [];

      for(var i=0; i < vm.currentStrain.components.length; i++){

        if(vm.currentStrain.components[i].value > 0){
           vm.currentComp[num] = vm.currentStrain.components[i];
           num++;
        }

        console.log("vm.currentComp", vm.currentComp);
       
      }
    };

    //get some images
    /**
    $scope.getImages = function(name){

    };**/


      
  }//end of StrainDetailCtrl function
    
}());