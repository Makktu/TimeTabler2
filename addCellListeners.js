import loadUserData from "./loadData.js";

let allCells = document.getElementsByTagName("td");

function checkForSavedPage() {
  if (localStorage.getItem("pageState")) {
    allCells = loadUserData();
    return allCells;
  } else return;
}

export default function addCellListeners(savedData) {
  // checkForSavedPage();
  [...allCells].forEach((cell, ind) => {
    cell.classList.add("active-timetable-cell");
    cell.classList.add(`unique-cell${ind}`);
    cell.addEventListener("click", () => {
      if (cell.classList[1].split("-")[1] == "cell0") return;
      if (cell.classList.contains("clicked-cell-on")) {
        cell.classList.remove("clicked-cell-on");
      } else {
        cell.classList.add("clicked-cell-on");
      }
      console.log(cell.classList[1].split("-")[1]);
    });
  });
}
