angular.module('myAdmin.controllers',[]);
angular.module('myAdmin.services',[]);
angular.module('myAdmin.directives',[]);
var app =  angular.module('myAdmin', ['myAdmin.controllers', 'ngRoute', 'ngFileUpload', 'route-segment', 'view-segment', 'ui.router']);

// app.config(['$qProvider', function ($qProvider) {
//   $qProvider.errorOnUnhandledRejections(false);
// }]);

//==========Route Segment===============
app.config(['$routeSegmentProvider', '$routeProvider', '$locationProvider', function($routeSegmentProvider, $routeProvider, $locationProvider){
  
  $locationProvider.html5Mode(true)
  $routeSegmentProvider.options.autoLoadTemplates = true;
  $routeSegmentProvider.

    when('/', 'app').
    when('/posts', 'app.posts').
    when('/blogs', 'app.blogs').
    // when('/section1/prefs',    's1.prefs').
    // when('/section1/:id',      's1.itemInfo').
    // when('/section1/:id/edit', 's1.itemInfo.edit').
    // when('/section2',          's2').

    segment('app', {
        templateUrl: '/templates/app/app.html',
        controller: 'appIndexController',
    }).

    within().

        segment('posts', {
            templateUrl: 'templates/app/posts.html'
        }).

        segment('blogs', {
            templateUrl: 'templates/app/blogs.html'
        });


    //     within().
      
    //         segment('overview', {
    //             default: true
    //             templateUrl: 'templates/section1/item/overview.html'}).

    //         segment('edit', {
    //              templateUrl: 'templates/section1/item/edit.html'}).

    //         up().

    //     segment('prefs', {
    //         templateUrl: 'templates/section1/prefs.html'}).

    //     up().

    // segment('s2', {
    //     templateUrl: 'templates/section2.html',
    //     controller: MainCtrl});
}]);
//=======Ui Routing==========
// app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  
//     $urlRouterProvider.otherwise('/section1');
//     $stateProvider

//     		.state('section1', {
//     			url: '/section1',
//     			templateUrl: 'templates/section1.html'
//     		})

//         // HOME STATES AND NESTED VIEWS ========================================
//         // .state('home', {
//         //     url: '/home',
//         //     templateUrl: 'templates/section1/home.html'
//         // })

//         .state('section1.home', {
//           url: '/home',
//           templateUrl: 'templates/section1/home.html',
//           controller: function($scope) {
//             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//           }
//         })

//         .state('section1.about', {
//           url: '/about',
//           templateUrl: 'templates/section1/test.html',
//           controller: function($scope) {
//             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//           }
//         })

//         .state('section1.home.list', {
//           url: '/list',
//           templateUrl: 'templates/section1/pref.html',
//           controller: function($scope) {
//             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//           }
//         })

//         // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//         .state('about', {
//             // we'll get to this in a bit   
//             url: '/about',
//             templateUrl: 'templates/section1/test.html'    
//         });
// });

app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});