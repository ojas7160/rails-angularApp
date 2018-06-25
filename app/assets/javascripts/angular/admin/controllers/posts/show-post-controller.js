showPostModule = angular.module('myAdmin.controllers');

var showPostController = function($http, $scope){
	$http.get('/api/v1/posts/'+postId).then(function(response){
		console.log(response)
		$scope.post = response.data.data
	})

	$scope.delete = function(post){
		$http.delete('/api/v1/posts/'+post.id).then(function(response){
			console.log(response)
		})
	}
}

showPostModule.controller('showPostController', ['$http', '$scope', showPostController])