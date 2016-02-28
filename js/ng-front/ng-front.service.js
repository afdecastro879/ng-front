(function () {
    'use strict';

    angular
        .module('ng-front')
        .service('NGFrontService', NGFrontService);

    NGFrontService.$inject = ['Restangular', '$http'];
    function NGFrontService($rest, $http) {
        this.getPetLocationById = function (petId) {
            return $rest.one('pet').one('location', petId).get();
        }
        this.getParks = function (petId) {
            return $http.get("http://localhost:3001/park/"+petId);
        }
    }
})();
