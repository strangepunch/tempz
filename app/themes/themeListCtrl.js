(function () {
  angular
      .module("productManagement")
      .controller("ThemeListCtrl",
						["$scope",
             "$cookies",
             "localStorageService",  
							ThemeListCtrl]);
	
	function ThemeListCtrl($scope, $cookies, localStorageService){
		  var vm = this;
      
      //sets your theme
      if(localStorageService.isSupported) {
        $scope.favoriteTheme = localStorageService.get('myTheme');
      }else{
        $scope.favoriteTheme = $cookies.myTheme;
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
     
  }
	 

}());