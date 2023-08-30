/** Three pillars of JavaScript
 * Types / Coercion
 * Scope / Closures
 * this / Prototypes
 */

// Values
// 42, 2.15, "Hello, Ujjawal.";

/*
true;
false;
null;
undefined[(1, 2, 3)];
{
  name: "Ujjawal";
*/

// Operations

/**
 * 3 + 4
 * 43 - 23
 * 'Ujjawal' + 'Gupta'
 * !false
 * 3.0 == 3
 * 3 < 4
 * true || false
 *
 */

// To check the type of anything in JavaScript
typeof 23;
typeof "Ujjawal";
typeof [1, 2, 3, 4];
typeof { lastName: "Gupta" };

// Vairables
var firstName = "Ujjawal";
const lastName = "Gupta";
let age = 23;

const items = ["html", "css", "javascript", "react"];

console.log(items);
console.log(items.length);
console.log(items[1]);

age++;
age += 2;

console.log(age);

// Expression and Statements

var age1 = 24;
age1 = 1 + (age1 * 2)

(age * 2)

// Conditions
if (age > 18) {
    console.log('You are eligible for voting')
} else {
    console.log('You cannot Vote!!')
}




