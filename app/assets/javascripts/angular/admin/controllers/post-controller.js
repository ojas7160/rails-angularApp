postControllerModule = angular.module('myAdmin.controllers')

var postController = function($scope, $http){

	$scope.submit = function(post){
		$http.post('/api/v1/posts', post).then(function(response){
			console.log(response)
		})
	}
}

postControllerModule.controller('postController', ['$scope', '$http', postController])