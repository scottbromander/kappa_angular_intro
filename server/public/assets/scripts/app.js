var myApp = angular.module("myApp", []);

myApp.controller("IntroController", ["$scope", function($scope){
    // $scope.employee = {};

    $scope.employeeArray = [];

    $scope.meow = function(){
        console.log("Meow");
    };

    $scope.saveEmployee = function(value){
        console.log(value);
        $scope.employeeArray.push(value);
        $scope.employee = {};
        console.log($scope.employeeArray);
    };

}]);
