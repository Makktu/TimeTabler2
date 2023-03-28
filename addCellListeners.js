let allCells = document.getElementsByTagName("td");

let clickedCellColor = "orangered";

export function changeCellColor(newCellColor) {
  console.log(newCellColor);
  clickedCellColor = newCellColor;
  console.log(clickedCellColor);
}

export default function addCellListeners(savedData) {
  // checkForSavedPage();
  [...allCells].forEach((cell, ind) => {
    cell.classList.add("active-timetable-cell");
    cell.classList.add(`unique-cell${ind}`);
    cell.addEventListener("click", () => {
      if (cell.classList[1].split("-")[1] == "cell0") return;
      if (!cell.classList.contains(`clicked-cell-${clickedCellColor}`)) {
        cell.classList.add(`clicked-cell-${clickedCellColor}`);
      } else {
        cell.classList.remove(`clicked-cell-orangered`);
        cell.classList.remove(`clicked-cell-cyan`);
        cell.classList.remove(`clicked-cell-yellow`);
        cell.classList.remove(`clicked-cell-gray`);
      }
    });
  });
}
