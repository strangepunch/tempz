(function () {
  angular
      .module("productManagement")
      .controller("ThemeListCtrl",
						["$scope",
             "$location",
             "$cookies",
             "localStorageService",  
							ThemeListCtrl]);
	
	function ThemeListCtrl($scope, $location, $cookies, localStorageService){
		  var vm = this;

      vm.OK = false;
      //initialize your selection
      if(localStorageService.isSupported) {
        $scope.favoriteTheme = localStorageService.get('myTheme');
        $scope.theAgreement = localStorageService.get('myAgreement');
        $scope.lastView = localStorageService.get('whereAmIFrom');
        //check if user selected agreement and redirect them
        if($scope.theAgreement != null && $scope.theAgreement == "I Agree"){
          vm.OK = true;
          if($scope.lastView == "Med"){
            $location.path("/easy");
          }else{
            $location.path("/rec");
          }
        }
      }else{
        $scope.favoriteTheme = $cookies.myTheme;
        $scope.theAgreement = $cookies.myAgreement;
        $scope.lastView = localStorageService.get('whereAmIFrom');
        //check if user selected agreement and redirect them
        if($scope.theAgreement != null && $scope.theAgreement == "I Agree"){
          vm.OK = true;
          if($scope.lastView == "Med"){
            $location.path("/easy");
          }else{
            $location.path("/rec");
          }
        }
      }

      $scope.selectTheme = function(item){

        if(localStorageService.isSupported) {
          switch (item){
            case 'Beach':
                $scope.permTheme = "css/beachTheme.css";
                break;
            case 'Movie':
                $scope.permTheme = "css/movieTheme.css";
                break;
            case 'Khaki':
                $scope.permTheme = "css/khakiTheme.css";
                break;
            case 'Normal':
                $scope.permTheme = "css/app.css";
                break;
            default:
                $scope.permTheme = "css/app.css";
          }

          localStorageService.set('myTheme', $scope.permTheme);
          $scope.favoriteTheme = localStorageService.get('myTheme');

        } else{

            switch (item){
              case 'Beach':
                  $scope.permTheme = "css/beachTheme.css";
                  break;
              case 'Movie':
                  $scope.permTheme = "css/movieTheme.css";
                  break;
              case 'Khaki':
                  $scope.permTheme = "css/khakiTheme.css";
                  break;
              case 'Normal':
                  $scope.permTheme = "css/app.css";
                  break;
              default:
                  $scope.permTheme = "css/app.css";
            }

            $cookies.myTheme = $scope.permTheme;
            $scope.favoriteTheme = $cookies.myTheme;

          }
        
      }
      //Keep logs of user selected agreement
      vm.checkAgreement = function(item){
        console.log("item", item);

        if(localStorageService.isSupported) {

          localStorageService.set('myAgreement', item);

        }else {

          $cookies.theAgreement = item;

        }

      }
     
  }
	 

}());