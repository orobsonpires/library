angular.module('app').controller('PostsCtrl', function ($scope, PostsSvc) {

    PostsSvc.fetch().then(function (result) {

        $scope.posts = result.data;
    });

    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'testx',
                body: $scope.postBody
            }).then(function (post) {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
        }
    }
})