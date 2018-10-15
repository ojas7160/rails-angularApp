showPostModule = angular.module('myAdmin.controllers');

var showPostController = function($http, $scope, $routeParams){
	console.log($routeParams.postId)
	$http.get('/api/v1/posts/'+$routeParams.postId)
	.then(function(response){
		console.log(response)
		$scope.post = response.data.data
		// $scope.postImage = response.data.image
		// $scope.postImage = $scope.postImage.split('?')[0]
	})

	$scope.delete = function(post){
		$http.delete('/api/v1/posts/'+post.id).then(function(response){
			console.log(response)
		})
	}
}

showPostModule.controller('showPostController', ['$http', '$scope', '$routeParams', showPostController])