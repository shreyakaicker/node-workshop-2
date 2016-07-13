 var synonyms = require('./library/synonyms.js');
 var prompt = require("prompt");
 
 var newUser = new synonyms("6b4191c20c0dd87617418e075a82c63c");
 
 var question = [{
         name: "word",
         description: "Enter word"
     }];
     
 
     prompt.start();
     prompt.get(question, function(err, result) {
         console.log("You are searching for the word: " + result.word);
         console.log("synonyms for this word: ");
         
         newUser.getSynonyms(result.word, function(placeholder){
             console.log(placeholder);
         });
     }); 