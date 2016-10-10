(function(){

  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject=["$scope"];

    function LunchCheckController($scope){
      $scope.lunchItems = "";
      $scope.diagnose = "";

      $scope.checkDiet = function(){

        if ($scope.lunchItems == ""){
          $scope.diagnose = "Please enter data first";
          return;
        }

        var itemsCount = $scope.lunchItems.split(',').length;

        $scope.diagnose = itemsCount <= 3 ? "Enjoy!" : "Too much!";
      }
    }
}
)();
