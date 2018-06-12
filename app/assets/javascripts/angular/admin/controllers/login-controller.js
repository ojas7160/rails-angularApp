loginSignUpController = angular.module('myAdmin.controllers')

var loginController = function($scope, $http){
	console.log('login')

	$scope.logout = function(){
		$http.get('/api/v1/sessions/destroy').then(function(response){
			console.log(response)
			if(response.data.success){
				window.location.href = '/';
			}
		})
	}

	$scope.login = function(user){
		$http.post('/api/v1/sessions/login', {user: user}).then(function(response){
			console.log(response)
		})
	}
}

var signupController = function($scope, $http){

}

loginSignUpController.controller('loginController', ['$scope', '$http', loginController])
loginSignUpController.controller('signupController', ['$scope', '$http', signupController])