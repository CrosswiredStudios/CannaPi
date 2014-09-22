/**
 * Created by Matt on 9/21/2014.
 */
angular.module('CannaWebApp')
    .directive('cannaSensorLight', function(){
        return {
            restrict: 'AEC',
            replace: 'false',
            templateUrl : 'scripts/directives/canna-sensor-light.html'
        };
});