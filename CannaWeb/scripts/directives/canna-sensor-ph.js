/**
 * Created by Matt on 9/21/2014.
 */
angular.module('CannaWebApp')
    .directive('cannaSensorPh', function(){
        return {
            restrict: 'AEC',
            replace: 'false',
            templateUrl : 'scripts/directives/canna-sensor-ph.html'
        };
});