/**
 * Created by Matt on 9/21/2014.
 */
angular.module('CannaWebApp')
    .directive('cannaSensorPump', function(){
        return {
            restrict: 'AEC',
            replace: 'false',
            templateUrl : 'scripts/directives/canna-sensor-pump.html'
        };
});