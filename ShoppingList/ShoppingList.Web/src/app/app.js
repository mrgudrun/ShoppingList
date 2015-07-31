
'use strict';
angular.module('app', ['ui.router', 'app.login', 'base64', 'ngCookies']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
            url: "/login",
            templateUrl: "app/login/login.html",
            data:{pageTitle: 'Login'}
        })
        .state('signUp', {
            url: "/signUp",
            templateUrl: "app/signUp/signUp.html"
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "app/main/main.html"
        });
    $urlRouterProvider.otherwise('/login');
});
