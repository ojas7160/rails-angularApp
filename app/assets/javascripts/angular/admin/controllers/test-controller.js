testModule = angular.module('myAdmin.controllers')

var testController = function($scope){
	console.log('test')
}

testModule.controller('testController', ['$scope', testController])