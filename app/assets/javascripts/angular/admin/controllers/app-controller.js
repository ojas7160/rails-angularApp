appControllerModule = angular.module('myAdmin.controllers')

var appController = function($scope, $http){
	console.log('app')
}

appControllerModule.controller('appController', ['$scope', '$http', appController]);