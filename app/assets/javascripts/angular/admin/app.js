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

	.when('/', 's1')
	.when('/section1/home', 's1.home')
  .when('/section1/test', 's1.test')

	$routeSegmentProvider.segment('s1', {
    templateUrl: 'templates/section1.html',
    controller: appController});

	$routeSegmentProvider.within('s1').segment('home', {
	  templateUrl: 'templates/section1/home.html',
	  controller: blogsController});

	$routeSegmentProvider.within('s1').segment('test', {
    templateUrl: 'templates/section1/test.html',
    controller: testController
  });

// $routeSegmentProvider.within('s1').within('itemInfo').segment('overview', {
//     templateUrl: 'templates/section1/item/overview.html'});

	// $routeSegmentProvider

	// .when('/', 's1')
	// .when('/section1/home', 's1.home')
 //  .when('/section1/test', 's1.test')

	// .segment('s1',{
	// 	templateUrl: 'templates/section1.html',
	// 	controller: 'appController'
	// })
	// .within()

	// 	.segment('home', {
	// 		templateUrl: 'templates/section1/home.html',
	// 		controller: 'blogsController'
	// 	})

	// 	.segment('test', {
	// 		default: true,
	// 		templateUrl: 'templates/section1/test.html',
	// 		controller: 'testController'
	// 	})

	// $routeProvider.otherwise({ redirectTo: '/' })
})

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});