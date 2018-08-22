angular.module('myAdmin.controllers',[]);
angular.module('myAdmin.services',[]);
angular.module('myAdmin.directives',[]);
var app =  angular.module('myAdmin', ['myAdmin.controllers', 'ngRoute', 'ngFileUpload', 'route-segment', 'view-segment', 'ui.router']);

app.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);

// app.config(function($routeSegmentProvider, $routeProvider){
// 	$routeSegmentProvider.options.autoLoadTemplates = true;

// 	$routeSegmentProvider

// 	.when('/', 's1')
// 	.when('/section1/home', 's1.home')
//   .when('/section1/test', 's1.test')

// 	$routeSegmentProvider

// 	.when('/', 's1')
// 	.when('/section1/home', 's1.home')
//   .when('/section1/test', 's1.test')

// 	.segment('s1',{
// 		templateUrl: 'templates/section1.html',
// 		controller: 'appController'
// 	})
// 	.within()

// 		.segment('home', {
// 			templateUrl: 'templates/section1/home.html',
// 			controller: 'blogsController'
// 		})

// 		.segment('test', {
// 			templateUrl: 'templates/section1/test.html',
// 			controller: 'testController'
// 		})

// 	$routeProvider.otherwise({ redirectTo: '/' })
// })

app.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/section1/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit   
            url: '/about',
            templateUrl: 'templates/section1/test.html'    
        });

});

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});