/**
 * Created by Matt on 9/20/2014.
 */

var app = angular.module('CannaWebApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider',
        function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'views/dashboard.html',
                controller : 'DashboardCtrl'
            })
            .when('/dashboard', {
                templateUrl : 'views/dashboard.html',
                controller : 'DashboardCtrl'
            })
            .when('/live', {
                templateUrl : 'views/live.html',
                controller : 'LiveCtrl'
            })
            .when('/settings', {
                templateUrl : 'views/settings.html',
                controller : 'SettingsCtrl'
            })
            .when('/help', {
                templateUrl : 'views/help.html',
                controller : 'HelpCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])





