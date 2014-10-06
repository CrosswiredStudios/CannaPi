/**
 * Created by Matt on 9/20/2014.
 */
angular.module('CannaWebApp').controller('DashboardCtrl', [
        '$scope',
        'sensorFactory',
        function($scope, sensorFactory){

            // Start the page off with no sensors selected
            $scope.selectedSensor = null;
            // User the sensor service to get all the sensors
            $scope.sensors = sensorFactory.query();
            // After the server returns the sensors
            $scope.sensors.$promise.then(function(result){
                // Set the sensors to the response
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

            // changeLight
            $scope.setLight = function(id, state){
                var stateAsInt = (state == false) ? '0' : '1';
                console.log(state);
                console.log(stateAsInt);
                $.ajax({
                    url: "http://192.168.7.2:420/api/sensor/set/light/" + id + "/" + stateAsInt
                });
            }
        }]
)

