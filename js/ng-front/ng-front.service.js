(function () {
    'use strict';

    angular
        .module('ng-front')
        .service('NGFrontService', NGFrontService);

    NGFrontService.$inject = ['Restangular'];
    function NGFrontService($rest) {
        this.getPetLocationById = function (petId) {
            return $rest.one('pet').one('location', petId).get();
        }
    }
})();
