angular.module('app').controller('PostsCtrl', function ($scope, PostsSvc) {

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