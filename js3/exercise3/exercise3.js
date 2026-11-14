"use strict";

const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt("Enter dog's name: ");
    dogs.push(name);
}

dogs.sort();

let list = "";

for (let i = dogs.length - 1; i >= 0; i--) {
    list += `<li>${dogs[i]}</li>`;
}

document.querySelector("#target").innerHTML = list;