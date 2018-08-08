angular.module('myAdmin.controllers',[]);
angular.module('myAdmin.services',[]);
angular.module('myAdmin.directives',[]);
var app =  angular.module('myAdmin', ['myAdmin.controllers', 'ngRoute', 'ngFileUpload', 'route-segment', 'view-segment']);

// app.config(['$routeSegmentProvider', '$routeProvider', function($routeSegmentProvider, $routeProvider){

// 	$routeSegmentProvider.
// 	when('/', 'app.index').
// 	when('/blogs', 'app.blogs').
// 	when('/posts', 'app.posts').
// 	when('/users', 'app.users')

// 	.segment("app", {
// 		templateUrl: '/templates/app.html',
// 		controller: 'appController'
// 	})
// 	.within()

// 	.segment('index', {
// 		templateUrl: '/templates/posts/index.html',
// 		controller: 'postController'
// 	})
// 	.segment('blogs', {
// 		templateUrl: '/templates/blogs/index.html',
// 		controller : 'blogsController'
// 	})
// 	.segment('posts', {
// 		templateUrl: '/templates/posts/index.html',
// 		controller: 'postController'
// 	})
// 	.segment('users`', {
// 		templateUrl: '/templates/users/index.html',
// 		controller: 'usersController'
// 	})

// 	$routeProvider.otherwise({ redirectTo: '/' })
// }])

// app.config(['$routeSegmentProvider','$locationProvider', function($routeSegmentProvider, $locationProvider){

//  	$routeSegmentProvider.
// 	when('/', 'app.index').
// 	when('/blogs', 'app.blogs').
// 	when('/posts', 'app.posts').
// 	when('/users', 'app.users')

//  	.segment("app", {
// 		templateUrl: '/templates/app.html',
// 		controller: 'appController'
// 	})
// 	.within()

// 	.segment('index', {
// 		templateUrl: '/templates/posts/index.html',
// 		controller: 'postController'
// 	})

// 	.within()

// 	.segment('blogs', {
// 		templateUrl: '/templates/blogs/index.html',
// 		controller: 'blogsController'
// 	})

// 	.within()

// 	.segment('posts', {
// 		templateUrl: '/templates/posts/index.html',
// 		controller: 'postController'
// 	})

// 	.within()

// 	.segment('users', {
// 		templateUrl: '/templates/users/index.html',
// 		controller: 'usersController'
// 	})
// }])

app.config(function($routeSegmentProvider){

	$routeSegmentProvider.
	when('/', 'app').
	when('/app/posts', 'app.posts').
	when('/app/blogs', 'app.blogs').

	segment('app',{
		templateUrl: 'templates/app/app.html',
		controller: 'appController'
	}).
	within().
	segment('blogs',{
		default: true,
		templateUrl: 'templates/app/blogs.html',
		controller: 'blogsController'
	})
	.segment('posts', {
		templateUrl: 'templates/app/posts.html'
	})
})

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});