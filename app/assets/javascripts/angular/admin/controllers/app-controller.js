appControllerModule = angular.module('myAdmin.controllers')

var appIndexController = function($scope, $http, $routeSegment){
	console.log('app')
}

appControllerModule.controller('appIndexController', ['$scope', '$http', '$routeSegment', appIndexController]);