postControllerModule = angular.module('myAdmin.controllers')

var postController = function($scope, $http, Upload){

	$scope.posts = []

	var posts = function(){
		$http.get('/api/v1/posts').then(function(response){
			console.log(response)
			$scope.posts = response.data.data
			$scope.currentUserId = response.data.currentUserId
		})
	}

	posts()

	var getUser = function(){
		$http.get('/users/currentUser').then(function(response){
			console.log(response)
			$scope.user = response.data.user
		})
	}

	getUser()
	
	$scope.submit = function(post){
		console.log("post", post);
		if(post.image){
			post.image = post.image[0]
		}
		Upload.upload({
			url: '/api/v1/posts',
			method: 'post',
			data: {post}
		}).then(function(response){
			console.log(response)
		});
	}

	$scope.delete = function(post){
		swal({
      title: "Are you sure?",
      text: "You want to delete this ingredient!",
      icon: "warning",
      buttons: [
        'No, cancel it!',
        'Yes, I am sure!'
      ],
      dangerMode: true,
    }).then(function(isConfirm) {
    	if (isConfirm) {
				console.log('ahjsghjasgj')
				$http.delete('/api/v1/posts/'+post.id).then(function(response){
					console.log(response)
					if(response.data.success){
						noty({text: response.data.message, type: 'success'})
					}
				})
			}else {
        swal("Cancelled", "Your post is safe :)", "error");
      }
    })
	}

	$scope.like = function(post, index){
		if(!$scope.posts[index].likesCount){
			$scope.posts[index].likesCount = 0
		}
		$scope.vote = {value: 1, resource_id: post.id, resource_type: "Post"}
		$http.post('/api/v1/votes', {vote: $scope.vote}).then(function(response){
			console.log(response)
			console.log(response.data.data.resource_id)
			if(response.data.success){
				$scope.posts[index].likes += 1
			}
		})
	}

	$scope.dislike = function(post, index){
		$scope.vote = {value: -1, resource_id: post.id, resource_type: "Post"}
		$http.post('/api/v1/votes', {vote: $scope.vote}).then(function(response){
			if(response.data.success){
				$scope.posts[index].dislikes += 1
			}
		})
	}
}

postControllerModule.controller('postController', ['$scope', '$http', 'Upload', postController])