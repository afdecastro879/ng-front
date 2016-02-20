(function () {
    'use strict';

    var mainApp = angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/home');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
            // -----------------------------------
            // MAIN STATES
            // -----------------------------------
            .state('home', {
                url: '/home/:idPet',
                controller: 'NGFrontCtrl',
                templateUrl: 'templates/views/home.html'
            })
        ;
    } // routesConfig
})();
