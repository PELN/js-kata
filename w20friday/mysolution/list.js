"use strict";

window.addEventListener("DOMContentLoaded", buildList);

const list_data = [
    {
      link: "http://javascript.info/",
      description: "The Modern JavaScript Tutorial"
    },
    {
        link: "https://docs.google.com/spreadsheets/d/1n98cUW2htrh8tCvciUuXcjl9B826TuwZ9KjACsmnOW0/edit?usp=sharing",
        description: "The weekplan"
    },
    {
        link: "https://www.codecademy.com/learn/learn-the-command-line",
        description: "Command-line tutorial"
    },
    {
        link: "https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70",
        description: "Modern JavaScript Explained For Dinosaurs"
    },
    {
        link: "https://nodejs.org/en/",
        description: "Node.js"
    },
    {
        link: "https://git-scm.com/downloads",
        description: "git"
    },
    {
        link: "https://github.com/jofhatkea/js-kata",
        description: "The Kata with exercises"
    },
    {
        link: "http://flukeout.github.io",
        description: "CSS Selector practice"
    },
    {
        link: "https://code.visualstudio.com/",
        description: "Visual Studio Code editor"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        description: "MDN Array"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        description: "MDN String"
    },
    {
        link: "https://www.ecma-international.org/publications/standards/Ecma-262.htm",
        description: "ECMAScript standard specification"
    },
    {
        link: "https://www.w3schools.com/js/default.asp",
        description: "W3Schools JavaScript tutorial"
    },
    {
        link: "https://www.w3schools.com/jsref/default.asp",
        description: "W3Schools JavaScript reference"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "MDN JavaScript reference and guides"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        description: "The DOM"
    }
];




// create a <li>-element for each one, let it contain a link to the link, with the description as text
function createLi(item) {  
    const li = document.createElement("li");
    let text = item.description;
    let URL = item.link;

    li.innerHTML = text.link(URL);

    return li;
}


function buildList() {
    let dataArr = Array.from(list_data);
    const list = document.querySelector("#thelist");

    // build a list of all the links in list_data
    dataArr.forEach(element => {
    // use the createLi function to create an li-element
        let newElm = createLi(element);
    // append all the created <li>-elements to #thelist
        list.appendChild(newElm);
    });
}


// document.querySelector("li").addEventListener(mouseover)({
    

// });



const img = document.querySelector("#jsimg");

img.addEventListener("click", randomMove);

function randomMove() {
    img.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
}

