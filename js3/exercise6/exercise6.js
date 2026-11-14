"use strict";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let result;
let list = "";

do {
    result = rollDice();
    list += `<li>${result}</li>`;
} while (result !== 6);

document.querySelector("#target").innerHTML = list;