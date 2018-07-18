angular.module('myAdmin.controllers',[]);
angular.module('myAdmin.services',[]);
angular.module('myAdmin.directives',[]);
var app =  angular.module('myAdmin', ['myAdmin.controllers', 'ngRoute', 'ngFileUpload']);

// app.config(function($routeProvider){
// 	$routeProvider.when('/', {
// 		templateUrl: '/templates/posts/index.html',
// 		controller: 'postController'
// 	}).when('/posts/new', {
// 		templateUrl: '/templates/posts/new.html', 
// 		controller: 'postController'
// 	}).when('/show', {
// 		templateUrl: '/templates/posts/show.html',
// 		controller: 'postController'
// 	}).when('/edit', {
// 		templateUrl: '/templates/posts/edit.html',
// 		controller: 'postController'
// 	})
// })

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});