EditPostModule = angular.module('myAdmin.controllers')

var EditPostController = function($http, $scope, $routeParams){

	$http.get('/api/v1/posts/'+$routeParams.postId+'/edit').then(function(response){
		console.log(response)
		$scope.post = response.data.data
	})

	$scope.submit = function(post){
		$http.put('/api/v1/posts/'+post.id, post).then(function(response){
			console.log(response)
		})
	}
}

EditPostModule.controller('EditPostController', ['$http', '$scope', '$routeParams', EditPostController])