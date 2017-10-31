var app = angular.module('app', []);

/*
    Angular controller get created and destroyed every time they appear
    amd disappear on a page, on the other hand Services are only once created
    when needed. If multiple components need to use a service, agular will provide
    the same instance of this service.
*/
app.service('PostsSvc', function ($http) {
    this.fetch = () => {
        return $http.get('/api/posts');
    }

    this.create = (post) => {
        return $http.post('/api/posts', post);
    }
})

app.controller('PostsCtrl', function ($scope, PostsSvc) {

    PostsSvc.fetch().success((posts) => {
        $scope.posts = posts;
    });

    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'testx',
                body: $scope.postBody
            }).success((post) => {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
        }
    }
})