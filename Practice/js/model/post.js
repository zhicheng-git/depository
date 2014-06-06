/**
 * Created by zhicheng on 31/05/2014.
 */
angular.module('app')
    .provider('Post', function() {
        this.$get = ['$resource', function($resource) {
            var Post = $resource('http://localhost:3000/api/post/:_id', {}, {
                update: {
                    method: 'PUT'
                }
            })

            return Post;
        }];
    });