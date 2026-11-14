"use strict";

const participants = [];
const numberOfParticipants = Number(prompt("Enter the number of participants: "));

for (let i = 0; i < numberOfParticipants; i++) {
    const name = prompt("Enter participant's name: ");
    participants.push(name);
}

participants.sort();

let list = "";

for (let i = 0; i < participants.length; i++) {
    list += `<li>${participants[i]}</li>`;
}

document.querySelector("#target").innerHTML = list;