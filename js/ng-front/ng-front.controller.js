(function () {
    'use strict';

    angular
        .module('ng-front')
        .controller('NGFrontCtrl', NGFrontCtrl);

    NGFrontCtrl.$inject = ['$scope', 'NGFrontService', '$stateParams'];
    function NGFrontCtrl($scope, FrontSvc, $stateParams) {
        $scope.map = {};
        $scope.docs = [];
        $scope.coords = [];
        $scope.current = {};
        $scope.currentOptions = {icon:'https://lh5.ggpht.com/gKl-6XRG106R4ZVnIW6gPQs2DLJK34Mg5bob6Hkr_icMRXtYodkuYTR1qWS8Zr-WH2BetB9e=h20'};
        FrontSvc.getPetLocationById($stateParams.idPet).then(function (data) {
            $scope.map = { center: { latitude: data.pet.loc.coordinates[1], longitude: data.pet.loc.coordinates[0] }, zoom: 16 };
            $scope.current = {
                latitude: data.pet.loc.coordinates[1],
                longitude: data.pet.loc.coordinates[0]
            };
            $scope.docs = data.docs;
            angular.forEach($scope.docs, function(value, key) {
                $scope.coords[key] = {
                    "id": value._id,
                    "latitude": value.loc.coordinates[1],
                    "longitude": value.loc.coordinates[0],
                    "title": value.name,
                    "icon": value.style
                }
            });
        });
    }
})();
