



function stackWords(word) {
   var numberOfCalls = [];

   var w = word;
   return function(w) {
     
     numberOfCalls.push(w);

   	  console.log(numberOfCalls);
      return numberOfCalls;
   }

}

var fn = stackWords();
var word ="ворона";
fn(word); //1
var word ="грач";
fn(word); //2
var word ="собака";
fn(word); //3
