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

	$scope.delete = function(post){
		sweetAlert("Awesome!");
		$http.delete('/api/v1/posts/'+post.id).then(function(response){
			console.log(response)
			if(response.data.success){
				noty({text: response.data.message, type: 'success'})
			}
		})
	}
}

postControllerModule.controller('postController', ['$scope', '$http', postController])