appControllerModule = angular.module('myAdmin.controllers')

var appController = function($scope, $http, $routeSegment){
	console.log('app')

	$scope.$routeSegment = $routeSegment;
	$scope.items = [ 1,2,3,4,5 ];
  // $scope.loader = loader;

  $scope.$on('routeSegmentChange', function() {
    // loader.show = false;
    console.log('skjhkjdskjhd')
  })
}

appControllerModule.controller('appController', ['$scope', '$http', '$routeSegment', appController]);