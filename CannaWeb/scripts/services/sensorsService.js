/**
 * Created by Matt on 9/20/2014.
 */
angular.module('CannaWebApp')
    .factory('sensorFactory', ['$resource', function($resource){
        return $resource('http://192.168.7.2:420/api/sensorData/:id',
            { get: { method: "JSONP" }});
    }]);