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
        console.log("item", item);
        if(item === 'Beach'){
          $scope.permTheme = "css/beachTheme.css";
        }else if(item === 'Movie'){
          $scope.permTheme = "css/movieTheme.css";
        }else{
          $scope.permTheme = "css/app.css";
        }

        $cookies.myTheme = $scope.permTheme;
        $scope.favoriteTheme = $cookies.myTheme;
      }

      

      //console.log("$cookies.myTheme",$cookies.myTheme);
      //console.log(" $scope.favoriteTheme", $scope.favoriteTheme);
     
  }
	 

}());