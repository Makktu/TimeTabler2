let allCells = document.getElementsByTagName("td");
let loadedPage = [];

function checkForSavedPage() {
  loadedPage = JSON.parse(localStorage.getItem("pageState"));
  return loadedPage;
}

export default function addCellListeners() {
  // loadedPage = checkForSavedPage();
  // if (loadedPage) {
  //   console.log(loadedPage);
  //   allCells = loadedPage;
  // } else {
  //   allCells = [...allCells];
  // }
  [...allCells].forEach((cell, ind) => {
    cell.classList.add("active-timetable-cell");
    cell.classList.add(`unique-cell${ind}`);
    cell.addEventListener("click", () => {
      if (cell.classList[1].split("-")[1] == "cell0") return;
      // playSound("accept");
      if (cell.classList.contains("clicked-cell-on")) {
        cell.classList.remove("clicked-cell-on");
      } else {
        cell.classList.add("clicked-cell-on");
      }
      console.log(cell.classList[1].split("-")[1]);
    });
  });
}
