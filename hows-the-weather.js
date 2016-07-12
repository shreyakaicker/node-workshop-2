var requestJson = require('./library/request-json.js') ;
var prompt = require('prompt');
var request = require('request'); 
var requestJson = requestJson.requestJson;
// var colors = require('colors');
// var cli-table = require('cli-table');
// var node-emoji = require('node-emoji');


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
        // console.log(placeUrl);
        requestJson(placeUrl, function (err, data) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var parseBody = data;
                var userLatitude = parseBody.results[0].geometry.location.lat;
                var userLongitude = parseBody.results[0].geometry.location.lng;
                // console.log('user latitude ' + userLatitude);
                // console.log('user longitude ' + userLongitude);
                var apiURL = add + userLatitude + ',' + userLongitude;
                // console.log(apiURL);
                
                
                requestJson(apiURL, function (err, data1) {
            if (err) {
                console.log('there was an error');
            }
            else {
                  var parsedBody = data1;
                  var userForecast = parsedBody.daily.data[0].summary;
                  console.log("The weather for today is; " + userForecast);
                  
                //   var userForecast2 = parsedBody.daily.data[1].summary;
                //   console.log("The weather for tomorrow is; " + userForecast2);
                  
                //   var userForecast3 = parsedBody.daily.data[2].summary;
                //   console.log("The weather for day after tom is; " + userForecast3);
                  
                //   var userForecast4 = parsedBody.daily.data[3].summary;
                //   console.log("The weather for 3 days later is; " + userForecast4);
                  
                //   var userForecast5 = parsedBody.daily.data[4].summary;
                //   console.log("The weather for 4 days later is; " + userForecast5);
                
                console.log("The weather for the next few days is: ")
                var userForecast5 = parsedBody.daily.data.slice(1,5).map(function(data){
                    return data.summary;
                });
                
                 console.log(userForecast5);
            }})
            }
        });
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    }
})
