/**
 * Created by Matt on 9/20/2014.
 */
angular.module('CannaWebApp')
    .factory('sensors', [function(){

        // Create some fake sensor data
        var sensors = [
            {id: '0', roomId: '0', type: 'light', name: 'Veg Light', data: {status: 'false'}},
            {id: '1', roomId: '1', type: 'light', name: 'Flower Light', data: {status: 'true'}},
            {id: '2', roomId: '0', type: 'fan', name: 'Veg Bulb Fan', data: {status: 'on'}},
            {id: '3', roomId: '0', type: 'fan', name: 'Veg Room Fan', data: {status: 'off'}},
            {id: '4', roomId: '1', type: 'fan', name: 'Flower Bulb Fan', data: {status: 'on'}},
            {id: '5', roomId: '1', type: 'fan', name: 'Flower Room Fan', data: {status: 'off'}},
            {id: '6', roomId: '0', type: 'ph', name: 'Resevoir pH', data: {value: '5.7', min: '5.5', max: '6.2'}},
            {id: '7', roomId: '0', type: 'tds', name: 'Resevoir TDS', data: {value: '896', min: '800', max: '1500'}}
        ];

        // Dynamically build a list of all sensor types
        var lookup = {};
        var result = [];
        for (var item, i = 0; item = sensors[i++];) {
            var name = item.type;
            if (!(name in lookup)) {
                lookup[name] = 1;
                result.push(name);
            }
        }

        // Return an object with the sensor data and a list of unique sensor types
        var o = {
            sensorList: sensors,
            typesList: result
        };
        return o;
    }]);