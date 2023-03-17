"use strict";

// populate top row cells
// populate vertical row cells

const columnHeadings = ["Mon", "Tues", "Weds", "Thur", "Fri", "Sat", "Sun"];

for (let day of columnHeadings) {
  console.log(day);
}

const tues4th = document.querySelector(".tues4th");
const expBtn = document.querySelector(".expBtn");
const timerBtn = document.querySelector(".timerBtn");

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

timerBtn.addEventListener("click", () => {
  alert(
    "Not done this bit yet \n It will be a Pomodoro-type Timer when it is done."
  );
});

// ideas for this app
// add a Pomodoro-style timer as extra functionality

// programmatically add buttons to all cells in row1

for (let a = 1; a < 7; a++) {
  // go through all row1 td
  // (this is not the way)
}
