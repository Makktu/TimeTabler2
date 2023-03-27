let allCells = document.getElementsByTagName("td");
let loadedPage = [];

function json2array(json) {
  let result = [];
  let keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}

function checkForSavedPage() {
  loadedPage = JSON.parse(localStorage.getItem("pageState"));
  loadedPage = json2array(loadedPage);
  return loadedPage;
}

export default function addCellListeners() {
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
