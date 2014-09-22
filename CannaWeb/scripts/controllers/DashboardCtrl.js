/**
 * Created by Matt on 9/20/2014.
 */
angular.module('CannaWebApp').controller('DashboardCtrl', [
        '$scope',
        'sensors',
        function($scope, sensors, $routeParams){
            $scope.selectedSensor = null;
            $scope.sensors = sensors.sensorList;
            $scope.types = sensors.typesList;
            $scope.lightOn = false;



            // selectSensor(event) - Fires when a user clicks on a sensor from the left nav panel
            $scope.selectSensor = function(e){

                $('.active').removeClass('active');
                $(e.currentTarget).addClass('active');

                // Determine the selected sensor
                var sensorId = $('.active').data('sensor-id');
                $scope.selectedSensor = $scope.sensors[sensorId];
            }
        }]
)

