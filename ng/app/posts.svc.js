/*
    Angular controller get created and destroyed every time they appear
    amd disappear on a page, on the other hand Services are only once created
    when needed. If multiple components need to use a service, agular will provide
    the same instance of this service.
*/
angular.module('app').service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts');
    }

    this.create = function (post) {
        return $http.post('/api/posts', post);
    }
})