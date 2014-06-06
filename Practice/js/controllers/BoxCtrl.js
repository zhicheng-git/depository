/**
 * Created by zhicheng on 29/05/2014.
 */
app.controller('BoxCtrl',['$scope','$element',function($scope, $element){

    //$element 就是一个 jQuery 对象
    var e = $element.children().eq(0);
    $scope.w = e.width();
    $scope.h = e.height();

    $scope.click = function(){
        $scope.w = parseInt($scope.w) + 10;
        $scope.h = parseInt($scope.h) + 10;
    }

    $scope.$watch('w',
        function(to, from){
            e.width(to);
        }
    );

    $scope.$watch('h',
        function(to, from){
            e.height(to);
        }
    );
}]);

//angular.bootstrap(document.documentElement);