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

app.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function($routeSegmentProvider, $routeProvider){
	$routeSegmentProvider.options.autoLoadTemplates = true;

	$routeSegmentProvider
	// when('/', 'app').
	// when('/posts', 'app.posts').
	// when('/blogs', 'app.blogs').
	// when('/users', 'app.users').

	.when('/section1',          's1')
  .when('/section1/prefs',    's1.pref')
  .when('/section1/:id',      's1.itemInfo')
  .when('/section1/:id/X',    's1.itemInfo.tab1')
  .when('/section1/:id/Y',    's1.itemInfo.tab2')

	.segment('s1',{
		templateUrl: 'templates/section1.html',
		controller: 'appController'
	})
	.within()

		.segment('home', {
			templateUrl: 'templates/section1/home.html',
			controller: 'blogsController'
		})
		.segment('itemInfo',{
			default: true,
			templateUrl: 'templates/section1/item.html',
			controller: 'blogsController'
		})
		.up()
		.segment('pref', {
			templateUrl: 'templates/section1/pref.html'
		})

	$routeProvider.otherwise({ redirectTo: '/section1' })
})

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});