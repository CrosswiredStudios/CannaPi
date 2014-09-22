/**
 * Created by Matt on 9/21/2014.
 */
angular.module('CannaWebApp')
    .directive('cannaSensorFan', function(){
        return {
            restrict: 'AEC',
            replace: 'false',
            templateUrl : 'scripts/directives/canna-sensor-fan.html'
        };
});