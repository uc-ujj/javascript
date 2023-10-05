// 1. Write a function to sort a list of words (an array) in alphabetical order.

function sortWords(words) {
    return words.sort();
}

let words = ["apple", "banana", "watermelon", "mango", "melon"];
console.log(sortWords(words));

// 2. Write a JavaScript function to get the number of occurrences of each letter in the specified string.

function countLetters(word) {
    freq = {};
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (freq[letter]) {
            freq[letter]++;
        } else {
            freq[letter] = 1;
        }
    }
    return freq;
}

let word = "ujjawal";
console.log(countLetters(word));

// 3. Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(4)); // false
console.log(isPrime(5)); // true

// 4. Write a JavaScript program to count the number of words in a string.
// Remove white-space from start and end position.
// Convert 2 or more spaces to 1.
// Exclude newline with a start spacing.

function countWords(str) {
    str = str.trim();
    str = str.split("  ");
    str = str.filter(char => char !== " ");

    return str.length;
}

let word1 = "    JavaScript        Test      ";
console.log(countWords(word1));

// 5. How will you get the Checkbox status whether it is checked or not?

let checkbox = document.getElementById("check");
if (checkbox.checked) {
    console.log("The Checkbox is checked");
} else {
    console.log("The Checkbox is not checked");
}

// 6. Write a JavaScript function to add rows to a table.

const table = document.getElementById("test-table");
function addRow(row) {
    const newRow = table.insertRow();
    row.forEach(vegetable => {
        let cell = newRow.insertCell();
        cell.textContent = vegetable;
    });
}

let row = ["Tomato", "Potato", "Cucumber"];
addRow(row);

// 7. Write a javascript program to draw a rectangle using canvas.

// 8. Take any four equal size images and write a script to move the image in a circular manner.
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");

// 9. Write a text (eg: www.ucertify.com) and move it with your mouse.

let text = document.getElementById("move-text");
let textPosition = text.offsetLeft;

// 10. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

let personName = "ujjawal";
console.log(reverse(personName));
