loginSignUpController = angular.module('myAdmin.controllers')

var loginController = function($scope, $http){
	console.log('login')

	$scope.logout = function(){
		$http.get('/api/v1/sessions/destroy').then(function(response){
			if(response.data.success){
				window.location.href = '/';
			}
		})
	}

	$scope.login = function(user){
		$http.post('/api/v1/sessions/login', {user: user}).then(function(response){
			if(response.data.success == false)
				noty({text: response.data.message, type: 'warning'})
			else{
				noty({text: response.data.message, type: 'success'})
				setTimeout(function(){window.location.reload();}, 1500);
			}
		})
	}
}

var signupController = function($scope, $http){

	$scope.signup = function(user){
		console.log(user)
		$http.post('/api/v1/registrations', {user: user}).then(function(response){
			console.log(response)
		})
	}
}

loginSignUpController.controller('loginController', ['$scope', '$http', loginController])
loginSignUpController.controller('signupController', ['$scope', '$http', signupController])