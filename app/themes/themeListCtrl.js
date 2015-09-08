(function () {
  angular
      .module("productManagement")
      .controller("ThemeListCtrl",
						["$scope",
             "$cookies",  
							ThemeListCtrl]);
	
	function ThemeListCtrl($scope, $cookies){
		  var vm = this;
     
      //sets your theme
      $scope.favoriteTheme = $cookies.myTheme;

      $scope.selectTheme = function(item){

        switch (item){
          case 'Beach':
              $scope.permTheme = "css/beachTheme.css";
              break;
          case 'Movie':
              $scope.permTheme = "css/movieTheme.css";
              break;
          case 'Tan':
              $scope.permTheme = "css/tanTheme.css";
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
	 

}());