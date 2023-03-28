import playSound from "./sfxPlayer.js";
import displayMessage from "./messageArea.js";
import addCellListeners from "./addCellListeners.js";
import { changeCellColor } from "./addCellListeners.js";
import savePage from "./savePage.js";
import clearTable from "./clearTable.js";

const expBtn = document.querySelector(".expBtn");
const timerBtn = document.getElementById("timerBtn");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.querySelector(".clearBtn");

const orangeRedBtn = document.getElementById("pick-orangered");
const yellowBtn = document.getElementById("pick-yellow");
const cyanBtn = document.getElementById("pick-cyan");
const grayBtn = document.getElementById("pick-gray");

// * identify day of the week and highlight it
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
let todayColumn = document.getElementById(thisDay);
todayColumn.classList.add("today");
// *__________________________________________

saveBtn.addEventListener("click", () => {
  savePage();
});

clearBtn.addEventListener("click", clearTable);

expBtn.addEventListener("click", () => {
  prompt("Choose format");
});

timerBtn.addEventListener("click", () => {
  playSound("deny");
  alert(
    "TIMER not done yet - \n it will be a Pomodoro-type Timer when it is done."
  );
});

orangeRedBtn.addEventListener("click", () => {
  changeCellColor("orangered");
});

yellowBtn.addEventListener("click", () => {
  changeCellColor("yellow");
});

cyanBtn.addEventListener("click", () => {
  changeCellColor("cyan");
});

grayBtn.addEventListener("click", () => {
  changeCellColor("gray");
});

addCellListeners();
displayMessage("Click inside any cell to start");
