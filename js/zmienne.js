"use strict";

function pobierzImie(event) {
    event.preventDefault();
var formularz = document.getElementsByTagName("formularz");

var inputs = document.getElementsByTagName("input");
var i = 0;
while(i < inputs.length) {
    if(inputs[i].type != "submit") {
    console.log(inputs[i].value)}
    i++;
}
}
