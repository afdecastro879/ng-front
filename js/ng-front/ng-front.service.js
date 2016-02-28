(function () {
    'use strict';

    angular
        .module('ng-front')
        .service('NGFrontService', NGFrontService);

    NGFrontService.$inject = ['Restangular', '$http'];
    function NGFrontService($rest, $http) {
        this.getPetLocationById = function (petId) {
            return $rest.one('petsLocation', petId).get();
        };
        this.getParks = function (petId) {
            return $rest.one('petsHealth', petId).get();
        }
    }
})();
