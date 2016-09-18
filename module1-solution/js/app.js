(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  // function to check for non-empty string
  function isNotEmpty(value) {
    return value.trim().length > 0;
  }

  $scope.checkMenu = function () {
     if(isNotEmpty($scope.lunchMenu)){
       // split menu items and filter out empty items
       var menuItems = $scope.lunchMenu.split(',').filter(isNotEmpty);

       if(menuItems.length > 3){
         $scope.message = "Too much!";
       }else{
         $scope.message = "Enjoy!";
       }

     }else{
       $scope.message = "Please enter data first";
     }
  };


}

})();
