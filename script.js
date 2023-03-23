import playSound from "./sfxPlayer.js";
import displayMessage from "./messageArea.js";
import addCellListeners from "./addCellListeners.js";

const columnHeadings = ["Mon", "Tues", "Weds", "Thur", "Fri", "Sat", "Sun"];

const expBtn = document.querySelector(".expBtn");
const timerBtn = document.getElementById("timerBtn");

displayMessage("Click inside any cell to start");

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
let todayColumn = document.getElementById(thisDay);
todayColumn.classList.add("today");

// _________________________________________________

// tues4th.addEventListener("click", () => {
//   console.log("working");
//   let newVal = prompt("Enter new");
//   tues4th.innerText = newVal;
// });

expBtn.addEventListener("click", () => {
  prompt("Choose format");
});

timerBtn.addEventListener("click", () => {
  playSound("deny");
  alert(
    "TIMER not done yet - \n it will be a Pomodoro-type Timer when it is done."
  );
});

addCellListeners();
