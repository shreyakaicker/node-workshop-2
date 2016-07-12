var requestJson = require('./library/request-json.js') ;
var prompt = require('prompt');
var request = require('request'); 
var requestJson = requestJson.requestJson;

var aPIKey = '410a93d31bf1104f373d9535a643d0c8';
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
// https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME
var add = 'https://api.forecast.io/forecast/410a93d31bf1104f373d9535a643d0c8/'

prompt.get('userLocation', function(err, answer) {
    if (err) {
        console.log('sorry, there was an error');
    }
    else {
        var placeUrl = locationUrl + answer.userLocation;
        console.log(placeUrl);
        requestJson(placeUrl, function (err, data) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var parseBody = data;
                var userLatitude = parseBody.results[0].geometry.location.lat;
                var userLongitude = parseBody.results[0].geometry.location.lng;
                console.log('user latitude ' + userLatitude);
                console.log('user longitude ' + userLongitude);
                var apiURL = add + userLatitude + ',' + userLongitude;
                console.log(apiURL);
            }
        });
    }
})
