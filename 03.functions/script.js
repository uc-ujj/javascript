// Function Expression

const greet = function () {
  console.log("Hi, how are you!");
};

// Named Function Expression
const greetName = function takeName(name) {
  console.log(`Hi ${name}`);
};

// IIFE - Immediadely Invoked Function Expression
var teacher = "Ujjawal";
(function anotherTeacher() {
  var teacher = "Naman";
  console.log(teacher); //Naman
})();

console.log(teacher); //Ujjawal

// Closure
/**
 * A function which 'remembers' the variables outside of it, even if you pass that function elsewhere.
 */

// Example of a Closure
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is a Closure?");

// Example 2
function askMe(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

const myQuestion = askMe("What is Closure?");

myQuestion();

// this - A this-aware function can thus have a different context each time it's called, which makes it more flexible & reusable

// Tricky output questions
console.log(10 + '20')  // '1020'
console.log(9 - '5')    // '3'
console.log('Java' + 'Script')  //JavaScript
console.log(' ' + 0)    // '0'
console.log('Ujjawal' - 'Gupta')    // NaN
console.log(true + true)    // 2
console.log(true + false)   // 1
console.log(false + true)   // 1
console.log(false - true)   // -1

console.log(NaN === NaN)        // false
console.log(Number.NaN === NaN) // false
console.log(isNaN(NaN))         // true
console.log(Number.NaN)         // true
console.log(Number.isNaN(NaN))  //  true
