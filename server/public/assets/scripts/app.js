var myApp = angular.module("myApp", []);

myApp.controller("IntroController", ["$scope", "$http", function($scope, $http){
    // $scope.employee = {};

    $scope.employeeArray = [];


    $scope.meow = function(){
        console.log("Meow");
    };

    $scope.saveEmployee = function(value){
        console.log(value);
        $scope.employeeArray.push(value);

        $http.post("/employee", value).then(function(response){
            console.log(response);
        });

        $scope.employee = {};
    };

    $scope.getData = function(){
        $http.get("/cookies").then(function(response){
          console.log(response.data);
        });

        console.log("Am I second? Or first?");
    };

    $scope.getData();
}]);
