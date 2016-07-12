var request = require('request'); 
// var url = 'http://jsonplaceholder.typicode.com/users';

function requestJson(url, callback) {
    request(url, function (err, response) {
        if (err) {
            callback(err);
        } else {
            try {
                var parsed = JSON.parse(response.body);
                callback(null, parsed)
            } catch (err) {
                callback(err)
            }
        }
    })
}

// requestJson(url, function(err, response) {
//     if (err) {
//         console.log ("error");
//     }
//     else {
//     console.log(response);
//     }
// })


module.exports = {
    requestJson: requestJson
    
};