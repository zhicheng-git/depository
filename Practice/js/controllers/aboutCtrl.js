/**
 * Created by zhicheng on 29/05/2014.
 */
app.controller('aboutCtrl',['$scope','$http',function($scope,$http){
   $http.jsonp("http://localhost:8080/backend/webapi/json/metallica/getJSONP?callback=JSON_CALLBACK").success(function(data){

       angular.forEach(data,function(value,key){
           console.log( key + value.title + value.singer);
       });
   });
}]);