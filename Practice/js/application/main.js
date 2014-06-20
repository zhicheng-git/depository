/**
 * Created by zhicheng on 07/06/2014.
 */
var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
    return {message: "I'm data from a service"}
})

function FirstCtrl($scope, Data){
    $scope.data = Data;
    Data.message = "test";
}

function SecondCtrl($scope, Data){
    $scope.data = Data;
}