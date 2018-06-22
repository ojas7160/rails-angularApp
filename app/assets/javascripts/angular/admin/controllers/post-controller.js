postControllerModule = angular.module('myAdmin.controllers')

var postController = function($scope, $http){

	$scope.submit = function(post){
		console.log("post", post);
		$http.post('/api/v1/posts', post).then(function(response){
			console.log(response)
		})
	}

	var posts = function(){
		$http.get('/api/v1/posts').then(function(response){
			console.log(response)
			$scope.posts = response.data.data
		})
	}

	posts()
}

postControllerModule.controller('postController', ['$scope', '$http', postController])