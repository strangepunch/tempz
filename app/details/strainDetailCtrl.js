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
             "vTipResource",
              StrainDetailCtrl]);
  
  function StrainDetailCtrl($scope,strain,detailModeResource,tasteResource,recEffectResource,strainResource,vapeTempResource,vTipResource){
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

    $scope.whereFrom = function(name){
      console.log('where from name', name);
    }

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
              vm.discMode = "Positives";
              vm.selectedMode = "Positive effects";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.centerImage = strain.imageUrl;
              vm.modeName = strain.strainName;
              vm.inVape = false;
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
              vm.discMode = "Negatives";
              vm.selectedMode = "Negative effects";
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.centerImage = strain.imageUrl;
              vm.modeName = strain.strainName;
              vm.inVape = false;
              break;
          case 'Per':
              vm.Description = false;
              vm.Positive = false;
              vm.Negative = false;
              vm.Percent = true;
              vm.Taste = false;
              vm.Conditions = false;
              vm.Vape = false;
              vm.discMode = "Components";
              vm.selectedMode = "Component percentage";
              $scope.getCompWithValue();
              vm.vapeSelected = false;
              vm.selectedVape = "";
              vm.showQ1 = false;
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.centerImage = strain.imageUrl;
              vm.modeName = strain.strainName;
              vm.inVape = false;
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
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.centerImage = strain.imageUrl;
              vm.modeName = strain.strainName;
              vm.inVape = false;
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
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.centerImage = strain.imageUrl;
              vm.modeName = strain.strainName;
              vm.inVape = false;
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
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.inVape = false;
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
              vm.VapeQ = true;
              vm.VapeA = false;
              vm.centerImage = strain.imageUrl;
              vm.modeName = strain.strainName;
              vm.inVape = false;
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
      vm.vapeImageList = [];
      vm.vapeComb = [];
      for(var i=0; i<data.length;i++){
        vm.vapeNameList[i] = data[i].VName;
        vm.vapeImageList[i] = data[i].VImageUrl;
        vm.vapeComb[i] = {"name":data[i].VName, "image":data[i].VImageUrl};
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
            vm.vapeImageList = [];
            vm.vapeComb = [];
            for(var i=0; i<data.length;i++){
              vm.vapeNameList[i] = data[i].VName;
              vm.vapeImageList[i] = data[i].VImageUrl;
              vm.vapeComb[i] = {"name":data[i].VName, "image":data[i].VImageUrl};
            }
          });
          break;  
        case 'Desktop':
          vm.searchAll = "";
          vapeTempResource.query(function(data){
            var num = 0;
            vm.vapeNameList = [];
            vm.vapeImageList = [];
            vm.vapeComb = [];
            for(var i=0; i<data.length; i++){
              if(data[i].VType === 'Desktop'){
                vm.vapeNameList[num] = data[i].VName;
                vm.vapeImageList[num] = data[i].VImageUrl;
                vm.vapeComb[num] = {"name":data[i].VName, "image":data[i].VImageUrl};
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
            vm.vapeImageList = [];
            vm.vapeComb = [];
            for(var i=0; i<data.length; i++){
              if(data[i].VType === 'Portable'){
                vm.vapeNameList[num] = data[i].VName;
                vm.vapeImageList[num] = data[i].VImageUrl;
                vm.vapeComb[num] = {"name":data[i].VName, "image":data[i].VImageUrl};
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
              vm.vapeImageList = [];
              vm.vapeComb = [];
              for(var i=0; i<data.length; i++){
                if(data[i].VType === 'Pen'){
                  vm.vapeNameList[num] = data[i].VName;
                  vm.vapeImageList[num] = data[i].VImageUrl;
                  vm.vapeComb[num] = {"name":data[i].VName, "image":data[i].VImageUrl};
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
            vm.vapeImageList = [];
            vm.vapeComb = [];
            for(var i=0; i<data.length; i++){
              if(data[i].VName == name){
                vm.vapeNameList[num] = data[i].VName;
                vm.vapeImageList[num] = data[i].VImageUrl;
                vm.vapeComb[num] = {"name":data[i].VName, "image":data[i].VImageUrl};
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
      
      vapeTempResource.query(function(data){
        for(var i=0; i<data.length; i++){
          if(data[i].VName === name){
            vm.vapeImg = data[i].VImageUrl;
            vm.centerImage = vm.vapeImg;
          }
        }
      });
      vm.modeName = vm.selectedVape; 
    };
    //--------Go function for Vape--------//
    $scope.goVape = function (){
      vm.inVape = true;
      vm.VapeQ = false;
      vm.VapeA = true;
      vm.vapeSelected = false;
      vm.vapeDetails = [];
      vm.TempFList = [];
      vm.TempCList = [];
      vapeTempResource.query(function(data){
        for(var i=0; i<data.length; i++){
          if(data[i].VName === vm.selectedVape){
            vm.vapeDetails = data[i];
            vm.centerImage = data[i].VImageUrl;
          }
        }
        for(var i=0; i<vm.vapeDetails.VTempsF.length; i++){
          vm.TempFList[i] = {"image":vm.vapeDetails.VColors[i],"temp":vm.vapeDetails.VTempsF[i]};
          vm.TempCList[i] = {"image":vm.vapeDetails.VColors[i],"temp":vm.vapeDetails.VTempsC[i]};
        }

      });
      vm.modeName = vm.selectedVape;
      vm.TempList = vm.TempFList;

      vm.showQ2 = false;
      vm.tipShow = "Show Tips";

      vm.tipList(vm.selectedVape);

      //F or C select
      vm.currentTemp = 'F';
      vm.tempDisplay = 126;
      //set the ng-style of the temperature selection
      vm.styleF={"color":"Red","font-size": "1.2em"};
      vm.styleC={"color":"white","font-size": "0.8em"};

    };
    //----------Back button for vape-----//
    $scope.backVape = function(){
      vm.inVape = false;
      vm.centerImage = strain.imageUrl;
      vm.modeName = strain.strainName;
      vm.discMode = strain.strainType;
      $scope.selectMode(1);

    }
    //----------Temp type-------------//
    //change between F and C
    $scope.selectTemp = function(name){
      vm.currentTemp = name;
      if(name === 'C'){
        vm.styleF={"color":"white","font-size": "0.8em"};
        vm.styleC={"color":"Red","font-size": "1.2em"};
        vm.TempList = vm.TempCList;
      }else if(name === 'F'){
        vm.styleF={"color":"Red","font-size": "1.2em"};
        vm.styleC={"color":"white","font-size": "0.8em"};
        vm.TempList = vm.TempFList;
      }
    }

    //--------Toggle Questions On/Off-----//
    vm.toggleQuestion = function(choice){
      switch (choice){
        case 'Q1':
          vm.showQ1 = !vm.showQ1;
          break;
        case 'Q2':
          vm.showQ2 = !vm.showQ2;
          if(vm.tipShow != "Hide Tips"){
             vm.tipShow = "Hide Tips";
          } else{
            vm.tipShow = "Show Tips";
          }
          break;
      }
    };

    //---------Pull up the tips--------//
    //get that list of tips
    vm.tipList = function(name){
      vm.showNext = false;
      vm.showBack = false;
      vTipResource.query(function(data){
        var tempArray = [];
        for(var i=0; i<data.length; i++){
          if(data[i].VName === name){
            tempArray = data[i].VTipList;
          }
        }
        vm.listOfTips = tempArray;
        vm.currentTip = vm.listOfTips[0];
        vm.currentIndex = 0;
        vm.totalIndex = vm.listOfTips.length;
        if(vm.listOfTips.length <= 1){
          vm.showNext = false;
          vm.showBack = false;
        } else{
          vm.showNext = true;
        }

      });

    }
    //scroll forward
    vm.Next = function(){
      if(vm.currentIndex < vm.listOfTips.length-2){
        vm.currentIndex++;
        vm.showNext = true;
        vm.showBack = true;
        vm.currentTip = vm.listOfTips[vm.currentIndex];
      }else{
        vm.currentIndex = vm.listOfTips.length-1;
        vm.showNext = false;
        vm.currentTip = vm.listOfTips[vm.currentIndex]; 
      }
    }
    //scroll backward
    vm.Back = function(){
      if(vm.currentIndex > 1){
        vm.currentIndex--;
        vm.showNext = true;
        vm.showBack = true;
        vm.currentTip = vm.listOfTips[vm.currentIndex];
      }else{
        vm.currentIndex = 0;
        vm.showBack = false;
        vm.currentTip = vm.listOfTips[vm.currentIndex];
      }
    }
      
  }//end of StrainDetailCtrl function
    
}());