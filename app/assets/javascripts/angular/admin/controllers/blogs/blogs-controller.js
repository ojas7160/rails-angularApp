var blogsModule = angular.module('myAdmin.controllers');

var blogsController = function($scope, $http){
  console.log('blogs')
}

blogsModule.controller('blogsController', ['$scope', '$http', blogsController])