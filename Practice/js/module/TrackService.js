/**
 * Created by zhicheng on 01/06/2014.
 */
angular.module('trackServices', []).
    factory('track',['$http', function($http){
        return $resource('http://localhost:8080/backend/webapi/json/metallica/get/', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]);