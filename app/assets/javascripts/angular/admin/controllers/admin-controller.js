var AdminController = angular.module('myAdmin.controllers');

var myAdminController = function($scope, $http){
	console.log('Hi Angular');
}

AdminController.controller('myAdminController', ['$scope', '$http', myAdminController])