;
(function (angular) {
  "use strict";

  angular.module('app')
    .controller('favoriteCtrl', [
      '$scope',
      '$http',
      function ($scope, $http) {
        $http.get('/data/myfavorite.json').then(function (resp) {
          $scope.list = resp.data;
        });
      }
    ]);
})(window.angular)
