angular.module('myAdmin.controllers',[]);
angular.module('myAdmin.services',[]);
angular.module('myAdmin.directives',[]);
var app =  angular.module('myAdmin', ['myAdmin.controllers', 'ngRoute', 'ngFileUpload', 'route-segment']);

app.config(function($routeSegmentProvider){

	$routeSegmentProvider.
	when('/', 'app.index').
	when('/blogs', 'app.blogs').
	when('/posts', 'app.posts').
	when('/users', 'app.users')

	.segment("app", {
		templateUrl: '/templates/posts/index.html',
		controller: 'postController'
	})
	.within().segment('index', {
		templateUrl: '/templates/posts/index.html',
		controller: 'postController'
	})
	.segment('blogs', {
		templateUrl: '/templates/blogs/index.html',
		controller('blogsController')
	})
	.segment('posts', {
		templateUrl: '/templates/posts/index.html',
		controller: 'postController'
	})
	.segment('users', {
		templateUrl: '/templates/users/index.html',
		controller: 'usersController'
	})

	// $routeProvider.when('/', {
	// 	templateUrl: '/templates/posts/index.html',
	// 	controller: 'postController'
	// }).when('/posts/new', {
	// 	templateUrl: '/templates/posts/new.html', 
	// 	controller: 'postController'
	// }).when('/show', {
	// 	templateUrl: '/templates/posts/show.html',
	// 	controller: 'postController'
	// }).when('/edit', {
	// 	templateUrl: '/templates/posts/edit.html',
	// 	controller: 'postController'
	// })
})

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});