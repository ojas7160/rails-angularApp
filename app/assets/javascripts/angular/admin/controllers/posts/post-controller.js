postControllerModule = angular.module('myAdmin.controllers')

var postController = function($scope, $http, Upload){

	$scope.submit = function(post){
		console.log("post", post);
		// Upload.upload({
		// 	url: '/api/v1/posts',
		// 	method: 'post',
		// 	data: 
		// 		post = {
		// 			title: post.title,
		// 			description: post.description,
		// 			image: post.image
		// 		}
		// }).then(function(response){
		// 	console.log(response)
		// });

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

		// swal({
		// 	title: "Do you really want to delete this post?",
		// 	text: "",
		// 	icon: "warning",
		// 	buttons: [
		// 		'No, cancel it!',
		// 		'Yes, I am sure!'
		// 	],
		// 	dangerMode: true,
		// }).then(function(isConfirm) {
		// 	if (isConfirm) {
			 // $http.delete('/api/v1/posts/'+post.id).then(function(response){
				// 	console.log(response)
				// 	if(response.data.success){
				// 		noty({text: response.data.message, type: 'success'})
				// 	}
				// })
		// 	} else {
		// 		noty({text: 'Your post is safe :)', type: 'success'})
		// 	}
		// })
	}
}

postControllerModule.controller('postController', ['$scope', '$http', 'Upload', postController])