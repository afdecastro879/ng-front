(function () {
    'use strict';

    angular
        .module('ng-front')
        .controller('SaludCtrl', SaludCtrl);

    SaludCtrl.$inject = ['$scope', 'NGFrontService', '$stateParams'];
    function SaludCtrl($scope, FrontSvc, $stateParams) {
        $scope.map = {};
        $scope.docs = [];
        $scope.coords = [];
        $scope.current = {};
        $scope.currentOptions = {icon:'https://lh5.ggpht.com/gKl-6XRG106R4ZVnIW6gPQs2DLJK34Mg5bob6Hkr_icMRXtYodkuYTR1qWS8Zr-WH2BetB9e=h20'};
        FrontSvc.getParks($stateParams.idPet).then(function (data) {
            $scope.map = { center: { latitude: data.pet.loc.coordinates[1], longitude: data.pet.loc.coordinates[0] }, zoom: 16 };
            $scope.current = {
                latitude: data.pet.loc.coordinates[1],
                longitude: data.pet.loc.coordinates[0]
            };
            $scope.docs = data.parks;
            angular.forEach($scope.docs, function(value, key) {
                var numEnfermos = 0;
                angular.forEach(value.mascotas, function(value2, key2) {
                    if(value2.enfermo){
                        numEnfermos++;
                    }
                });
                var icon;
                if(numEnfermos==0){
                    icon = 'https://cdn4.iconfinder.com/data/icons/geo-points-1/154/moon-place-location-gps-32.png';
                }else{
                    icon = 'http://i.stack.imgur.com/cdiAE.png';
                }
                $scope.coords[key] = {
                    "id": value._id,
                    "latitude": value.loc.coordinates[1],
                    "longitude": value.loc.coordinates[0],
                    "title": value.name,
                    "icon": {url:    icon }
                }
            });
        });
    }
})();

