/**
 * Created by Matt on 9/20/2014.
 */
angular.module('CannaWebApp').controller('DashboardCtrl', [
        '$scope',
        'sensorFactory',
        function($scope, sensorFactory){

            $scope.selectedSensor = null;

            $scope.sensors = sensorFactory.query();
            $scope.sensors.$promise.then(function(result){
                $scope.sensors = result;
                // Dynamically build a list of all sensor types
                var lookup = {};
                var result = [];
                for (var item, i = 0; item = $scope.sensors[i++];) {
                    var name = item.type;
                    if (!(name in lookup)) {
                        lookup[name] = 1;
                        result.push(name);
                    }
                }
                $scope.types = result;
            });



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

