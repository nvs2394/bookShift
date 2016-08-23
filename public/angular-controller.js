angular.module('bookApp', [])
  .controller('BookListController', function($scope,$http) {
    $http.get('./books').then(function(response){
      $scope.allBook = response.data;
    })
  });