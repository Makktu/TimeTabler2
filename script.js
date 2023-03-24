import playSound from "./sfxPlayer.js";
import displayMessage from "./messageArea.js";
import addCellListeners from "./addCellListeners.js";
// import nameCells from "./nameCells.js";

const expBtn = document.querySelector(".expBtn");
const timerBtn = document.getElementById("timerBtn");

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
displayMessage("Click inside any cell to start");

// things to add to this:
// undo
// colorpicker
// all kinds of customization of display
// custom times
// month views, year views - single day views
