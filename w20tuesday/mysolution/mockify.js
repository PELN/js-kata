"use strict";

let text = document.querySelector('h1').textContent;
console.log(text);

let letters = Array.from(text);
letters.forEach(mockify);


// create a function called `mockify` that receives a string,
function mockify(value, index, array) {

let letter = array[index];
const random = Math.random();

// and returns a mocified version of that string.

if(random < 0.5) {
    letter = letter.toUpperCase();
} else {
    letter = letter.toLowerCase();
}

array[index] = letter;

}

const convert = (letters.join(''));

const newText = document.querySelector("h1").textContent = convert;

