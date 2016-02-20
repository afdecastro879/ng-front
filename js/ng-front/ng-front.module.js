/**
 * Created by andre on 19/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('ng-front', [
            'restangular',
            'ngStorage',
            'ngRoute',
            'app.restangular',
            'ui.router',
            'app.routes',
            'uiGmapgoogle-maps'
        ]);
})();