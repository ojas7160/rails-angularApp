loginSignUpController = angular.module('myAdmin.controllers')

var loginController = function($scope, $http){
	console.log('login')

	$scope.logout = function(){
		$http.delete('/api/v1/sessions/destroy_user', {token: }).then(function(response){
			console.log(response)
		})
	}
}

var signupController = function($scope, $http){

}

loginSignUpController.controller('loginController', ['$scope', '$http', loginController])
loginSignUpController.controller('signupController', ['$scope', '$http', signupController])