"use strict";

window.addEventListener('DOMContentLoaded', function() {
    console.log("heehh");
    setTimeout(showBox, 1000);
  });

const box = document.querySelector(".cookieBox");

function showBox() {
    box.style.transform = `translate(0vw, 0vh)`;
}

const clickClose = document.querySelector("button");

function closeBox() {
    clickClose.addEventListener("click", function(){
        box.style.transform = `translateX(-40vw)`;
    });
}

closeBox();


