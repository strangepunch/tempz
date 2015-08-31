(function () {
    "use strict";

    angular
        .module("common.services")

        .directive('loading',   ['$http' ,function ($http)
        {
            return {
                restrict: 'E',
                replace: true,
                template: '<div class="loading"><div class="spinner"></div>LOADING...</div>',
                link: function (scope, elm, attrs){

                    scope.isLoading = function () {
                        return $http.pendingRequests.length > 0;
                    };

                    scope.$watch(scope.isLoading, function (v)
                    {
                        if(v){
                            elm.show();
                        }else{
                            elm.hide();
                        }
                    });
                }
            };

        }]);

}());