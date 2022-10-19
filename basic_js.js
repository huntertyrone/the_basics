"use script"

let today = new Date();

let luckyNum = Math.floor(Math.random() * 30 + 1);

document.getElementById("dateTime").innerHTML = today;
document.getElementById("num").innerHTML = luckyNum;

function displayText() {document.getElementById("hidden").innerHTML = "Hey! this wasn't here before!<br/> And now it is!";
document.getElementByTagname("p")[0].style.color = "silver";}