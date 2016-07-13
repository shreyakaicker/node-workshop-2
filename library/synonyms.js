// In this file, create and export a constructor function called SynonymAPI.
// It takes an api key as parameter and sets it on the new object
// In the prototype of SynonymAPI, add a function getSynonyms. It takes a word 
// and a callback. It makes a request to the web api and gives back the results
// as an object to the callback function.
// If there was an error, it should be passed down to the callback



// var request = require("request");
 
//  function SynonymAPI(apiKey) {
 
//      this.apiKey = apiKey;
 
//  }
 
//  SynonymAPI.prototype = {
//      getSynonyms: function(word, callback) {
 
//          var wwwThesaurus = "http://words.bighugelabs.com/api/2/"+this.apiKey+"/"+word+"/json";
 
//          request(wwwThesaurus, function(err, result) {
//              callback(JSON.parse(result.body));
             
 
 
//          });
//      }
//  }
 
 
 
//  module.exports = {
//      SynonymAPI: SynonymAPI
//  }

var request = require("request");
 
 function SynonymAPI(apiKey) {
     this.apikey = apiKey;
 }
 
 SynonymAPI.prototype.getSynonyms = function(word, callback) {
 
     var address = "http://words.bighugelabs.com/api/2/"+this.apikey+"/"+word+"/json"
     request(address, function(err, result) {
         var resultObject = JSON.parse(result.body);
         callback(resultObject.noun.syn);
     });
 };
 
 module.exports = SynonymAPI; 