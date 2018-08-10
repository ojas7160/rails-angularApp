var blogsModule = angular.module('myAdmin.controllers');

var blogsController = function($scope, $http, $routeSegment){
  console.log('blogs')
  $scope.item = {id: 1}

  $scope.$routeSegment = $routeSegment;
}

blogsModule.controller('blogsController', ['$scope', '$http', '$routeSegment', blogsController])