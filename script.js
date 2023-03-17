"use strict";

const tues4th = document.querySelector(".tues4th");
const expBtn = document.querySelector(".expBtn");

// identify day of the week and highlight it
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = new Date();
let thisDay = weekday[today.getDay()];
console.log(thisDay);

// let cols = document.getElementsByTagName("col");
// console.log(cols)

// cols.forEach(col => {

// })

let todayColumn = document.getElementById(thisDay);
todayColumn.classList.add("today");

// _________________________________________________

//  style="background-color:#244008; border:4px solid white;"

tues4th.addEventListener("click", () => {
  console.log("working");
  let newVal = prompt("Enter new");
  tues4th.innerText = newVal;
});

expBtn.addEventListener("click", () => {
  prompt("Choose format");
});

// ideas for this app
// add a Pomodoro-style timer as extra functionality
