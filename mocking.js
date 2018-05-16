"use strict";

// get the original text
// const text = "my original text";
const text = document.querySelector("#original").textContent;

// convert it into an array
const letters = Array.from(text);

// loop through the awway, on character at a time
letters.forEach(randomize);

function randomize(value, index, array) {
    // console.log(`${value} i: ${index}`);

    // comment: array is the same array as letters
    let letter = array[index];

    // get a random number
    const rand = Math.random();

    // make the character upper or lower case depending on the random number
    if(rand < 0.5) {
        letter = letter.toUpperCase();
    } else {
        letter = letter.toLowerCase();
    }

    array[index] = letter;
}

// finally - convert the array back to a string
const convert = (letters.join(''));

// and put the string in the html
const newText = document.querySelector("#original").textContent = convert;






















