(function () {
	
		angular
      .module("productManagement")
      .controller("StrainDetailCtrl",
            ["$scope",
             "strain",
             "detailModeResource",
             "tasteResource", 
             "recEffectResource", 
             "strainResource",
             "vapeTempResource",
              StrainDetailCtrl]);
  
  function StrainDetailCtrl($scope,strain,detailModeResource,tasteResource,recEffectResource,strainResource,vapeTempResource){
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
    vm.currentMode = 1;

    //initialize image for first screen
    vm.combineImgAndWords = [];
    tasteResource.query(function(data){
       vm.tasteImages = [];
       for(var i=0; i<vm.currentStrain.taste.length; i++){
          for(var x=0; x<data.length; x++){
            if(vm.currentStrain.taste[i] === data[x].taste){
              vm.tasteImages[i] = data[x].imageUrl;
              vm.combineImgAndWords[i] = {"imageUrl":vm.tasteImages[i], "name":vm.currentStrain.taste[i]};
            }
          }
       }
    });
 
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
              vm.combineImgAndWords = [];
              recEffectResource.query(function(data){
                vm.posEffImages = [];
                vm.combineImgAndWords = [];
                for(var i=0; i<vm.currentStrain.positiveEffects.length; i++){
                  for(var x=0; x<data.length; x++){
                    if(vm.currentStrain.positiveEffects[i] === data[x].recEffectName){
                      vm.posEffImages[i] = data[x].imageUrl;
                      vm.combineImgAndWords[i] = {"imageUrl":vm.posEffImages[i], "name":vm.currentStrain.positiveEffects[i]};
                    }
                  }
                }
              });
              vm.discMode = "Positive";
              vm.selectedMode = "Positive effects";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
              break;
          case 'Neg':
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = true;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = false;
              vm.combineImgAndWords = [];
              recEffectResource.query(function(data){
                vm.negEffImages = [];
                vm.combineImgAndWords = [];
                for(var i=0; i<vm.currentStrain.negativeEffects.length; i++){
                  for(var x=0; x<data.length; x++){
                    if(vm.currentStrain.negativeEffects[i] === data[x].recEffectName){
                      vm.negEffImages[i] = data[x].imageUrl;
                      vm.combineImgAndWords[i] = {"imageUrl":vm.negEffImages[i], "name":vm.currentStrain.negativeEffects[i]};
                    }
                  }
                }
              });
              vm.discMode = "Negative";
              vm.selectedMode = "Negative effects";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
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
              vm.selectedMode = "Component percentage";
              $scope.getCompWithValue();
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
              break;
          case 1:
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = true;
              vm.Conditions = false;
              vm.Vape = false;
              vm.combineImgAndWords = [];
              tasteResource.query(function(data){
                vm.tasteImages = [];
                vm.combineImgAndWords = [];
                for(var i=0; i<vm.currentStrain.taste.length; i++){
                  for(var x=0; x<data.length; x++){
                    if(vm.currentStrain.taste[i] === data[x].taste){
                      vm.tasteImages[i] = data[x].imageUrl;
                      vm.combineImgAndWords[i] = {"imageUrl":vm.tasteImages[i], "name":vm.currentStrain.taste[i]};
                    }
                  }
                }
              });
              vm.discMode = "Tastes";
              vm.selectedMode = "Flavors you can expect";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
              break;
          case 'Med':
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = false;
              vm.Taste = false;
              vm.Conditions = true;
              vm.Vape = false;
              vm.discMode = "Conditions";
              vm.selectedMode = "Conditions treated";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
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
              vm.selectedMode = "Here are some tips";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
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
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
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
          case 1:
              if(vm.currentMode == 1){
                return "active";
              }
            break;
          case 'Med':
              if(vm.currentMode == 'Med'){
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


    /** Vape selection and Tips display section **/
    //--------Display Vape choices -------//
    vapeTempResource.query(function(data){
      vm.vapeNameList = [];
      for(var i=0; i<data.length;i++){
        vm.vapeNameList[i] = data[i].VName;
      }
    });
    //--------Search and Filter Vape List ------//
    //search button --- display searches
    vm.searchAll = "";
    $scope.searchVape = function(name){
      vm.searchAll = name;
      
      switch(name){
        case 'All':
          vm.searchAll = "";
          vapeTempResource.query(function(data){
            vm.vapeNameList = [];
            for(var i=0; i<data.length;i++){
              vm.vapeNameList[i] = data[i].VName;
            }
          });
          break;  
        case 'Desktop':
          vm.searchAll = "";
          vapeTempResource.query(function(data){
            var num = 0;
            vm.vapeNameList = [];
            for(var i=0; i<data.length; i++){
              if(data[i].VType === 'Desktop'){
                vm.vapeNameList[num] = data[i].VName;
                num++;
              }
            }
          });
          break;     
        case 'Portable':
          vm.searchAll = "";
          vapeTempResource.query(function(data){
            var num = 0;
            vm.vapeNameList = [];
            for(var i=0; i<data.length; i++){
              if(data[i].VType === 'Portable'){
                vm.vapeNameList[num] = data[i].VName;
                num++;
              }
            }
          });
          break;  
        case 'Pen':
          vm.searchAll = "";
            vapeTempResource.query(function(data){
              var num = 0;
              vm.vapeNameList = [];
              for(var i=0; i<data.length; i++){
                if(data[i].VType === 'Pen'){
                  vm.vapeNameList[num] = data[i].VName;
                  num++;
                }
              }
            });
          break;  
        default:
          vm.searchAll = "";
          vapeTempResource.query(function(data){
            var num = 0;
            vm.vapeNameList = [];
            for(var i=0; i<data.length; i++){
              if(data[i].VName == name){
                vm.vapeNameList[num] = data[i].VName;
                num++;
              }
            }
          });
          break;
        } 

    };
    //search button --- clear Search
    $scope.clearSearch = function () {
        vm.searchAll = "";
    };
    //--------Select an vape ------------//
    $scope.selectVape = function(name){
      vm.showQ1 = false;
      vm.selectedVape = name;
      vm.vapeSelected = true;
    };
    //--------Toggle Questions On/Off-----//
    vm.toggleQuestion = function(name){
      vm.showQ1 = true;
    };
      
  }//end of StrainDetailCtrl function
    
}());