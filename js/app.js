// script.js

    // create the module and name it mainApp
        // also include ngRoute for all our routing needs
    var mainApp = angular.module('mainApp', ['ngRoute']);

    // configure our routes
    mainApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'contactController'
            });
    });
