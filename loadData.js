import addCellListeners from "./addCellListeners.js";

function json2array(json) {
  let result = [];
  let keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}

export default function loadUserData() {
  console.log("here!");
  let loadedPage = [];
  loadedPage = JSON.parse(localStorage.getItem("pageState"));
  let loadedCellsArray = json2array(loadedPage);
  console.log(loadedCellsArray, typeof loadedCellsArray);
  // [...loadedPage].forEach((cell, ind) => {
  //   cell.classList.add("active-timetable-cell");
  //   cell.classList.add(`unique-cell${ind}`);
  //   cell.addEventListener("click", () => {
  //     if (cell.classList[1].split("-")[1] == "cell0") return;
  //     if (cell.classList.contains("clicked-cell-on")) {
  //       cell.classList.remove("clicked-cell-on");
  //     } else {
  //       cell.classList.add("clicked-cell-on");
  //     }
  //     console.log(cell.classList[1].split("-")[1]);
  //   });
  // });
}
