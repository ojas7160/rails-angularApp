var blogsModule = angular.module('myAdmin.controllers');

var blogsController = function($scope, $http){
  console.log('blogs')
  $scope.item = {id: 1}
}

blogsModule.controller('blogsController', ['$scope', '$http', blogsController])