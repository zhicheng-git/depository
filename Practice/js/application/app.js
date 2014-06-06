/**
 * Created by zhicheng on 29/05/2014.
 */
var app =  angular.module('boxApp', ['ngRoute'], function(){console.log('here')}).config(function($routeProvider, $locationProvider) {
    $routeProvider
       /* .when('/Book/:bookId', {
            templateUrl: 'book.html',
            controller: 'BookController',
            resolve: {
                // I will cause a 1 second delay
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1000);
                    return delay.promise;
                }
            }
        })
        .when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: 'ChapterController'
        })*/.
        when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        }).
        when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
        });
   // $locationProvider.html5Mode(true);
});