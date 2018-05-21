"use strict";

// if you don't want to it be called on load 
        // (function(){})

window.addEventListener("load", function(){

    // listen for clicks on the color-selectors
    let container = document.querySelector("#colorselector");


    // when one is clicked:
    container.addEventListener("click", e=>{
        // console.log(e.target);


        // find the element that was clicked
        const clickedLi = e.target;

            // find the color from that element
            console.log(clickedLi.dataset.color);
       

        // set the css variable --basecolor 
        document.documentElement.style.setProperty("--basecolor", clickedLi.dataset.color);



});

// .documentElement is getting elements from html
// .style is getting css elements


});
