
'use strict';
angular.module('app', ['ui.router', 'app.login', 'app.signUp', 'app.navigation', 'app.main', 'app.compose', 'base64', 'ngCookies', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
            url: "/login",
            templateUrl: "app/login/login.html",
            data:{pageTitle: 'Login'}
        })
        .state('signUp', {
            url: "/signUp",
            templateUrl: "app/signUp/signUp.html"
        })

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "app/common/content.html"
        })

        .state('index.main', {
            url: "/main",
            templateUrl: "app/main/main.html"
        })
        .state('index.compose', {
            url: "/compose/:id",
            templateUrl: "app/shoppinglist/compose.html"
        });


    $urlRouterProvider.otherwise('/login');
})
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
;
