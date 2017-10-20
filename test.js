



function stackWords() {
   var numberOfCalls = [];

   if (arguments.length!=0)
   var w = arguments[0];


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

fn();
myArray = fn();

myArray = myArray.filter(function(x) {
    return x !== undefined && x !== null; 
});
console.log(myArray);
